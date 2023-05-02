

const card = ({RestaurantName, cuisine}) => {
    return (
        <div
  className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
  <div className="rounded overflow-hidden shadow-lg dark:shadow-gray-800">
    <img
      className="w-full"
      src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
      alt="Mountain" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{RestaurantName}</div>
      <p className="text-gray-700 dark:text-gray-300 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, Nonea! Maiores et perfe
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <span
        className="inline-block bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2">
        {cuisine}
      </span>
      <span
        className="inline-block bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2">
        {cuisine}
      </span>
      <span
        className="inline-block bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2">
        {cuisine}
      </span>
    </div>
  </div>
</div>

    )
}

export default card
