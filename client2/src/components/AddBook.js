import axios from 'axios';
import React,{useState} from 'react'


import './AddBook.css';
export const AddBook = () => {

  const[note,setNote]=useState({bookname:"" ,class:"",publication:"",oprice:"",eprice:"",address:"",wnum:""})


  const handleClick=(e)=>{
    e.preventDefault();
   

    //to add

    axios.post("http://localhost:5000/api/book/add",note)
    .then(res=>console.log(res))
    .catch(err=>console.log(err));
    console.log(note);
    setNote({bookname:"" ,class:"",publication:"",oprice:"",eprice:"",address:"",wnum:""});
  }

  const onchange=(e)=>{
    setNote({...note,[e.target.name]:e.target.value})
}

  return (
    <>
        <section className="Addform">
            <div className="title">
              <h4>Add Books</h4>
            </div>

            <div className="formc">

              <form>
                <label>Bookname</label>
                <input type="text" placeholder='Book name' name="bookname" value={note.bookname} onChange={onchange}/>


                <br/>
                <label>Class</label>
                <input type="text" placeholder='Class name' name="class" value={note.class} onChange={onchange}/>

                <br/>

                <label>Publication</label>
                <input type="text" placeholder='Publication name' name="publication" value={note.publication} onChange={onchange} />
                <br/>
                
                <label>Original Name</label>
                <input type="text" placeholder='Original Pirce' name="oprice" value={note.oprice}  onChange={onchange}/>

                <br/>
                <label>Expected Price</label>
                <input type="text" placeholder='Expected price' name="eprice" value={note.eprice} onChange={onchange} />
                <br/>
                <label>Address</label>
                <input type="text" placeholder='Address' name="address" value={note.address}  onChange={onchange}/>
                <br/>
                <label>Number</label>
                <input type="text" placeholder='Number' name="wnum" value={note.wnum} onChange={onchange} />
                <br/>


                <center><button type='submit' onClick={handleClick}>Submit</button></center>
              </form>
            </div>
        </section>
    </>
  )
}
