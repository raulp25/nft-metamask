import { createContext } from 'react';
import { CardState } from '../typings';

import { BigNumber } from 'ethers';


interface NftContextProps {
    claimedSupply: number; 
    setClaimedSupply: any;
    totalSupply: BigNumber | undefined; 
    setTotalSupply: any;
    NFTCardState: CardState; 
    setNFTCardState: any;
};

export const NftContext = createContext<NftContextProps>({} as any);
