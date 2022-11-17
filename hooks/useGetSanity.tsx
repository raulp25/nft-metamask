import { sanityClient } from '../sanity';


// Created in case we need to expand sanity request
export const useGetSanity= async({query, params}:any) => {
    const collection = await sanityClient.fetch(query,{
        id: params?.id
    });
        
    return {
        
    }
}

