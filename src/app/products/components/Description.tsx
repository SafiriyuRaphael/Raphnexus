type DescriptionProps = {
  mealItem: MenuItem;
  category: Category;
};

export default function Description({ mealItem }: DescriptionProps) {
  return (
    <section className="py-14 px-3 sm:px-7 md:px-12  justify-self-center  lg:max-w-5xl flex flex-col gap-10">
      <div className=" flex flex-col gap-4 text-gray-600">
        <p>{mealItem.extra}</p>
        <p>
          <span className="font-bold">Ingredients:</span> {mealItem.ingredients}
        </p>
      </div>
      <div className="md:flex grid grid-cols-2 place-content-center md:flex-col justify-between md:justify-start">
        <div className="md:border-b flex flex-col md:flex-row   justify-center">
          <div className="pb-8  md:pr-8 justify-start flex flex-col gap-2  md:border-r text-center md:text-start border-b md:border-b-0">
          <p className="font-bold">  {mealItem.name}</p>
            <p className="whitespace-nowrap">{mealItem.size_cm}</p>
          </div>
          <div className="pb-12 md:pl-5 gap-3 flex flex-col md:flex-row w-full text-center items-center justify-between">
            {mealItem.nutrition.map((nutrient,i) => (
              <div key={i} className="flex flex-col py-3 w-full md:py-0 border-b md:border-b-0">
                <h3 className="font-bold text-2xl">{nutrient.value}</h3>
                <p>{nutrient.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className=" flex gap-5 md:flex-row flex-col items-center md:items-start border-l md:border-l-0">
          <h3 className="md:pr-8 md:pt-3 pb-[2.8rem] md:pb-0 md:border-r font-bold ">Allergies</h3>
          <div className="flex flex-col md:flex-row gap-6 pt-3 border-t md:border-t-0 w-full text-gray-600 justify-center items-center md:items-start md:justify-start">
            {mealItem.allergies.map((allergy, i) => (
              <p className="py-5 md:py-0 font-bold md:font-normal" key={i}>{allergy}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
