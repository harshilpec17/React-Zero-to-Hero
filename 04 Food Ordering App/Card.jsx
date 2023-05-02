

const Card = ({ resData }) => {
  
  const {cloudinaryImageId, name,avgRating,deliveryTime,costForTwo,cuisines} = resData?.info || {};
  return (
    <div className="card">
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      <div className="rounded overflow-hidden shadow-lg dark:shadow-gray-800">
        <img
          className="w-full"
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt="Food Image"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 dark:text-gray-300 text-base">
            Rating - {avgRating}
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-base">
            Delivery Time - {deliveryTime} minutes
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-base">
            {costForTwo}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2">
            {cuisines ? cuisines.join(", ") : " "}
          </span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Card;


  
