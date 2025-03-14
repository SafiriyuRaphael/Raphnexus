
import SideBlog from "./SideBlog";
import { getBlogMeta } from "@/lib/blogPost";
import BlogList from "./BlogList";
import { getRestaurantMenu } from "@/lib/getRestaurantMenu";


export default async function Blogs() {
  const blogs = await getBlogMeta();
  const menu = await getRestaurantMenu();
  
  

  if (!menu) return <>no content</>;

  if (!blogs) {
    return <p className="mt-10 text-center">Sorry, no posts available</p>;
  }
  return (
    <section className="flex gap-8 px-4 sm:px-7 py-14">
    
      <ul className="w-full flex flex-col gap-4 ">
        {blogs.map((blog) => (
          <BlogList blog={blog} key={blog.id}/>
        ))}
      </ul>
 
   
      <div className="w-[35vw] lg:block hidden">
      <SideBlog blogs={blogs} menu={menu}/></div>
    </section>
  );
}
