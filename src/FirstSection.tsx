const FirstSection = () => {
    return (
        <div className="flex flex-col gap-8 pb-20 lg:flex-row-reverse lg:pl-24 xl:pl-40 lg:gap-10">
            <div className="overflow-hidden lg:w-1/2 grid items-center">
                <img className="ml-6 -mr-30 lg:m-0 max-w-none max-h-80 lg:max-h-full object-cover w-header-image" src="./images/illustration-working.svg" alt="" />
            </div>
            <div className="px-6 lg:px-0 text-center grid place-content-center lg:text-left gap-4 lg:w-1/2 lg:py-28">
                <h1 className="text-head-one text-clr-Very-Dark-Blue font-bold lg:text-6xl xl:text-7xl xl:leading-very-tight lg:leading-very-tight">More than just shorter links</h1>
                <p className="relative text-clr-Grayish-Violet lg:max-w-char">Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                <button className="text-white bg-clr-cyan hover:bg-teal-200 rounded-full w-fit px-12 py-3 text-lg mx-auto lg:mx-0 lg:mt-6">Get Started</button>
            </div>
        </div>
    )
}

export default FirstSection