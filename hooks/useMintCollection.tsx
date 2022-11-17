import { NftContext } from '../context';
import { useEffect, useState, useContext } from 'react';
import { useMetamaskAuth } from './Auth/useMetamaskAuth';
import { Collection } from '../typings';

import { useContract, useNFTs } from '@thirdweb-dev/react';
import toast from 'react-hot-toast';


export const useMintCollection = <T extends Collection>( collection :T) => {

    //Get total number of claimed and supply of NFT'S from NFT Context        
    const {claimedSupply, setClaimedSupply, totalSupply, setTotalSupply} = useContext(NftContext);
    const [priceInEth, setPriceInEth] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    //Get contract information from ThirdWeb
    const nftDrop = useContract(collection.address, "nft-drop").contract;
    const { data: nfts, isLoading: isReadingNfts } = useNFTs(nftDrop);

    //Auth process custom hook- connect and disconnect from Metamask
    const { address, handleLogState } = useMetamaskAuth();
    
    //Get Price of each NFT
    useEffect(() => {
        if(!nftDrop) return;
        const fetchPrice = async() => {
        const claimConditions = await nftDrop.claimConditions.getAll();
        setPriceInEth(claimConditions?.[0].currencyMetadata.displayValue); 
        }
       fetchPrice();
    }, [nftDrop]);
    
    // Get total number of claimed and total supply of NFT'S and set's their count into NFT Context
    const fetchNFTDropData = async() => {
        if(!nftDrop) return;
        setLoading(true);
        const claimed = await nftDrop.getAllClaimed();
        const total = await nftDrop.totalSupply();
        setClaimedSupply(claimed.length);
        setTotalSupply(total);
        setLoading(false);
    };

    useEffect(() => {
        if(!nftDrop) return;
       
       fetchNFTDropData();

    }, [nftDrop]);

    //Minting Process => Successful or Denied NFT Mint process
    const mintNFT = () => {
        if(!nftDrop || !address) return;
        const quantity = 1; 
        setLoading(true);
        const notification = toast.loading('Minting NFT...',{
            style: {
                background: 'white',
                color: '#49e08f',
                fontWeight: 'bolder',
                fontSize: '17px',
                padding: '20px',
            },
        });

        // transaction
        nftDrop.claimTo(address, quantity).then(async(transaction) => {
            const receipt = transaction[0].receipt; //transaction receipt 
            const claimedTokenId = transaction[0].id; //NFT claimed id
            const claimedNFT = await transaction[0].data(); //fetch claimed NFT metadata
            toast('Transaction Succeed NFT||Minted',{
                duration: 5000,
                style: {
                    background: 'white',
                    color: '#49e08f',
                    fontWeight: 'bolder',
                    fontSize: '17px',
                    padding: '20px',
                    },
            });
            fetchNFTDropData();
        
        }).catch(err => {
            console.log(err);
            toast('Transaction Failed NFT||NOT-Minted',{
                duration: 5000,
                style: {
                    background: 'white',
                    color: '#e63466',
                    fontWeight: 'bolder',
                    fontSize: '17px',
                    padding: '20px',
                    },
            });
        }).finally(() => { setLoading(false); toast.dismiss(notification);});
    }

    return {
        claimedSupply,
        totalSupply,
        address,
        mintNFT,
        handleLogState,
        priceInEth,
        loading,
    }
}

