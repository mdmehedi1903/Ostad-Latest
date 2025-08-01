
import { Fragment } from 'react';

const App = () => {
// ******************* // Start First Return

    // let marks = 90;
    // // const city = ["Dhaka", "London", "Kolkata"]
    // return (
    //   //***************** */ // Conditional Renderinng  === short hand if else condition
    //   <>
    //     <div>
    //       {marks>80?<h1>Brilliant Result</h1>:<h1>Avarage Result</h1>}
    //     </div>
    //   </>
    //   //***************** */



    //   //***************** *///IIUF 
    //   // <div>
    //   //     {
    //   //       (()=> {
    //   //         if(marks>80 && marks<100){
    //   //           return <h1>A+</h1>
    //   //         }
    //   //         else if(marks>40 && marks<800){
    //   //           return <h1>B+</h1>
    //   //         }else{
    //   //           return <h1>C+</h1>
    //   //         }
    //   //       })()
    //   //     }
    //   // </div>
    //   //***************** */



    //   //***************** */// Looping
    //     // <div>
    //     //   <ul>
    //     //     {
    //     //       city.map((item, i)=> {
    //     //         return <li key={i.toString()}>{item}</li>
    //     //       })
    //     //     }
    //     //   </ul>
    //     // </div>
    //   //***************** */



    //   //***************** */ /// If else
    //   // <div>

    //   // </div>
    //   //***************** */
    // );

  // ******************* // End First Return

  // ******************* // Start Second Return
    // const status = true;
    // if(status==false){
    // return(
    //     <div>
    //       <h1>Login Status</h1>
    //       <button>Logout</button>
    //     </div>
    //   );
    // }else{
    //   return(
    //     <div>
    //       <h1>Login Status</h1>
    //       <button>Login</button>
    //     </div>
    //   );
    // }
  // ******************* // End Second Return


  // ******************* // Start Third Return
  const loginStatus = (status)=> {
    if(status){
      return <button>Logout Button</button>
    }else{
      return <button>Login Button</button>
    }
  }

  return(
    <div>
      <h1>Login Status</h1>
      {loginStatus(true)}
    </div>
  )
  // ******************* // End Third Return
};

export default App;