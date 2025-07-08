import openapiTS, {astToString} from "openapi-typescript";
import ts from 'npm:typescript';


const getPropertyName = (property: ts.PropertySignature) => {
    const name = property.name;
    return (ts.isIdentifier(name) || ts.isStringLiteralLike(name)) && name.text ? name.text : undefined;
};

const filterGithubAst = (ast: ts.Node[]): ts.Node[] => {
    ast = ast.filter((node) => {
        return !(
            ts.isInterfaceDeclaration(node) && ['paths', 'operations'].includes(node.name.text)
            || ts.isTypeAliasDeclaration(node) && ['Parameter', 'Response', 'Header'].some(prefix => (node.name.text.startsWith(prefix)))
        );

    });

    ast = ast.map((node) => {
        if (ts.isInterfaceDeclaration(node) && node.name.text === 'components') {
            node = ts.factory.updateInterfaceDeclaration(
                node,
                node.modifiers,
                node.name,
                node.typeParameters,
                node.heritageClauses,
                node.members.filter(member => {
                    return ts.isPropertySignature(member) && getPropertyName(member) === 'schemas';
                })
            );
        }
        return node;
    });

    return ast;
}

const fetchApiSpec = async (url: string, filename: string, filterFn?: (ast: ts.Node[]) => ts.Node[]) => {
    console.log(`Pulling API spec from ${url}`);
    let ast = await openapiTS(new URL(url), {
        rootTypes: true,
    });
    if(filterFn) ast = filterFn(ast);
    const destinationUrl = new URL(import.meta.resolve(`./openapi/${filename}.ts`));
    console.log(`Saving to ${destinationUrl}`);
    const contents = astToString(ast);
    await Deno.writeTextFile(destinationUrl, contents);
};

await fetchApiSpec('https://raw.githubusercontent.com/github/rest-api-description/refs/heads/main/descriptions/api.github.com/api.github.com.json', 'github-schema', filterGithubAst);
await fetchApiSpec('https://raw.githubusercontent.com/discord/discord-api-spec/refs/heads/main/specs/openapi.json', 'discord-schema');
