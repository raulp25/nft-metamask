import Link from 'next/link';
import { Collection } from '../../typings';

import {  urlFor } from '../../sanity';
import { BigNumber } from 'ethers';
import { Toaster } from 'react-hot-toast';


interface Props{
    collection: Collection,
    rest: { 
        claimedSupply: number;
        totalSupply: BigNumber | undefined;
        address: string | undefined;
        mintNFT: () => void;
        handleLogState: () => void;
        priceInEth: string;
        loading: boolean;
    }
};


export const NFTPage = ({collection, rest}:Props) => {
   const {address,claimedSupply,handleLogState,loading,mintNFT,priceInEth,totalSupply} = rest;
   
  return (
    <div className='flex h-screen flex-col lg:grid lg:grid-cols-10 universal-padding-top'>
        <Toaster position='bottom-center'/>
        {/* LEFT SIDE GRID*/}
        <section className=' lg:col-span-4 bg-gradient-to-br from-gray-800 to-indigo-600'>
            <div className='flex flex-col items-center justify-center py-2 lg:min-h-screen'>
                <div className='bg-gradient-to-br from-orange-400 to-indigo-600 p-1 lg:p-2 rounded-xl'>
                    <img className='w-44 h-44 rounded-xl object-cover lg:h-96 lg:w-72' src={urlFor(collection.previewImage).url()} alt="collection-previewImage" />
                </div>

                <div className='text-center p-5 space-y-2'>
                    <h1 className='text-4xl font-bold text-white'>
                        {collection.nftCollectionName}
                    </h1>

                    <h2 className='text-xl mx-auto xl:w-10/12 ntf-collection-description text-gray-300'>
                        {collection.description}
                    </h2>
                </div>
            </div>
        </section>


        {/* RIGHT SIDE GRID*/}
        <main className='flex flex-1 flex-col p-12 lg:col-span-6'>
            <header className='flex items-center justify-between'>
                <Link href={'/collections'}>
                    <h1 className='w-52 cursor-pointer text-xl font-extralight sm:w-80'>
                        The{' '}  
                        <span className='font-extrabold underline decoration-pink-600/50'> 
                            JETZEMANI 
                        </span>{' '} 
                        NFT Market Place
                    </h1>
                </Link>

                <button onClick={handleLogState} className='rounded-full bg-zinc-900 text-white text-xs font-bold px-4 py-2 lg:px-5 lg:py-3 lg:text-base'
                >
                { address ? 'Sign Out' : 'Sign In'}  
                </button>                
            </header>

            <hr className='my-2 border'/>
            { address && (
                <p className='text-center text-sm text-rose-400'>You're logged in with wallet {address.substring(0,5)}...{address.substring(address.length - 5)}</p>
            ) }

            <div className='mt-10 flex flex-1 flex-col items-center justify-center text-center space-y-6 lg:space-y-0'>
                <img className='pb-10 w-80 object-cover lg:h-40' src={urlFor(collection.mainImage).url()} alt="collection-profile-image" />

                <h1 className='text-3xl 2xl:w-7/12 font-bold lg:text-5xl lg:font-extrabold'>
                    {collection.title}
                </h1>
                {loading ?          
                        <p className='pt-2 text-xl text-green-700 animate-pulse'>
                            Loading Supply Count...
                        </p>
                :       <p className='pt-2 text-xl text-green-500'>
                        {claimedSupply} / {totalSupply?.toString()} NFT's claimed
                        </p>
                }
                {loading && <img className=' h-36 w-36 sm:h-88 sm:w-88 object-contain rounded-lg pt-2 lg:pt-7 ' src="https://media1.giphy.com/media/feN0YJbVs0fwA/200w.webp?cid=ecf05e47p5ceelt26ukskomwcbz69umrv8yzuicc8n1fbe17&rid=200w.webp&ct=g" alt="crazy-cube" /> }
            </div>

            {/* Mint Button */}
            <button onClick={mintNFT} disabled={loading || claimedSupply === totalSupply?.toNumber() || !address} className='mt-10 h-16 w-full rounded-full font-bold bg-zinc-900 text-white disabled:bg-gray-400'>
                {loading ? 
                <>Loading</>
                : claimedSupply === totalSupply?.toNumber() ? 
                <>SOLD OUT</>
                : !address ? 
                <>Sign in to Mint</>
                : 
                <span className='font-bold' >Mint NFT ({priceInEth} ETH)</span>
                }
            </button>
        </main>
    </div>
  )
}
