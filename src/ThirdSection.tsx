const ThirdSection = () => {
    return (
        <div className="bg-clr-main-bg px-6 pt-32 grid gap-28 pb-20 lg:grid-flow-col text-center lg:text-start lg:gap-6 xl:gap-8 lg:grid-cols-3 lg:px-16 xl:px-40 text-base ">

            <div className="line lg:after:hidden line-xl | lg:h-72 lg:place-content-center bg-white relative pt-16 px-6 pb-6 rounded-md grid gap-5">
                <div className="w-24 rounded-full aspect-square bg-clr-Dark-Violet grid place-content-center absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 lg:left-12 lg:translate-x-0">
                    <img className="" src="./images/icon-brand-recognition.svg" alt="" />
                </div>
                <h3 className="text-2xl font-bold text-clr-Very-Dark-Blue">Brand Recognition</h3>
                <p className="text-clr-Grayish-Violet max-w-char-xl mx-auto">Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
            </div>

            <div className="line lg:after:hidden | lg:mt-12 lg:h-72 lg:place-content-center bg-white relative pt-16 px-6 pb-6 rounded-md grid gap-5">
                <div className="w-24 rounded-full aspect-square bg-clr-Dark-Violet grid place-content-center absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 lg:left-12 lg:translate-x-0">
                    <img className="" src="./images/icon-detailed-records.svg" alt="" />
                </div>
                <h3 className="text-2xl font-bold text-clr-Very-Dark-Blue">Detailed Records</h3>
                <p className="text-clr-Grayish-Violet max-w-char-xl mx-auto"> Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
            </div>

            <div className="lg:h-72 lg:place-content-center lg:mt-24 bg-white relative pt-16 px-6 pb-6 rounded-md grid gap-5">
                <div className="w-24 rounded-full aspect-square bg-clr-Dark-Violet grid place-content-center absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 lg:left-12 lg:translate-x-0">
                    <img className="" src="./images/icon-fully-customizable.svg" alt="" />
                </div>
                <h3 className="text-2xl font-bold text-clr-Very-Dark-Blue">Fully Customizable</h3>
                <p className="text-clr-Grayish-Violet max-w-char-xl mx-auto"> Improve brand awareness and content discoverability through customizable links, supercharging audience engagement</p>
            </div>
        </div>
    )
}

export default ThirdSection