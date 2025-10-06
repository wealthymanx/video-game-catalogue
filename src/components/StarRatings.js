import { FaStar } from 'react-icons/fa'

export default function StarRatings( { rating }) {
const fullStar = Math.round(rating);
const percentage = (rating / 5) * 100;

return (
    <div className="text-medium text-yellow-300 text-xl flex">
        {[...Array(fullStar)].map((item, i) => (
            <FaStar
            key={i}
            className="w-6 h-6 flex-items-center"
            />
        ))}
        <span className="px-1">{percentage.toFixed(1)}%</span>
    </div>
)
}