import Article from '../components/Article';
import posts from '../posts.json';

function Homepage() {
  return (
    <div className='w-full text-center mt-10'>
      <h1>Simple Blog</h1>
      {posts.map((blog) => {
        return <Article title={blog.title} tags={blog.tags} date={blog.date} />;
      })}
    </div>
  );
}

export default Homepage;
