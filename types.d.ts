type Headpage = {
    h3: string;
    h1: string;
    p: string;
    img: string;
};

type SlideSelectProps = {
    homepage: number
    setHomepage: React.Dispatch<React.SetStateAction<number>>;
}

type Chefs = {
    img: string;
    title: string;
    name: string;
  };

type Reviews = {
    img: string;
    paragraph: string;
    name: string;
    title: string;
  };

type RegularMenu = {
    title: string;
    products: string;
    img: string;
};

type Nutrition={name:string
  value:number
}

type MenuItem = {
  name: string;
  image: string;
  price: number;
  description: string;
  on_sale: number|null;
  meal_type: "breakfast" | "lunch" | "dinner";
  day:number[]
  ingredients:string
  nutrition:Nutrition[]
  allergies:string[]
  extra:string
  size_cm:string
};

type Category = {
  name: string;
  items: MenuItem[];
};

type MenuData = {
  categories: Category[];
};


type FavoriteState={
  name:string
  id:number
  currentDate:string
  price:number
  on_sale:number|null
  image:string

}
type CartProps={
  name:string
  quantity: number
  image:string
  price:number
  on_sale:number|null
}


type Blog ={
  title:string
  date:string
  tags:string[]
  summary:string
  id:string
  author:string
  image:string
}

type BlogPost= {
  meta:Blog
  content: ReactElement<unknown, string | JSXElementConstructor<any>>
}
