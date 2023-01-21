
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

export interface linkInterface {
    code: string
    shortLink: string
    originalLink: string
    index: number
  }

  export class LinkClass implements linkInterface {
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