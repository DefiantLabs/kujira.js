import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../scheduler/params";
import { Hook } from "../scheduler/hook";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
export declare const protobufPackage = "kujira.scheduler";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryGetHookRequest {
    id: number;
}
export interface QueryGetHookResponse {
    Hook: Hook | undefined;
}
export interface QueryAllHookRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllHookResponse {
    Hook: Hook[];
    pagination: PageResponse | undefined;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryGetHookRequest: {
    encode(message: QueryGetHookRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): QueryGetHookRequest;
    fromJSON(object: any): QueryGetHookRequest;
    toJSON(message: QueryGetHookRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetHookRequest>): QueryGetHookRequest;
};
export declare const QueryGetHookResponse: {
    encode(message: QueryGetHookResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): QueryGetHookResponse;
    fromJSON(object: any): QueryGetHookResponse;
    toJSON(message: QueryGetHookResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetHookResponse>): QueryGetHookResponse;
};
export declare const QueryAllHookRequest: {
    encode(message: QueryAllHookRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): QueryAllHookRequest;
    fromJSON(object: any): QueryAllHookRequest;
    toJSON(message: QueryAllHookRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllHookRequest>): QueryAllHookRequest;
};
export declare const QueryAllHookResponse: {
    encode(message: QueryAllHookResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): QueryAllHookResponse;
    fromJSON(object: any): QueryAllHookResponse;
    toJSON(message: QueryAllHookResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllHookResponse>): QueryAllHookResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a Hook by id. */
    Hook(request: QueryGetHookRequest): Promise<QueryGetHookResponse>;
    /** Queries a list of Hook items. */
    HookAll(request: QueryAllHookRequest): Promise<QueryAllHookResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Hook(request: QueryGetHookRequest): Promise<QueryGetHookResponse>;
    HookAll(request: QueryAllHookRequest): Promise<QueryAllHookResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
