import Link from 'next/link';

const layout = ({children}) => {
  return (
    <div>
      <div>My tech blogs
      </div>
      <div>
          <Link href= "/blogs"> ⬅️ Back to all blogs</Link>
      </div>
      
      <div>{children}</div>
    </div>
  );
};

export default layout;