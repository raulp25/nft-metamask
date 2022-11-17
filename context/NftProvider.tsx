import { useState } from "react";
import { NftContext } from './NftContext';
import { CardState } from '../typings';

import { BigNumber } from "ethers";

interface props {
    children: JSX.Element | JSX.Element[]
};

export const NftProvider = ({ children }: props) => {
    const [claimedSupply, setClaimedSupply] = useState<number>(0);
    const [totalSupply, setTotalSupply] = useState<BigNumber>();
    const [NFTCardState, setNFTCardState] = useState<CardState>({} as any);

    return (
        <NftContext.Provider value={{claimedSupply, setClaimedSupply, totalSupply, setTotalSupply, NFTCardState, setNFTCardState}}>
            {children}
        </NftContext.Provider>
    )
}