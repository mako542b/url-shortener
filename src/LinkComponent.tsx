import { linkInterface } from "./App"
import { Dispatch, SetStateAction, useState } from 'react'

interface LinkComponentProps {
    link: linkInterface | undefined
    setLinks: Dispatch<SetStateAction<linkInterface[]>>
    setCopied: Dispatch<SetStateAction<string | undefined>>
    copied: string | undefined
}

const LinkComponent = ({ link, setLinks, setCopied, copied }: LinkComponentProps) => {


    const handleDelete = async (e: React.MouseEvent) => {
        e.currentTarget.parentElement?.classList.add('fade')
        setTimeout(() => {
            setLinks(prev => [...prev].filter(l => l.code !== link?.code))
        },500)
    }

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(link?.shortLink as string)
            setCopied(link?.code)
        } catch {
            return
        }
    }

    const isCopied = copied === link?.code


    return (
        <div className={`bg-white animate-scale-y flex flex-col lg:flex-row py-4 px-10 w-[90%] lg:w-[85%] xl:w-[73%] lg:items-center lg:gap-5 rounded-md relative group`} data-testid='link'>
            <a className="truncate lg:max-w-[50%] py-2" href={link?.originalLink}>{link?.originalLink}</a>
            <a className="text-clr-cyan lg:ml-auto py-2 relative after:absolute after:top-0 after:h-[1px] after:opacity-25 after:bg-clr-Very-Dark-Violet after:-inset-x-10 lg:after:hidden" href={link?.shortLink}>{link?.shortLink}</a>
            <button onClick={handleCopy} className={`py-3 lg:w-24 mt-2 lg:mt-0 ${isCopied ? 'bg-clr-Dark-Violet' : 'bg-clr-cyan hover:bg-teal-200'} rounded-md text-white text-sm`}>{isCopied ? 'Copied!' : 'Copy'}</button>
            <button onClick={handleDelete} className="absolute top-1/2 -translate-y-1/2 right-1 p-2 text-red-800 lg:hidden lg:group-hover:block opacity-50 hover:opacity-100">X</button>
        </div>
    )
}

export default LinkComponent