import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { dblClick } from "@testing-library/user-event/dist/click";

const Home = () => {

    const {data:blogs , isPending, error} = useFetch('http://localhost:8000/blogs');
    
   
    // const handleDelete = (id) =>{
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);

    // }

   

    //everytime state changes, it re-renders the template
    return ( 
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
           {blogs && <BlogList blogs ={blogs} title="All Blogs" />}
           
          
           
        </div>

    );
}
 
export default Home;