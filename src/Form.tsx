import { linkInterface } from './App'
import { Dispatch, SetStateAction, useState } from 'react'
import axios from 'axios'

interface FormProps {
    setLinks: Dispatch<SetStateAction<linkInterface[]>>
    links: linkInterface[]
}

export interface responseInterface {
    status: number,
    data: {
        ok: boolean,
        result: {
            code: string,
            full_short_link: string,
            original_link: string
        }
    }
}

class LinkClass implements linkInterface {
    code: string
    shortLink: string
    originalLink: string
    index: number
    static index: number = 0
    constructor(code: string, shortLink: string, originalLinkts: string){
        this.code = code
        this.shortLink = shortLink
        this.originalLink = originalLinkts
        this.index = Date.now()
    }
}

const Form = ({ setLinks, links }: FormProps) => {

    const [linkStr, setLinkStr] = useState('')
    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError(false)
        setErrorMsg('')

        if(links.some(l => l.originalLink === `http://${linkStr}`)){
            setError(true)
            setErrorMsg('Url already exists')
            setLinkStr('')
            return
        }

        const fullLink = `https://api.shrtco.de/v2/shorten?url=${linkStr}`
        // setLinks(prev => prev)
        try {
            const { data } : responseInterface = await axios.get(fullLink)
            const newLink = new LinkClass(
                data.result.code,
                data.result.full_short_link,
                data.result.original_link
            )
            setLinks(prev => [...prev, newLink].sort((a,b) => b.index - a.index))

        } catch {
            setError(true)
            setErrorMsg('something went wrong')
        }
        setLinkStr('')
    }

    return (
        <div className='bg-clr-main-bg bg-gradient-form w-full'>
            <div className="w-[90%] lg:w-[85%] xl:w-[73%] mx-auto">
                <form data-testid='form' className="grid gap-4 p-6
                                md:p-14 rounded-xl 
                              bg-clr-Dark-Violet md:grid-flow-col 
                                md:grid-cols-form md:relative
                                lg:mx-auto bg-[url(../images/bg-shorten-mobile.svg)]
                                bg-no-repeat bg-right-top
                                lg:bg-[url(../images/bg-shorten-desktop.svg)]
                                lg:bg-cover"
                                onSubmit={handleSubmit}>
                    <input type="text" placeholder="Shorten a link here.. " required
                        className="px-4 py-3 w-full rounded-lg invalid:focus:text-red-500 
                                    focus:placeholder-red-500 outline-0 focus:invalid:outline-4 
                                    focus:invalid:outline focus:invalid:outline-red-500
                                    form"
                            value={linkStr} onChange={(e) => {
                                    setLinkStr(e.target.value)
                                    setError(false)}}/>
                    {error ? (
                        <span className="error-span | text-sm -mt-2 text-red-500 md:absolute md:bottom-5 md:left-14">{errorMsg}</span>
                        ) : (
                        <span className="span-1 | hidden text-sm -mt-2 text-red-500 md:absolute md:bottom-5 md:left-14">Please add a link</span>
                        )}
                    <button className="px-4 py-3 bg-clr-cyan hover:bg-teal-200 rounded-lg text-white font-semibold md:w-fit butt">Shorten it!</button>
                </form>
            </div>
        </div>

    )
}

export default Form