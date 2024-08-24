export type LocalityContextType = {
    localityId: string | null;
    setLocalityId: (id: string | null) => void;
};

export type City = {
    cityName: string;
    localityName: string;
    localityId: string;
    latitude: string;
    longitude: string;
    device_type: string;
};

export type LocalityWeatherData = {
    temperature: number;
    humidity: number;
    wind_speed: number;
    wind_direction: number;
    rain_intensity: number;
    rain_accumulation: number;
};

export type WeatherCardProps = {
    icon: React.ReactNode;
    label: string;
    value: string;
};