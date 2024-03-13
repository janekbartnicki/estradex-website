import Rating from "./Rating";

const imageRef = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr-1mkqGRClttpa0_aUsE24Y83Q2Xdl4jSnagkY4R5tA&s";

const RatingSection: React.FC = () => {
    return (
        <div className="rounded-lg shadow-md">
            <Rating 
                imgRef={imageRef}
                title="Eryk"
                subtitle="Trans.eu"
                text="Tak się robi transport!"
                stars={5}
                checkedStars={5}
            />
            <Rating 
                imgRef={imageRef}
                title="Izabela"
                subtitle="Trans.eu"
                text="Transport zrealizowany bezproblemowo. Polecam tego przewoźnika."
                stars={5}
                checkedStars={5}
            />
            <Rating 
                imgRef={imageRef}
                title="Joanna"
                subtitle="Trans.eu"
                text="Wszystko na czas, polecam ;)"
                stars={5}
                checkedStars={5}
            />
            <Rating 
                imgRef={imageRef}
                title="Marek"
                subtitle="Trans.eu"
                text="super firma polecam :)"
                stars={5}
                checkedStars={5}
            />
            <Rating 
                imgRef={imageRef}
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