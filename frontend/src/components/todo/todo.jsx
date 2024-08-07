import "./todo.css"

function Todo () {
    return (
     <div className="todo">
      <div className="container ">
      <div className="d-flex flex-column w-100 p-5 input justify-content-center align-items-center">
       <div>
       <input
            type="text"
            placeholder="title"
        />
 </div>
 <div>
 <input
    type="text-area"
    placeholder="body" />
      
 </div>

       
        
      </div>
      </div>
     
     </div>
    );
  }
  
  export default Todo;
  