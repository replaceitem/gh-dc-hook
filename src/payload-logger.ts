export const logPayload = async (eventType: string, data: any) => {
    await Deno.mkdir('./payload_log', {recursive: true});
    const eventName = [
        eventType,
        data.action ? data.action : undefined
    ].filter(s => s !== undefined).join('_').toLowerCase();
    const filename = `${new Date().toISOString().replaceAll(/[:.]/g,'-')}_${eventName}`;
    const json = JSON.stringify({
        data,
        event: eventType,
    }, null, 4);
    await Deno.writeTextFile(`./payload_log/${filename}.json`, json);
};