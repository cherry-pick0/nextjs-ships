// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import SpaceXProxy from '../../../proxies/SpaceXProxy';
import { Ship } from '../../../data/Models';


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<void | Ship[]>
) {
    if (req.method === 'GET') {
        var spaceXProxy = new SpaceXProxy()
        const data = await spaceXProxy.getShips()
        res.status(200).json(data)
    }
}
