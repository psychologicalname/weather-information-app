'use client'

import { CircularProgress } from '@mui/material'
import { useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'

// Types
import type { LocalityWeatherData } from '@/utils/types'

// Icons
import { FaThermometerHalf, FaTint, FaWind, FaCloudRain, FaArrowUp } from 'react-icons/fa'

// Custom Components
import Search from '@/components/Search'
import WeatherCard from '@/components/WeatherCard'

// Utils
import { getTemperatureColor } from '@/utils'

const WeatherPageContent = () => {
    const searchParams = useSearchParams()
    const localityId = searchParams.get('localityId')
    const city = searchParams.get('city')
    const locality = searchParams.get('locality')

    const [weatherData, setWeatherData] = useState<LocalityWeatherData | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch(`/api/weather?localityId=${localityId}`);
                const data = await response.json();
                if (response.status === 200) {
                    setWeatherData(data.locality_weather_data);
                }

            } catch (error) {
                setError((error as Error).message);
            } finally {
                setLoading(false);
            }
        }
        fetchWeather()
    }, [localityId])

    return (
        <main className="flex flex-col min-h-screen p-6">
            {/* Loading Spinner */}
            {loading && (
                <div className="flex items-center justify-center flex-grow">
                    <CircularProgress />
                </div>
            )}

            {/* Error Message */}
            {error && (
                <div className="flex items-center justify-center flex-grow">
                    <p className="text-red-500 text-lg">Error: {error}</p>
                </div>
            )}

            {/* Weather Data */}
            {weatherData && (
                <div className="flex flex-col items-center flex-grow">
                    <div className='float-left w-full max-w-4xl mt-6 mb-10'>
                        <Search />
                    </div>
                    <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-left text-gray-800 w-full max-w-4xl">
                        Weather in <span className='text-blue-600'>{locality}, {city}</span>
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl">
                        <WeatherCard icon={<FaThermometerHalf className={getTemperatureColor(weatherData.temperature)} />} label="Temperature" value={`${weatherData.temperature || '-'} °C`} />
                        <WeatherCard icon={<FaTint className="text-blue-500" />} label="Humidity" value={`${weatherData.humidity || '-'} %`} />
                        <WeatherCard icon={<FaWind className="text-teal-500" />} label="Wind Speed" value={`${weatherData.wind_speed || '-'} km/h`} />
                        <WeatherCard icon={<FaArrowUp className="text-amber-500" />} label="Wind Direction" value={`${weatherData.wind_direction || '-'}°`} />
                        <WeatherCard icon={<FaCloudRain className="text-blue-400" />} label="Rain Intensity" value={`${weatherData.rain_intensity || '-'} mm/h`} />
                        <WeatherCard icon={<FaCloudRain className="text-blue-300" />} label="Rain Accumulation" value={`${weatherData.rain_accumulation || '-'} mm`} />

                    </div>
                </div>
            )}
        </main>
    )
}

const WeatherPage = () => {
    return (
        <Suspense fallback={<CircularProgress />}>
            <WeatherPageContent />
        </Suspense>
    )
}

export default WeatherPage
