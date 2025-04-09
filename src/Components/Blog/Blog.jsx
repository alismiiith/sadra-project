import { useEffect, useState } from "react";
import HeaderBlog from "./HeaderBlog";
import Main from "./Main";

const Blog = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [Anatomy, setAnatomy] = useState([]);
  const fetchAnatomy = async () => {
    try {
      const data = await fetch("http://localhost:3001/Anatomy");
      const res = await data.json();
      setAnatomy(res), 
      setSearchResults(res);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchAnatomy();
  }, []);
  return (
    <>
      <HeaderBlog Anatomy={Anatomy} setSearchResults={setSearchResults} />
      <Main searchResults={searchResults}/>
    </>
  );
};

export default Blog;
