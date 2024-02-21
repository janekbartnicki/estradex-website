interface RatingProps {
    imgRef: string;
    title: string;
    stars: number;
    checkedStars: number;
}

const Rating: React.FC<RatingProps> = ({ imgRef, stars, checkedStars, title }) => {

    const generateStars = (stars: number, checkedStars = 0): JSX.Element[] => {
        const elements: JSX.Element[] = [];

        for(let i = 1; i <= stars; i++) {
            elements.push(
                <input 
                    disabled 
                    key={i} type="radio"
                    name="rating-1"
                    className="mask mask-star text-estradex-blue"
                    defaultChecked={i == checkedStars}
                />
            )
        }

        return elements;
    }

    return (
        <div className="border rounded-lg lg:md:w-[30rem] sm:w-full p-10 text-estradex-blue">
            <div className="flex justify-between align-middle items-center">
                <div className="flex justify-start align-middle items-center">
                    <img className="mask mask-circle h-10 w-10" src={imgRef} />
                    <p className="text-xl ml-3 font-semibold">{title}</p>
                </div>
                <div className="rating ml-5 cursor-default">
                    {generateStars(stars, checkedStars)}
                </div>
            </div>
        </div>
    )
}

export default Rating;