import { NFT } from '@thirdweb-dev/sdk';


interface Image {
    asset: {
        url: string
    }
}

export interface Creator {
    _id:string
    address:string
    bio: string
    image: Image
    name:string
    slug: {
      current: string
    }
}

export interface Collection {
    _id: string
    address: string
    creator: Creator
    description: string
    mainImage: Image
    nftCollectionName: string
    previewImage: Image
    slug : {
        current: string
    }
    title: string
    
}

interface Attributes {
    trait_type: string,
    value: string
}

export interface Nft {
    metadata : {
        attributes: Attributes[], 
        description: string,
        id: string,
        image : string,
        name : string,
        uri: string, 
        }    
    owner: string, 
    supply: number, 
    type: string,
}

export interface GuideImages{
        guide1:  Image,
        guide2:  Image,
        guide3:  Image,
        guide4:  Image,
        guide5:  Image,
        guide6:  Image,
        guide7:  Image,
        guide8:  Image,
        guide9:  Image,
        guide10: Image,
        guide11: Image,
        guide12: Image,
        guide13: Image,
        
}

export type CardState = {
    nfts: NFT[];
    collection: Collection;
 }
