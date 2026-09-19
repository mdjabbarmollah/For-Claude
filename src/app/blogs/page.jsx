import Daisycard from "../Cardcomponent/daisycard";

const blogData = [
  {
    id: "blog-1",
    title: "Getting Started with React Hooks",
    author: "Sarah Ahmed",
    date: "2026-01-12",
    category: "Frontend",
    description: "A beginner-friendly guide to useState and useEffect, with practical examples you can use in real projects.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    readTime: "5 min read"
  },
  {
    id: "blog-2",
    title: "Why Next.js Is the Go-To React Framework",
    author: "Rakib Hasan",
    date: "2026-02-03",
    category: "Frontend",
    description: "Exploring server-side rendering, static generation, and file-based routing that make Next.js a favorite among developers.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    readTime: "7 min read"
  },
  {
    id: "blog-3",
    title: "Understanding Node.js Event Loop",
    author: "Tanvir Islam",
    date: "2026-02-18",
    category: "Backend",
    description: "A deep dive into how Node.js handles asynchronous operations behind the scenes, explained with simple diagrams.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    readTime: "8 min read"
  },
  {
    id: "blog-4",
    title: "PostgreSQL vs MongoDB: Which One to Choose",
    author: "Nusrat Jahan",
    date: "2026-03-05",
    category: "Database",
    description: "A practical comparison of relational and NoSQL databases to help you decide what fits your next project.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    readTime: "6 min read"
  },
  {
    id: "blog-5",
    title: "Styling Modern Apps with Tailwind CSS",
    author: "Mahin Chowdhury",
    date: "2026-03-21",
    category: "Styling",
    description: "How utility-first CSS speeds up development and keeps your design system consistent across large projects.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    readTime: "4 min read"
  }
];

const BlogsArticel = () => {


  return (
    <div>
      {
        blogData.map((item) => (<Daisycard key = {item.id} sendingprops2 = {item}/>))
   }
    </div>
  )
}
export default BlogsArticel