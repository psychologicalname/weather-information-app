//types
import type { WeatherCardProps } from "@/utils/types";

const WeatherCard: React.FC<WeatherCardProps> = ({ icon, label, value }) => (
    <div className="flex items-center p-6 bg-gray-50 shadow-lg rounded-2xl hover:shadow-2xl transition-shadow duration-300">
        <div className="mr-4 text-3xl">{icon}</div>
        <div>
            <h2 className="text-lg font-medium text-gray-800">{label}</h2>
            <p className="text-base text-gray-600">{value}</p>
        </div>
    </div>
);

export default WeatherCard;