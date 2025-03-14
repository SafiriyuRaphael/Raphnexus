import AddToCart from "@/app/cart/components/AddToCart"
import Favorites from "@/app/wishlist/components/Favorites"
import Image from "next/image"
import Link from "next/link"

type RelatedProducts={
    category:Category
    mealItem:MenuItem
}


export default function RelatedProducts({category, mealItem}:RelatedProducts) {
  const relatedMealItems = category.items.filter(
    (item) => item.name !== mealItem.name && item.meal_type === mealItem.meal_type
  );
  if(relatedMealItems.length===0)return null
  return (
    <section className={`py-14 px-3 sm:px-7  flex-col gap-10 ${relatedMealItems ? "block": "flex"}`}>
        <h1 className="text-2xl font-bold text-center">RELATED PRODUCTS</h1>
        <div className="grid sm:grid-cols-2  md:grid-cols-4 gap-8">{relatedMealItems.slice(0,10).map((item,i)=>(
            <div key={item.name} role="group" aria-label={`On sale item: ${item.name}`}>
            <div className="flex flex-col py-4 px-3 rounded-3xl bg-white gap-3 group border">
              {/* Image Section */}
              <div className="md:h-72 h-[60vh] relative px-2 place-content-end">
                <div className="absolute right-5 top-2 z-50">
                  <Favorites data={item} aria-label={`Add ${item.name} to favorites`} />
                </div>
                <Image
                  alt={`Image of ${item.name}`}
                  src={`/menu/${item.image}.png`}
                  width={300}
                  height={150}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 group-hover:scale-110 transition-transform duration-500 size-80 md:size-48"
                  priority={i < 4} // Prioritize first 4 images
                />
                <div 
                  className="bg-amber-100 w-full h-[30vh] md:h-40 rounded-3xl group-hover:h-full group-hover:bg-amber-400 transition-all transform duration-500 ease-in-out"
                  aria-hidden="true"
                />
              </div>

              {/* Product Details */}
            <Link href={`/products/${item.name.replace(/\s+/g, "-").toLowerCase()}`} className="hover:text-amber-400">  <h3 className="font-semibold">{item.name}</h3></Link>
              <p className="text-gray-500" aria-label="Product description">
                {`${item.description.slice(0, 35)}...`}
              </p>

              {/* Price and Add to Cart */}
              <div className="flex justify-between w-full items-center">
                <div className="flex gap-2">
                  <p className="line-through text-gray-500" aria-label="Original price">
                    {item.price}
                  </p>
                  <p className="text-amber-400 font-bold" aria-label="Discounted price">
                    {item.on_sale}
                  </p>
                </div>
                <AddToCart data={item} aria-label={`Add ${item.name} to cart`} />
              </div>
            </div>
          </div>
        ))}</div>
      
    </section>
  )
}
