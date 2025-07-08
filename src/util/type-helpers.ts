export type Prettify<T> = {
    [K in keyof T]: T[K];
// deno-lint-ignore ban-types
} & {};

export type FilterKeysByPrefix<T, P extends string> = {
    [K in keyof T as K extends `${P}${string}` ? K : never]: T[K];
};

export type FilterPropertiesByType<T, V> = {
    [K in keyof T as T[K] extends V ? never : K]: T[K];
};


type CommonKeys<T extends object> = keyof T;
type AllKeys<T> = T extends any ? keyof T : never;
type NonCommonKeys<T extends object> = Exclude<AllKeys<T>, CommonKeys<T>>;
type PickType<T, K extends AllKeys<T>> = T extends { [k in K]?: any } ? T[K] : undefined;
type PickTypeOf<T, K extends string | number | symbol> = K extends AllKeys<T> ? PickType<T, K> : never;
export type MergeUnion<T extends object> = {
    [k in CommonKeys<T>]: PickTypeOf<T, k>;
} & {
    [k in NonCommonKeys<T>]?: PickTypeOf<T, k>;
};

export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends Array<infer I>
        ? Array<DeepPartial<I>>
        : (unknown extends T[P] ? unknown : DeepPartial<T[P]>)
};

export const unsafeDeclare = <T>(t: DeepPartial<T>): T => {
    return t as T;
};