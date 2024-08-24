// Function to determine temperature icon color
export const getTemperatureColor = (temperature: number) => {
    if (temperature >= 30) {
        return 'text-[#FF5733]';
    } else if (temperature <= 15) {
        return 'text-[#1E90FF]';
    } else {
        return 'text-lime-500';
    }
}