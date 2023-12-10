import React, { useState } from 'react'
import {books} from '../data'
import {Book} from './Book';


export default function EventExample() {
  const [tea, settea] = useState("ab");
    const handleFormInput = (event) => {
        console.log("Handle Form Input");
        // settea(event.value)
        // console.log(settea);

       
      };
      let search = books.filter(
          name => name.title === "ab"
        );
        console.log(search);
      const handleButtonClick = () => {
        console.log("ashi:");
      };

  return (
   <>

   <section className="event-section">
            <form>
                <p id='demo'></p>
              <h2>MyForm</h2>
              <input type="text" value={tea} onChange={handleFormInput} placeholder='Search book' />


            <button className='mx-2 p-1 btn-primary border' onClick={handleButtonClick}>Click me</button>







            </form>
          </section>
          {/* --------------------Book List------------------------ */}
            <section className="bookList">
              {books.map((book, index) => {
                return (
                  <Book
                    key={index}
                    title={book.title}
                    author={book.author}
                    img={book.img}/>
                    
                );
              })}
            </section>   
           
          </> 
        );
      }