import { Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "kujira.scheduler";
export interface CreateHookProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** The account that will execute the msg on the schedule */
    executor: string;
    /** The contract that the msg is called on */
    contract: string;
    msg: Uint8Array;
    frequency: number;
    funds: Coin[];
}
export interface UpdateHookProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    id: number;
    executor: string;
    contract: string;
    msg: Uint8Array;
    frequency: number;
    funds: Coin[];
}
export interface DeleteHookProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    id: number;
}
export declare const CreateHookProposal: {
    encode(message: CreateHookProposal, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): CreateHookProposal;
    fromJSON(object: any): CreateHookProposal;
    toJSON(message: CreateHookProposal): unknown;
    fromPartial(object: DeepPartial<CreateHookProposal>): CreateHookProposal;
};
export declare const UpdateHookProposal: {
    encode(message: UpdateHookProposal, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): UpdateHookProposal;
    fromJSON(object: any): UpdateHookProposal;
    toJSON(message: UpdateHookProposal): unknown;
    fromPartial(object: DeepPartial<UpdateHookProposal>): UpdateHookProposal;
};
export declare const DeleteHookProposal: {
    encode(message: DeleteHookProposal, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): DeleteHookProposal;
    fromJSON(object: any): DeleteHookProposal;
    toJSON(message: DeleteHookProposal): unknown;
    fromPartial(object: DeepPartial<DeleteHookProposal>): DeleteHookProposal;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
