import { useEffect, useState } from 'react';
import Article from '../components/Article';
import posts from '../posts.json';
import TestOtak from '../components/TestOtak';

function Homepage() {

  const [search, setSearch] = useState('')

  const changeSearch = (event) => {
    // console.log(event.target.value)
    setSearch(event.target.value)
  }

  return (
    <div className="w-full text-center mt-10">
      <h1>Simple Blog</h1>
      <div className="">
        Cari Artikel : <input onChange={changeSearch} type="text" className="border-2" />
      </div>
      <div>{search}</div>
      {posts.map(({ title, tags, date }, index) => (
        // <Article title={title} tags={tags} date={date} />
        <Article key={index} title={title} tags={tags} date={date} />
      ))}
      <div className='bg-slate-200 w-full h-[400px]'>
        <TestOtak/>

      </div>
    </div>
  );
}

export default Homepage;
