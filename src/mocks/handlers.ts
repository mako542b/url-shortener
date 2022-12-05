import { rest } from "msw";
import { setupServer } from 'msw/node'
import { responseInterface } from "../Form";

const response: responseInterface = {
    status: 200,
    data: {
        ok:true,
        result: {
            code:'mockCode',
            full_short_link: 'mockTestShort',
            original_link: 'mockedOriginalTest'
        }
    }
}

const handlers = rest.get('https://api.shrtco.de/v2/shorten?url=test123.com', (req, res, ctx) => {
    res(ctx.json(response))
    return        
})

const server = setupServer(handlers)
export default server