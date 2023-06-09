import { CARD_IMAGE_URL } from "../utils/constant";

const Card = ({ restData }) => {
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    restData?.info || {};
  const { deliveryTime } = restData?.info.sla || {};

  return (
    <>
      <div className="card w-[300px] rounded-md border bg-[#F5F5F6] hover:scale-105 duration-200 ease-in-out">
        <img
          src={CARD_IMAGE_URL + cloudinaryImageId}
          alt="Laptop"
          className="h-[200px] w-full rounded-t-md object-cover"
        />
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold">
            {name}
          </h1>
          <p className="mt-3 text-sm text-gray-600">
            {cuisines ? cuisines.join(", ") : " "}
          </p>
          <div className="mt-4">
            <span className="mb-2 mr-2 inline-block rounded-full bg-[#48C479]  text-[12px] px-3 py-1 text-[10px] font-bold text-gray-900">
              {avgRating} +
            </span>
            <span className="mb-2 mr-2 inline-block rounded-full bg-[#DB7C38] text-[12px] px-3 py-1 text-[10px] font-semibold text-gray-900">
              {deliveryTime} MINS
            </span>
            <span className="mb-2 mr-2 inline-block rounded-full bg-[#8A584B] text-[12px] px-3 py-1 text-[10px] font-semibold text-gray-900">
              {costForTwo}
            </span>
          </div>
          <button
            type="button"
            className="mt-4 w-full rounded-sm bg-[#0D0D0D] px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Let's Order
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
