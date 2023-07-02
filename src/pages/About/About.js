import React  from "react";
// export default function Home() {
//       return (
//               <div>
//                 <h2>Home</h2>
//               </div>
//             );
// }
//
const About = () => {

    const onSubmit = async () => {
        console.log("trigger");
    }
    


       return (
               <div>
                 <h2>About Page</h2>
           <button onClick={onSubmit}> Click me</button>
               </div>
             );
}

export default About;
