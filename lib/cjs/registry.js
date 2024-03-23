"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountParser = exports.registry = void 0;
const modules_1 = require("@cosmjs/cosmwasm-stargate/build/modules");
const proto_signing_1 = require("@cosmjs/proto-signing");
const s = __importStar(require("@cosmjs/stargate"));
const modules_2 = require("@cosmjs/stargate/build/modules");
const utils_1 = require("@cosmjs/utils");
const auth_1 = require("cosmjs-types/cosmos/auth/v1beta1/auth");
const tx_1 = require("cosmjs-types/cosmos/bank/v1beta1/tx");
const distribution_1 = require("cosmjs-types/cosmos/distribution/v1beta1/distribution");
const tx_2 = require("cosmjs-types/cosmos/distribution/v1beta1/tx");
const tx_3 = require("cosmjs-types/cosmos/gov/v1/tx");
const gov_1 = require("cosmjs-types/cosmos/gov/v1beta1/gov");
const params_1 = require("cosmjs-types/cosmos/params/v1beta1/params");
const tx_4 = require("cosmjs-types/cosmos/staking/v1beta1/tx");
const tx_5 = require("cosmjs-types/cosmos/upgrade/v1beta1/tx");
const upgrade_1 = require("cosmjs-types/cosmos/upgrade/v1beta1/upgrade");
const proposal_1 = require("cosmjs-types/cosmwasm/wasm/v1/proposal");
const tx_6 = require("cosmjs-types/cosmwasm/wasm/v1/tx");
const tx_7 = require("cosmjs-types/ibc/applications/interchain_accounts/controller/v1/tx");
const client_1 = require("cosmjs-types/ibc/core/client/v1/client");
const tendermint_1 = require("cosmjs-types/ibc/lightclients/tendermint/v1/tendermint");
const alliance = __importStar(require("./alliance"));
const batch = __importStar(require("./batch"));
const eth = __importStar(require("./ethermint/types"));
const gravity = __importStar(require("./gravity/v1"));
const inj = __importStar(require("./injective/types"));
const denom = __importStar(require("./kujira/denom"));
const oracle = __importStar(require("./kujira/oracle"));
const proposal_2 = require("./kujira/scheduler/types/proposal");
const vesting_1 = require("./stride/vesting");
const proposalTypes = [
    [
        "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
        distribution_1.CommunityPoolSpendProposal,
    ],
    ["/cosmos.distribution.v1beta1.MsgCommunityPoolSpend", tx_2.MsgCommunityPoolSpend],
    ["/cosmos.params.v1beta1.ParameterChangeProposal", params_1.ParameterChangeProposal],
    ["/cosmos.params.v1beta1.MsgUpdateParams", tx_1.MsgUpdateParams],
    ["/cosmwasm.wasm.v1.StoreCodeProposal", proposal_1.StoreCodeProposal],
    [
        "/cosmwasm.wasm.v1.InstantiateContractProposal",
        proposal_1.InstantiateContractProposal,
    ],
    ["/cosmwasm.wasm.v1.MigrateContractProposal", proposal_1.MigrateContractProposal],
    ["/cosmwasm.wasm.v1.UpdateAdminProposal", proposal_1.UpdateAdminProposal],
    ["/cosmwasm.wasm.v1.ClearAdminProposal", proposal_1.ClearAdminProposal],
    ["/cosmwasm.wasm.v1.PinCodesProposal", proposal_1.PinCodesProposal],
    ["/cosmwasm.wasm.v1.UnpinCodesProposal", proposal_1.UnpinCodesProposal],
    ["/cosmwasm.wasm.v1.ExecuteContractProposal", proposal_1.ExecuteContractProposal],
    [
        "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal",
        proposal_1.UpdateInstantiateConfigProposal,
    ],
    ["/cosmwasm.wasm.v1.MsgStoreCode", tx_6.MsgStoreCode],
    ["/cosmwasm.wasm.v1.MsgInstantiateContract", tx_6.MsgInstantiateContract],
    ["/cosmwasm.wasm.v1.MsgMigrateContract", tx_6.MsgMigrateContract],
    ["/cosmwasm.wasm.v1.MsgUpdateAdmin", tx_6.MsgUpdateAdmin],
    ["/cosmwasm.wasm.v1.MsgClearAdmin", tx_6.MsgClearAdmin],
    // ["/cosmwasm.wasm.v1.MsgPinCodes", MsgPinCodes],
    // ["/cosmwasm.wasm.v1.MsgUnpinCodes", MsgUnpinCodes],
    ["/cosmwasm.wasm.v1.MsgExecuteContract", tx_6.MsgExecuteContract],
    ["/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig", tx_6.MsgUpdateInstantiateConfig],
    ["/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal", upgrade_1.SoftwareUpgradeProposal],
    ["/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade", tx_5.MsgSoftwareUpgrade],
    ["/kujira.scheduler.CreateHookProposal", proposal_2.CreateHookProposal],
    ["/kujira.scheduler.UpdateHookProposal", proposal_2.UpdateHookProposal],
    ["/kujira.scheduler.DeleteHookProposal", proposal_2.DeleteHookProposal],
    ["/cosmos.gov.v1beta1.TextProposal", gov_1.TextProposal],
    ["/cosmos.gov.v1.MsgExecLegacyContent", tx_3.MsgExecLegacyContent],
    ["/ibc.core.client.v1.ClientUpdateProposal", client_1.ClientUpdateProposal],
];
const extraIbc = [
    ["/ibc.lightclients.tendermint.v1.Header", tendermint_1.Header],
    ["/ibc.lightclients.tendermint.v1.ClientState", tendermint_1.ClientState],
    ["/ibc.lightclients.tendermint.v1.ConsensusState", tendermint_1.ConsensusState],
    ["/ibc.lightclients.tendermint.v1.Misbehaviour", tendermint_1.Misbehaviour],
    [
        "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount",
        tx_7.MsgRegisterInterchainAccount,
    ],
    ["/ibc.applications.interchain_accounts.controller.v1.MsgSendTx", tx_7.MsgSendTx],
];
const types = [
    ...s.defaultRegistryTypes,
    [
        "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation",
        tx_4.MsgCancelUnbondingDelegation,
    ],
    ...denom.types,
    // ...ethermintEvm.types,
    // ...ethermintFeemarket.types,
    ...oracle.types,
    ...modules_1.wasmTypes,
    ...modules_2.ibcTypes,
    ...proposalTypes,
    ...extraIbc,
    ...gravity.types,
    ...alliance.types,
    ...batch.types,
];
exports.registry = new proto_signing_1.Registry(types);
const accountParser = (acc) => {
    var _a;
    switch (acc.typeUrl) {
        case "/stride.vesting.StridePeriodicVestingAccount":
            const baseAccount = (_a = vesting_1.StridePeriodicVestingAccount.decode(acc.value)
                .baseVestingAccount) === null || _a === void 0 ? void 0 : _a.baseAccount;
            (0, utils_1.assert)(baseAccount);
            return s.accountFromAny({
                typeUrl: "/cosmos.auth.v1beta1.BaseAccount",
                value: auth_1.BaseAccount.encode(baseAccount).finish(),
            });
        case "/injective.types.v1beta1.EthAccount":
            const injAccount = inj.EthAccount.decode(acc.value);
            const baseInjAccount = injAccount.baseAccount;
            const pubKey = baseInjAccount.pubKey;
            return {
                address: baseInjAccount.address,
                pubkey: pubKey
                    ? {
                        type: "/injective.crypto.v1beta1.ethsecp256k1.PubKey",
                        value: Buffer.from(pubKey.value).toString("base64"),
                    }
                    : null,
                accountNumber: baseInjAccount.accountNumber.toNumber(),
                sequence: baseInjAccount.sequence.toNumber(),
            };
        case "/ethermint.types.v1.EthAccount":
            const account = eth.EthAccount.decode(acc.value);
            const baseEthAccount = account.baseAccount;
            const pubKeyEth = baseEthAccount.pubKey;
            return {
                address: baseEthAccount.address,
                pubkey: pubKeyEth
                    ? {
                        type: "/ethermint.crypto.v1.ethsecp256k1.PubKey",
                        value: Buffer.from(pubKeyEth.value).toString("base64"),
                    }
                    : null,
                accountNumber: baseEthAccount.accountNumber.toNumber(),
                sequence: baseEthAccount.sequence.toNumber(),
            };
        default:
            return s.accountFromAny(acc);
    }
};
exports.accountParser = accountParser;
