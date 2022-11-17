import Link from 'next/link';
import { Collection } from '../../typings';

import { NFT } from '@thirdweb-dev/sdk';
import { ThirdwebNftMedia } from '@thirdweb-dev/react';


interface Props {
    nfts: NFT[];
    collection: Collection;
    rest:{
        nft: NFT,
        idx:number
    }
};

export const NftCard = ({collection,nfts,rest}:Props) => {
    const {nft,idx} = rest;
    const isOwned = '0x0000000000000000000000000000000000000000';

    
    return (
        <div className=' bg-gray-800 border border-green-400 rounded-t-2xl flex flex-col box-height box-width rounded-b-2xl cursor-pointer'>
            <Link href={`/nft/${collection.slug.current}`}>
                <div className='flex flex-col h-54 '>
                    <ThirdwebNftMedia
                    key={nft.metadata.id}
                    metadata={nft.metadata}
                    className='image-width-height object-cover rounded-t-2xl'
                    />
                    
                    <div className='p-4 '>
                        <div className=''>
                            <h2 className='mt-2 text-sm font-semibold text-gray-400 collection-text' >{collection.nftCollectionName.toUpperCase()}</h2>
                        </div>
                        <div className='flex gap-x-1'>
                            <p className='mt-2 text-sm font-bold text-gray-400 description-text' >{nfts[idx].metadata.description?.split(' ').splice(1,2).join(' ').toUpperCase()}</p>
                            <p className='mt-2 text-sm font-bold text-gray-400 description-text' >{nfts[idx].metadata.name}</p>
                        </div>

                        <div>
                        { isOwned === nfts[idx].owner ?
                            <p className='mt-2 text-sm text-gray-300 light-hover available-text font-extralight' >Available</p>
                            :
                            <div className='flex gap-1 items-center justify-between'>
                                <p className='mt-2 text-sm text-gray-300 dark-hover minted-text font-extralight' >Minted</p>
                                <div className='price-img'>
                                    <img src="/ethereum-classic-1.svg" alt="ethereum-green" />
                                </div>
                            </div>
                            }
                        </div>

                        { isOwned === nfts[idx].owner ?
                            <div className='flex items-center justify-between gap-2 px-2 py-2 mt-3 price-container'>
                                <div>
                                    <p className='price-text font-thin'>Price</p>  
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <div className='price-img'>
                                        <img src="/ethereum-blue.svg" alt="ethereum-blue" />
                                    </div>
                                    <p className='price-number' >0.01</p>
                                </div>
                            </div>
                        :
                            null   
                        } 
                    </div>
                </div>
            </Link>
        </div>
    )
}
