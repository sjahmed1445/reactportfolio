import React from 'react'

const Navbar = () => {
 return (
   <nav class='bgimg'>
     <nav class='navbar navbar navbar-expand-lg bg-dark navbar-dark fixed-top'>
       <div class='container'>
         <a href='' class='navbar-brand text-light font-weight-bold hName'>
           Jawad Syed
         </a>

         <button
           class='navbar-toggler'
           type='button'
           data-toggle='collapse'
           data-target='#collapsenavbar'
         >
           <span class='navbar-toggler-icon'></span>
         </button>

         <div class='collapse navbar-collapse text-center' id='collapsenavbar'>
           <ul class='navbar-nav ml-auto'>
             <li class='nav-item active'>
               <a class='nav-link text-white' href='./index.html'>
                 Home <span class='sr-only'>(current)</span>
               </a>
             </li>
             <li class='nav-item'>
               <a class='nav-link text-white' href='#about'>
                 About
               </a>
             </li>
             <li class='nav-item'>
               <a class='nav-link text-white' href='#expertise'>
                 Expertise
               </a>
             </li>
             <li class='nav-item'>
               <a class='nav-link text-white' href='#portfolio'>
                 Portfolio
               </a>
             </li>
             <li class='nav-item'>
               <a class='nav-link text-white' href='#contact'>
                 Contact
               </a>
             </li>
           </ul>
         </div>
       </div>
     </nav>

     <div class='container text-center text-white headerset'>
       <h2>Welcome to Jawad Syed Poftfolio Site</h2>
       <h1>The Possibilities are Infinite</h1>

       <a
         class='btn btn-secondary text-white text-uppercase btn-lg'
         href='#expertise'
       >
         Find out more
       </a>
     </div>
   </nav>
 );
}

export default Navbar
