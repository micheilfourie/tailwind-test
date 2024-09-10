import { star } from '../assets/icons'

const ReviewCard = ({ customerName, feedback, rating, imgURL }) => {
    return (
        <div className="flex justify-center items-center flex-col">
            <img src={imgURL} alt="customer" className="rounded-full object-cover w-[150px] h-[150px] border-2 border-coral-red p-1" />
            <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
            <div className='mt-3 flex justify-center items-center gap-2.5'>
                <img src={star} alt="star" width={24} height={24} className='opject-contain m-0' />
                <p className='text-xl font-montserrat text-slate-gray'>({rating})</p>
            </div>
            <h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>{customerName}</h3>
        </div>
    )
}

export default ReviewCard
