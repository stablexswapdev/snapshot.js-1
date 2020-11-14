export declare const MULTICALL: {
    1: string;
    4: string;
    5: string;
    6: string;
    42: string;
    56: string;
    97: string;
    100: string;
    wanchain: string;
};
export declare const SNAPSHOT_SUBGRAPH_URL: {
    1: string;
    4: string;
    42: string;
};
export declare function call(provider: any, abi: any[], call: any[], options?: any): Promise<any>;
export declare function multicall(network: string, provider: any, abi: any[], calls: any[], options?: any): Promise<any>;
export declare function subgraphRequest(url: string, query: any): Promise<any>;
export declare function ipfsGet(gateway: string, ipfsHash: string, protocolType?: string): Promise<any>;
export declare function sendTransaction(web3: any, contractAddress: string, abi: any[], action: string, params: any[], overrides?: {}): Promise<any>;
export declare function getScores(space: string, strategies: any[], network: string, provider: any, addresses: string[], snapshot?: string): Promise<any[]>;
export declare function validateSchema(schema: any, data: any): true | import("ajv").ErrorObject<string, Record<string, any>>[];
declare const _default: {
    call: typeof call;
    multicall: typeof multicall;
    subgraphRequest: typeof subgraphRequest;
    ipfsGet: typeof ipfsGet;
    sendTransaction: typeof sendTransaction;
    getScores: typeof getScores;
    validateSchema: typeof validateSchema;
};
export default _default;
