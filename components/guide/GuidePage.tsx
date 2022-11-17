import { useContext } from 'react';
import { NftContext } from '../../context';
import Link from 'next/link';
import { GuideImages } from '../../typings'

import { urlFor } from '../../sanity';

interface Props {
  guides: GuideImages;
};

export const GuidePage = ({guides}:Props) => {
  const {claimedSupply}= useContext(NftContext);
  
  return ( //WHOLE PAGE WITH NO DISTINCTION NEEDED 
      <div className=' guide-container py-24 lg:py-20 mx-auto text-white'>
          <header className='' >
              <div className=''>
                  <p className=' guide-title'>How to mint NFT's from the JD Dog Collection with Metamask</p>
              </div>
              <div className='mt-7'>
                  <img className='w-12/12  mx-auto mt-7' src={urlFor(guides.guide1).url()} alt="guide-1" />
              </div>
          </header>

          <section>
              <div className='mt-7' >
                  <p className='tailor-bold-text'>What Does Minting an NFT Mean?</p> 
                  <p className='mt-6'>
                    Minting, in regards to NFT's, is the process of taking a digital asset and converting the digital file into a digital asset stored on the blockchain. Making it officially a commodity that can be bought and sold.
                  </p>
                  <div className='flex justify-center py-10 gap-5' >
                      <span className='w-1 h-1 rounded-xl bg-white'></span>
                      <span className='w-1 h-1 rounded-xl bg-white'></span>
                      <span className='w-1 h-1 rounded-xl bg-white'></span>
                  </div>
                  <p className='mt-0 '>
                  Ok, now that we've seen what is all about, let's create a Metamask Crypto Wallet and mint the Jetzemani Dogs Collection NFT's with free test Ethereum Gas. 
                  </p>
              </div>

              <div className='mt-7' >
                  <p className=''>
                    Requisites: 
                  </p>
                  <ul className='mt-3'>
                      <li className='list-disc ml-6 text-slate-300 mt-6'>For desktop download Metamask extension(You can download it from your preferred Web Store)</li>
                      <li className='list-disc ml-6 text-slate-300 mt-6'>For mobile download Metamask app(You can download it from the App Store or Play Store)</li>
                      <li className='list-disc ml-6 text-slate-300 mt-6'>Twitter account to fund your wallet with Goerli Gas from the official Faucet Paradigm site <Link href={'https://faucet.paradigm.xyz'}><a target="_blank" className='link-border cursor-pointer'>(https://faucet.paradigm.xyz)</a></Link></li>
                  </ul>
              </div>
          </section>
          
          <section className='mt-7 lg:mt-10'>
              <div className='' >
                  <p className=''>
                    Now that everything's ready, let's begin! 🎃
                  </p>
              </div>

              <div className='mt-7 lg:mt-10'>
                  <p>
                    Open Metamask and create a new wallet, just follow the instructions which are pretty straightforward. 
                  </p>
                  <img className='w-12/12 sm:w-10/12 2xl:w-11/12 mx-auto mt-7 lg:mt-10' src={urlFor(guides.guide9).url()} alt="guide-9" />
              </div>

              <div className='mt-7 lg:mt-10'>
                  <p>
                    Make sure to keep your secret recovery phrase in case you need it later to login into OpenSea or Metamask.
                  </p>
              </div>

              <div className='mt-7 lg:mt-10'>
                  <p>
                    Now that we've created our account, let's select "Show/hide test networks" by clicking in the Ethereum Mainet bar on top of Metamask.
                  </p>
                  <img className='w-12/12 sm:w-10/12 lg:w-9/12  mx-auto mt-7 lg:mt-10' src={urlFor(guides.guide2).url()} alt="guide-2" />
              </div>

              <div className='mt-7 lg:mt-10'>
                  <p>
                    Enable "Show test networks" option to get access to the test networks including Goerli test network.
                  </p>
                  <img className='w-12/12 sm:w-10/12 lg:w-8/12 2xl:w-9/12 mx-auto mt-7 lg:mt-10' src={urlFor(guides.guide3).url()} alt="guide-3" />
              </div>

              <div className='mt-7 lg:mt-10'>
                  <p>
                    Connect to Goerli Test network.
                  </p>
                  <img className='w-10/12 sm:w-8/12 lg:w-7/12 mx-auto mt-7 lg:mt-10' src={urlFor(guides.guide4).url()} alt="guide-4" />
              </div>

              <div className='mt-7 lg:mt-10'>
                  <p>
                    Before jumping to fund our wallet copy your wallet address by clicking on your account address.
                  </p>
                  <img className='w-8/12 sm:w-8/12 lg:w-6/12 mx-auto mt-7 lg:mt-10' src={urlFor(guides.guide5).url()} alt="guide-5" />
              </div>

              <div className='mt-7 lg:mt-10'>
                  <p className='tailor-bold-text'>
                    Fund your Wallet:
                  </p>
              </div>

              <div className='mt-7 lg:mt-10' >
                  <p className=''>
                      To fund our wallet with "Goerli Gas":  
                  </p>
                  <ul className='mt-3 lg:mt-10'>
                      <li className='list-disc ml-6 text-slate-300 mt-6'>Go to Faucet Paradigm site <Link href={'https://faucet.paradigm.xyz'}><a target="_blank" className='link-border cursor-pointer'>(https://faucet.paradigm.xyz)</a></Link> and login with a twitter account</li>
                      <li className='list-disc ml-6 text-slate-300 mt-6'>Copy/paste your account address, which we just took from Metamask</li>
                      <li className='list-disc ml-6 text-slate-300 mt-6'>Click on "claim" to get your Gas</li>
                  </ul>
                
                  <div className='mt-7 lg:mt-10'>
                      <img className='w-9/12 lg:w-6/12 2xl:w-7/12 mx-auto mt-7 lg:mt-10' src={urlFor(guides.guide6).url()} alt="guide-6" />
                  </div>
                  
                  <div className='mt-7 lg:mt-10'>
                      <img className='w-9/12 lg:w-6/12 2xl:w-7/12 mx-auto mt-7 lg:mt-10' src={urlFor(guides.guide7).url()} alt="guide-7" />
                  </div>
                  
                  <div className='mt-7 lg:mt-10'>
                      <p className='mt-7 lg:mt-10'>
                      Simple right?
                      </p>
                  </div>
              </div>
          </section>

          <section className='mt-7 lg:mt-10'>
              <div>
                  <p className='tailor-bold-text'>
                    Mint JD Dog Collection Items:
                  </p>
              </div>
              <div className='mt-7 lg:mt-10'>
                  <p>
                    Now that we have funds in our wallet its time to mint Nft's from the JD Dog Collection.
                  </p>
                  <p className='mt-7 lg:mt-10'>
                    Go to the <Link href={'/nft/jetzemani-dogs'}><a target="_blank" className='link-border cursor-pointer'>Mint Drop</a></Link> page and sign in with your wallet.
                  </p>
                  <p className='mt-7 lg:mt-10'>
                    (for android & ios a pop-up will come up, select to open Metamask app and sign in from there within their built in browser)
                  </p>
                  <p className='mt-7 lg:mt-10'>
                    If everything goes fine, you'll be able to mint Nft's from the collection itself. The Items are minted sequentially, this means that
                    whenever you mint a nft the one being minted is going to be the next one to the last that was previously minted. Currently the sequence is {`${claimedSupply}`} {'=>'} {`${claimedSupply<32 ? claimedSupply + 1 : claimedSupply}`} 

                    <img className='w-12/12 lg:w-11/12 mx-auto mt-7 lg:mt-10' src={urlFor(guides.guide8).url()} alt="guide-8" />
                  </p>
              </div>

              <div className='mt-7 lg:mt-10'>
                  <p className=''>
                    Once you've minted a NFT, it will be added to your wallet with its respective ownership blockchain. To take a look at your NFT's we need to jump to OpenSea, so let's do that.
                  </p>
              </div>
          </section>

          <section  className='mt-7 lg:mt-10'>
              <div>
                  <p className='tailor-bold-text'>
                  Look at your minted NFT's in OpenSea:
                  </p>
              </div>
              <div className='mt-7 lg:mt-10'>
                  <ul className='mt-3'>
                      <li className='list-disc ml-6 text-slate-300 mt-6'>Go to <Link href={'https://testnets.opensea.io'}><a target="_blank" className='link-border cursor-pointer'>testnets.opensea.io</a></Link> (make sure you are on the testnets route)</li>
                      <li className='list-disc ml-6 text-slate-300 mt-6'>Open the profile element and sign in with your Metamask wallet</li>
                      <div className='mt-7 lg:mt-10'>
                          <img className='w-11/12 sm:w-10/12 lg:w-9/12 2xl:w-10/12  mx-auto mt-7 lg:mt-10' src={urlFor(guides.guide10).url()} alt="guide-10" />
                      </div>

                      <div className='mt-7 lg:mt-10'>
                          <img className='w-11/12  sm:w-10/12 lg:w-9/12 2xl:w-10/12 mx-auto mt-7 lg:mt-10' src={urlFor(guides.guide11).url()} alt="guide-11" />
                      </div>

                      <li className='list-disc ml-6 text-slate-300 mt-6'>Now you will see your minted NFT's!</li>
                      <div className='mt-7 lg:mt-10'>
                          <img className='w-12/12 lg:w-11/12 2xl:w-12/12 mx-auto mt-7 lg:mt-10' src={urlFor(guides.guide13).url()} alt="guide-13" />
                      </div>
                  </ul>
              </div>
              <div className='mt-7 lg:mt-10'>
                  <p className=''>
                    Since I've minted the first 7 NFT's they are not available anymore. 
                  </p>
              </div>
              <div className='flex justify-center py-10 gap-5' >
                  <span className='w-1 h-1 rounded-xl bg-white'></span>
                  <span className='w-1 h-1 rounded-xl bg-white'></span>
                  <span className='w-1 h-1 rounded-xl bg-white'></span>
              </div>
          </section>
          <footer>
              <div className=''>
                  <p className=''>
                    This is the end, hope you've enjoyed the experience of interacting with NFT technology. 
                  </p>
              </div>

              <div className='mt-7 lg:mt-10'>
                  <p className='peace'>
                  ~ Peace
                  </p>
              </div>
          </footer>
      </div>
  )
}
