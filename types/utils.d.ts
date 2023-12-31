import moment from 'moment';
import { IValue, RegClass, _ISchema, _ISelection, _IType, _Transaction } from './interfaces-private';
import { DataTypeDef, Expr, ExprRef, Interval, nil, QName } from 'pgsql-ast-parser';
import { ISubscription, IType } from './interfaces';
export interface Ctor<T> extends Function {
    new (...params: any[]): T;
    prototype: T;
}
export declare type Optional<T> = {
    [key in keyof T]?: T[key];
};
export declare type SRecord<T> = Record<string, T>;
export declare function trimNullish<T>(value: T, depth?: number): T;
export declare function watchUse<T>(rootValue: T): {
    checked: T;
    check?: () => string | null;
};
export declare function deepEqual<T>(a: T, b: T, strict?: boolean, depth?: number, numberDelta?: number): boolean;
export declare function deepCompare<T>(a: T, b: T, strict?: boolean, depth?: number, numberDelta?: number): number;
declare type Json = {
    [key: string]: Json;
} | Json[] | string | number | null;
export declare function queryJson(a: Json, b: Json): boolean;
export declare function buildLikeMatcher(likeCondition: string, caseSensitive?: boolean): (stringToMatch: string | number) => boolean | null;
export declare function nullIsh(v: any): v is nil;
export declare function hasNullish(...vals: any[]): boolean;
export declare function sum(v: number[]): number;
export declare function deepCloneSimple<T>(v: T): T;
export declare function isSelectAllArgList(select: Expr[]): boolean;
export declare function ignore(...val: any[]): void;
export declare function combineSubs(...vals: ISubscription[]): ISubscription;
export interface ExecCtx {
    readonly schema: _ISchema;
    readonly transaction: _Transaction;
    readonly parametersValues?: any[];
}
export declare function executionCtx(): ExecCtx;
export declare function hasExecutionCtx(): boolean;
export declare function pushExecutionCtx<T>(ctx: ExecCtx, act: () => T): T;
export declare function indexHash(this: void, vals: (IValue | string)[]): string;
export declare function randomString(length?: number, chars?: string): string;
export declare function schemaOf(t: DataTypeDef): string | nil;
export declare function isType(t: any): t is (_IType | IType);
export declare namespace isType {
    var TAG: symbol;
}
export declare function suggestColumnName(expr: Expr | nil): string | null;
export declare function findTemplate<T>(this: void, selection: _ISelection, t: _Transaction, template?: T, columns?: (keyof T)[]): Iterable<T>;
export declare function compareVersions(_a: string, _b: string): number;
export declare function intervalToSec(v: Interval): number;
export declare function parseRegClass(_reg: RegClass): QName | number;
export declare function parseTime(str: string): moment.Moment;
export declare function colByName<T>(refs: Map<string, T>, ref: string | ExprRef, nullIfNotFound: boolean | nil): T | nil;
export declare function colToStr(col: string | ExprRef): string;
export declare function qnameToStr(col: string | QName): string;
export declare function asSingleName(col: string | ExprRef): string | nil;
export declare function asSingleQName(col: string | QName, allowedSchema?: string): string | nil;
export declare function errorMessage(error: unknown): string;
export declare function it<T>(iterable: Iterable<T>): IteratorHelper<T>;
export declare class IteratorHelper<T> implements Iterable<T> {
    private underlying;
    constructor(underlying: () => Iterable<T>);
    [Symbol.iterator](): Iterator<T, any, undefined>;
    flatten(): T extends Iterable<infer X> ? IteratorHelper<X> : never;
    reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number) => U, initialValue: U): U;
}
export declare function fromEntries<K, V>(iterable: readonly (readonly [K, V])[]): Map<K, V>;
export declare function notNil<T>(value: (T | nil)[] | nil): Exclude<T, null>[];
/** Modify an array if necessary */
export declare function modifyIfNecessary<T>(values: T[], mapper: (input: T) => T | nil): T[];
export {};
//# sourceMappingURL=utils.d.ts.map