export default function Blog() {
  return (
    <div className="bg-(--color-tertiary)">
      <div className=" flex flex-col w-[80%] mx-auto py-25">
        <div className="blog-parent flex justify-between">
          <div>
            <span className="text-(--color-logo-text) font-bold">
              Community
            </span>
            <h2 className="text-5xl font-bold py-5 pb-10">Naseh Legal Blog</h2>
          </div>
          <a href="#" className="text-(--color-logo-text) font-bold">
            View all Blogs{" "}
            <span className="bg-gray-200 p-2 rounded-full">&rarr;</span>
          </a>
        </div>
        <div className="blog-parent flex gap-10">
          <BlogPost img="/4.png" />
          <BlogPost img="/2.png" />
          <BlogPost img="/3.png" />
        </div>
      </div>
    </div>
  );

  function BlogPost({ heading, content, date, topic, img }) {
    return (
      <div className="w-150 bg-(--color-primary) rounded-[20px] flex flex-col gap-3 p-8">
        <img
          src={img || null}
          alt=""
          className="h-70 border-1 rounded-[20px] border-gray-200"
        />
        <span className="text-(--color-logo-text) font-bold">
          {date || "June 23, 2024"} | {topic || "Legal Communication"}
        </span>
        <h3 className="text-2xl">
          {heading || "Avoiding Trouble: Common Legal Mistakes to Keep Away"}
        </h3>
        <p className="w-[80%]">
          {content ||
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta assumenda, cumque aliquid illo optio in sapiente dicta ea consequuntur dignissimos!"}
        </p>
      </div>
    );
  }
}
