const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {

    const handleCLick = () => {
        if (bigShoeImg !== imgURL.bigShoe) {
            changeBigShoeImage(imgURL.bigShoe)
        }
    }

    return (
        <div
            className={`border-2 rounded-xl ${bigShoeImg === imgURL.bigShoe ? "border-coral-red" : "border-transparent"} cursor-pointer max-sm:flex-1`}
            onClick={handleCLick}>
            <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-x1 max-sm:p-4">
                <img
                    src={imgURL.thumbnail}
                    alt="shoe collection"
                    width={120}
                    height={103}
                    className="object-contain"
                />
            </div>
        </div>
    )
}

export default ShoeCard
