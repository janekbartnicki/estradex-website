import Rating from "./Rating";

const RatingSection: React.FC = () => {
    return (
        <div className="rounded-lg shadow-md">
            <Rating 
                imgRef='https://scontent.fwaw7-1.fna.fbcdn.net/v/t39.30808-6/363842110_668258515338754_1954452013275767669_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=AMErz5zANR8AX8enwpm&_nc_oc=AQndMLm4k2vQQAGA7epZDuM9l0mLjBFYUoCHuiguPLOqwofXYumTQUoR6sQpJc7zrO0&_nc_ht=scontent.fwaw7-1.fna&oh=00_AfBTVZcRxWEakjuFcwxMJdAGVQcYrlryHT-HRsSe6cvCdQ&oe=65DA7128'
                title="Eryk"
                subtitle="Trans.eu"
                text="Tak się robi transport!"
                stars={5}
                checkedStars={5}
            />
            <Rating 
                imgRef='https://scontent.fwaw7-1.fna.fbcdn.net/v/t39.30808-6/363842110_668258515338754_1954452013275767669_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=AMErz5zANR8AX8enwpm&_nc_oc=AQndMLm4k2vQQAGA7epZDuM9l0mLjBFYUoCHuiguPLOqwofXYumTQUoR6sQpJc7zrO0&_nc_ht=scontent.fwaw7-1.fna&oh=00_AfBTVZcRxWEakjuFcwxMJdAGVQcYrlryHT-HRsSe6cvCdQ&oe=65DA7128'
                title="Izabela"
                subtitle="Trans.eu"
                text="Transport zrealizowany bezproblemowo. Polecam tego przewoźnika."
                stars={5}
                checkedStars={5}
            />
            <Rating 
                imgRef='https://scontent.fwaw7-1.fna.fbcdn.net/v/t39.30808-6/363842110_668258515338754_1954452013275767669_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=AMErz5zANR8AX8enwpm&_nc_oc=AQndMLm4k2vQQAGA7epZDuM9l0mLjBFYUoCHuiguPLOqwofXYumTQUoR6sQpJc7zrO0&_nc_ht=scontent.fwaw7-1.fna&oh=00_AfBTVZcRxWEakjuFcwxMJdAGVQcYrlryHT-HRsSe6cvCdQ&oe=65DA7128'
                title="Joanna"
                subtitle="Trans.eu"
                text="Wszystko na czas, polecam ;)"
                stars={5}
                checkedStars={5}
            />
            <Rating 
                imgRef='https://scontent.fwaw7-1.fna.fbcdn.net/v/t39.30808-6/363842110_668258515338754_1954452013275767669_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=AMErz5zANR8AX8enwpm&_nc_oc=AQndMLm4k2vQQAGA7epZDuM9l0mLjBFYUoCHuiguPLOqwofXYumTQUoR6sQpJc7zrO0&_nc_ht=scontent.fwaw7-1.fna&oh=00_AfBTVZcRxWEakjuFcwxMJdAGVQcYrlryHT-HRsSe6cvCdQ&oe=65DA7128'
                title="Marek"
                subtitle="Trans.eu"
                text="super firma polecam :)"
                stars={5}
                checkedStars={5}
            />
            <Rating 
                imgRef='https://scontent.fwaw7-1.fna.fbcdn.net/v/t39.30808-6/363842110_668258515338754_1954452013275767669_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=AMErz5zANR8AX8enwpm&_nc_oc=AQndMLm4k2vQQAGA7epZDuM9l0mLjBFYUoCHuiguPLOqwofXYumTQUoR6sQpJc7zrO0&_nc_ht=scontent.fwaw7-1.fna&oh=00_AfBTVZcRxWEakjuFcwxMJdAGVQcYrlryHT-HRsSe6cvCdQ&oe=65DA7128'
                title="Marek"
                subtitle="Trans.eu"
                text="Sprawnie i na czas :)"
                stars={5}
                checkedStars={5}
            />
        </div>
    )
}

export default RatingSection;