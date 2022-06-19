import axios from 'axios';
import React,{useState} from 'react'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './FindBook.css';

export const FindBook = () => {
  const[text,setText]=useState('');

  const[list,setlist]=useState([]);
  
  const onchange=(q)=>{
    setText(q);
  }

  const listItems = list.map((myList) =>  
  <>

<div className="card">


    

   
      <center><h2 className='hh'>Wow, we find Book for You </h2></center>
    



    <table>
      <tr>
        <td>Book Name:</td>
        <td>{myList.bookname}</td>
      </tr>

      <tr>
        <td>Class:</td>
        <td>{myList.class}</td>
      </tr>

      <tr>
        <td>Book Publication:</td>
        <td>{myList.publication}</td>
      </tr>
      <tr>
        <td>Book Original Price:</td>
        <td>{myList.oprice}</td>
      </tr>
      <tr>
        <td>Book Expected Price:</td>
        <td>{myList.eprice}</td>
      </tr>

      <tr>
        <td>Address:</td>
        <td>{myList.address}</td>
      </tr>

      <tr>
        <td>Watsapp Number:</td>
        <td>{myList.wnum}</td>
      </tr>
    </table>




      


    </div>
      
    </>
  );  

const submitt=async(e)=>{
    console.log(text);
    e.preventDefault();
    
    axios.post('http://localhost:5000/api/book/find',{
      bookname:text
    })
    .then(function (response){
      // setNoteu(response);
      console.log(response.data[0]);
      list.length=0;
  

        toast.success('🦄 We are finding book for you ', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
  
      for(let i=0;i<response.data.length;i++){
        // setlist(list.push(response.data[i].bookname));
        const newList = list.concat(response.data[i]);
        console.log(newList);
        setlist(newList);
      }

      
      console.log(list);
    })
    .catch(function (error){
      toast.error('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    })
 
    
  }


  
  return (
      <>

        
<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
      
        <section className="find">
            <div className="search">
            <form>
                <input type="text" className='form-control' placeholder='Search Book Here' autoFocus value={text} onChange={(e)=>onchange(e.target.value)}  required />
                <button onClick={submitt}>Submit</button>
             </form>
             
            </div>

        

           
         
        <ul>


          
        {listItems.length===0 && 'No Books to display'}
          {listItems}</ul>  
        
     
            
        </section>
        
      
       
   

    </>
  )
}
