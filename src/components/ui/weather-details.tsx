import type { WeatherData } from "@/api/types";
import { Sunrise, Sunset } from "lucide-react";
import { format } from "date-fns";
interface WeatherDetailsProps {
  data: WeatherData;
}

const WeatherDetails = ({ data }: WeatherDetailsProps) => {
  const { wind, main, sys } = data;

  const formatTime = (timestamp: number) => {
    return format(new Date(timestamp * 1000), "h:mm a");
  };

  const details = [
    {
      title: "Sunrise",
      value: formatTime(sys.sunrise),
      icon: Sunrise,
      color: "text-orange-500",
    },
    {
      title: "Sunset",
      value: formatTime(sys.sunrise),
      icon: Sunset,
      color: "text-blue-500",
    },
  ];
  return <div></div>;
};

export default WeatherDetails;
