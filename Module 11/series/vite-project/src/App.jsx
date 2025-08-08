
import { Fragment } from 'react';
import Hero from './components/Hero';

const App = () => {
// ******************* // Start 

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

  // ******************* // End



  // ******************* // Start
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
  // ******************* // End


  // ******************* // Start
  // //Conditional Rendering using if else
  // const loginStatus = (status)=> {
  //   if(status){
  //     return <button>Logout Button</button>
  //   }else{
  //     return <button>Login Button</button>
  //   }
  // }

  // return(
  //   <div>
  //     <h1>Login Status</h1>
  //     {loginStatus(false)}
  //   </div>
  // )
  // ******************* // End 


// ******************* // Start 
  // //Conditional Rendering using Switch Case
  // const status = false;
  // switch(status){
  //   case true:
  //     return <button>Logout Button</button>
  //   case false: 
  //     return <button>Login Btn</button>

  //   default: 
  //     return null;
  // }

  // ******************* // End


  // ******************* // Start

    // // Conditional rendering using ternary operator
    //   let status = true;
    //   return(
    //     <>
    //       {
    //         status?
    //           <button>Logout</button>
    //         : <button>Login</button>
    //       }
    //     </>
    //   )




  // ******************* // Start
  
  // // logical && 
  // let status = true;
  //   return(
  //     <> <h1>Login Status</h1>
  //       {status && <button>Logout</button>}
  //     </>
  //   )


  // ******************* // Start

  // // Conditional rendering using IIUF
  // let status = false;
  //   return(
  //     <>
  //         <h1>Login Status</h1>
  //         {
  //           (()=> {
  //             if(status){
  //               return <button>Logout</button>
  //             }else{
  //               return <button>Login</button>
  //             }
  //           })()
  //         }
  //     </>
  //   )

  // ******************* // End 




  // ******************* // Start
    // Props
      return(
        <>
          <Hero title="Learn React"/>
        </>
      );

  // ******************* // End 




  // ******************* // Start
    
    // Name of Tutorial

  // ******************* // End 


};

export default App;