import Link from 'next/link';


export const HomePage = () => {
  return (
    <div className='godfather universal-padding-top'>
        <section className='flex flex-col items-center py-10 bg-white'>
            <div className='flex items-center h-8 gap-4 border-b border-black pb-3 justify-between'>
                <div >
                    <img className='thirdweb-svg' src="/thirdweb.svg" alt="third-web" />
                </div>
                <div>
                    <img className='next-svg ' src="/nextjs-2.svg" alt="nextjs" />
                </div>
                <div>
                    <img className='typescript-svg ' src="/typescript.svg" alt="typescript" />
                </div>
            </div>
            
            <div className='flex items-center h-full gap-4 justify-center mt-2'>
                <div>
                    <img className='sanity-svg' src="/sanity.svg" alt="sanity-backend-cms" />
                </div>
                <div>
                    <img className='metamask-svg ' src="/metamask.svg" alt="metamask" />
                </div>
                <div>
                    <img className='tailwind-svg ' src="/tailwindcss.svg" alt="tailwind" />
                </div>
            </div>
        </section>
        {/* BLUE CONTAINER WITH THUGLIFE IMAGE AND SPINNING REACT  */}
        <main className='super-container'>
            <div  className='flex flex-col-reverse items-center lg:items-start  lg:justify-center lg:flex-row mx-auto py-10 lg:py-10 2xl:py-20 thug-container gap-10 lg:gap-10 lg:px-10'>
                
                <img className='thug-img' src="/thug.png" alt="write-this-down" />
                
                <section className='flex flex-col items-center gap-10'>
                    <div className='flex flex-col p-5 lg:p-0 thug-text-container text-lg xl:text-lg 2xl:text-lg max-w-xl gap-y-10 font-thin'>
                        <div className='flex lg:gap-8 lg:justify-start justify-center gap-4'>
                            <div className='text-white flex flex-col gap-2  lg:flex-row lg:gap-4'>
                                <h1 className='lg:font-extralight font-thin  text-5xl lg:text-6xl self-start'>NFT</h1>
                                <p  className='lg:font-extralight font-thin  text-5xl lg:text-6xl self-start'>DAPP</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="4rem" height="4rem" fill="none" viewBox="0 0 602 602"><g><path stroke="#E91E63" stroke-miterlimit="10" stroke-width="24" d="M274.151 201.657c66.903-17.997 131.399-24.32 182.018-19.756l1.077-11.95-1.077 11.95c30.477 2.747 55.643 9.518 73.763 18.622 18.414 9.252 27.823 19.969 30.45 29.72h0c2.776 10.303-.231 25.206-12.364 43.484-11.936 17.98-31.68 37.56-58.646 56.139v.001c-40.663 28.018-98.24 52.637-161.885 69.759-65.406 17.596-128.7 26.024-178.487 21.651h0c-31.569-2.772-57.609-10.095-76.356-19.82-19.058-9.886-28.938-21.326-31.677-31.495h0c-2.636-9.786-.088-23.613 10.677-40.523 10.622-16.687 28.385-34.904 52.944-52.425l-6.724-9.425 6.724 9.425c41.556-29.647 101.985-57.176 169.563-75.357zm0 0l-3.116-11.583 3.116 11.583z"></path><path stroke="#E91E63" stroke-miterlimit="10" stroke-width="24" d="M373.214 228.061c49.036 48.941 86.758 101.635 108.114 147.755l10.889-5.042-10.889 5.042c12.859 27.768 19.578 52.949 20.754 73.194 1.194 20.573-3.382 34.081-10.514 41.232h0c-7.535 7.555-21.944 12.403-43.839 11.035-21.539-1.346-48.366-8.656-77.939-22.719l-.001-.001c-44.594-21.205-94.702-58.759-141.351-105.317l-8.138 8.153 8.138-8.153c-47.94-47.846-86.885-98.447-107.99-143.751h0c-13.383-28.726-20.062-54.939-21.013-76.038-.967-21.448 4-35.725 11.437-43.182h0c7.157-7.176 20.405-11.883 40.432-11.016 19.761.856 44.419 7.13 71.872 19.639l4.975-10.92-4.975 10.92c46.451 21.165 100.505 59.734 150.038 109.169zm0 0l8.477-8.494-8.477 8.494z"></path><path stroke="#E91E63" stroke-miterlimit="10" stroke-width="24" d="M325.98 494.55l9.811 6.909-9.811-6.909c-17.619 25.02-36.067 43.429-53.012 54.569-17.221 11.322-31.207 14.112-40.966 11.511h0c-10.311-2.747-21.714-12.801-31.476-32.447-9.604-19.326-16.687-46.213-19.294-78.855v-.001c-3.933-49.221 3.537-111.393 20.533-175.07l-11.594-3.095 11.594 3.095c17.467-65.44 41.817-124.466 70.5-165.396h0c18.186-25.953 37.549-44.843 55.345-56.216 18.091-11.562 32.94-14.398 43.117-11.686h0c9.793 2.61 20.494 11.73 29.756 29.506 9.139 17.541 16.035 42.032 18.928 72.06 4.896 50.811-1.48 116.906-19.526 184.519-17.867 66.937-44.642 125.951-73.905 167.506z"></path><animateTransform attributeName="transform" attributeType="XML" dur="20s" from="0 301 301" repeatCount="indefinite" to="360 301 301" type="rotate"></animateTransform></g><path fill="#E91E63" d="M301.007 269.002a62.496 62.496 0 00-4.799-4.301c-1.568-1.254-3.439-2.596-5.615-4.026a30.06 30.06 0 00-7.055-3.411c-2.527-.842-5.007-1.264-7.436-1.264-8.779 0-15.657 2.43-20.635 7.29-4.979 4.859-7.467 11.601-7.467 20.223 0 8.661 4.488 17.479 13.463 26.455 0 0 24.492 21.967 39.544 36.043 15.053-14.076 39.545-36.043 39.545-36.043 8.975-8.976 13.463-17.794 13.463-26.455 0-8.622-2.488-15.364-7.467-20.223-4.978-4.86-11.856-7.29-20.635-7.29-2.429 0-4.909.422-7.436 1.264a30.06 30.06 0 00-7.055 3.411c-2.176 1.43-4.047 2.772-5.615 4.026a62.699 62.699 0 00-4.8 4.301z"></path></svg>
                        </div>
                        <div className='flex flex-col text-white gap-y-3 px-2  lg:p-0'>
                            <p>
                                NFT Drop App connected to the Blockchain and Powered via Ethereum Goerli TestNet 
                            </p>
                            <p>
                                Collections fully deployed in ThirdWeb and minted via Metamask - most popular Crypto-Wallet
                            </p>
                        </div>

                        <div className='text-white flex flex-col px-2 lg:px-0 gap-10'>
                            <p>
                                Built on NextJs - Connected to Sanity and ThirdWeb API
                            </p>

                            <div className='buttons-flex-container  ' >
                                <div className='flex flex-wrap'>     
                                    <div>
                                        <Link href={'/collections'}>
                                        <button className=" thug-button font-bold lg:font-medium relative inline-flex items-center justify-center lg:p-0.3 mb-2 mr-2 overflow-hidden home-button-text outline-0 rounded-sm lg:rounded-md">
                                            <span className=" px-2 py-1 lg:px-4 lg:py-1 transition-all ease-in duration-75  dark:bg-gray-900 rounded-sm lg:rounded-md group-hover:bg-opacity-0">
                                                Collection
                                            </span>
                                        </button>
                                        </Link>
                                    </div>

                                    <div>
                                        <Link href={'/nft/jetzemani-dogs'}>
                                        <button className=" thug-button font-bold lg:font-medium relative inline-flex items-center justify-center lg:p-0.3 mb-2 mr-2 overflow-hidden home-button-text outline-0 rounded-sm lg:rounded-md">
                                            <span className=" px-2 py-1 lg:px-4 lg:py-1 transition-all ease-in duration-75  dark:bg-gray-900 rounded-sm lg:rounded-md group-hover:bg-opacity-0">
                                                Mint Drop
                                            </span>
                                        </button>
                                        </Link>
                                    </div>

                                    <div>
                                    <Link href={'/all/jetzemani-dogs'}>
                                        <button className=" thug-button font-bold lg:font-medium relative inline-flex items-center justify-center lg:p-0.3 mb-2 mr-2 overflow-hidden home-button-text outline-0 rounded-sm lg:rounded-md">
                                            <span className=" px-2 py-1 lg:px-4 lg:py-1 transition-all ease-in duration-75  dark:bg-gray-900 rounded-sm lg:rounded-md group-hover:bg-opacity-0">
                                                JD Dog Items
                                            </span>
                                        </button>
                                    </Link>
                                    </div>
                                </div>

                                <div>
                                <Link href={'https://thirdweb.com/goerli/0x75E2Faa8bC44150e8016B5ece328eDF4DDD3e2EA/nfts'}>
                                    <button className=" thug-button-thirdweb font-bold lg:font-medium relative inline-flex items-center justify-center lg:p-0.3 mb-2 mr-2 overflow-hidden home-button-text outline-0 rounded-sm lg:rounded-md">
                                        <span className=" px-2 py-1 lg:px-4 lg:py-1 transition-all ease-in duration-75  dark:bg-gray-900 rounded-sm lg:rounded-md group-hover:bg-opacity-0">
                                            ThirdWeb Collection
                                        </span>
                                    </button>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    </div>
  )
}

