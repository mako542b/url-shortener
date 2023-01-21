import { rest } from "msw";
import { setupServer } from 'msw/node'
import { responseInterface } from '../interfaces/generalInterfaces'

function createResponse (originalUrl: string): responseInterface  {
    const response = {
        status: 200,
        data: {
            ok:true,
            result: {
                code: `code=${Math.random() * 100}`,
                full_short_link: 'mockTestShort',
                original_link: `http://${originalUrl}`
            }
        }
    }
    return response
}

const handlers = rest.get('https://api.shrtco.de/v2/shorten', (req, res, ctx) => {
    const originalUrl = req.url.searchParams.get('url') as string
    const response = createResponse(originalUrl)
    return res(ctx.json(response.data))
})

const server = setupServer(handlers)
export default server