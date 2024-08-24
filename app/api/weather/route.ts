// pages/api/weather.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
    const reqUrl = req.url
    const { searchParams } = new URL(reqUrl as string)
    const localityId = searchParams.get('localityId')

    if (!localityId || typeof localityId !== 'string') {
        return NextResponse.json({ error: 'Locality ID is required' }, { status: 400 })
    }

    try {
        const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY

        if (!apiKey) {
            return NextResponse.json({ error: 'API key is not defined' }, { status: 500 })
        }

        const response = await fetch(`https://www.weatherunion.com/gw/weather/external/v0/get_locality_weather_data?locality_id=${localityId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-zomato-api-key': apiKey,
            },
        });

        const data = await response.json();
        return NextResponse.json(data, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 500 })
    }
}
