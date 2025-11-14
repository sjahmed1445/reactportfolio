import React from 'react'

const Navbar = () => {
 return (
   <nav className='bgimg'>
     <nav className='navbar navbar navbar-expand-lg bg-dark navbar-dark fixed-top'>
       <div className='container'>
         <a href='' className='navbar-brand text-light font-weight-bold hName'>
           Jawad Syed
         </a>

         <button
           className='navbar-toggler'
           type='button'
           data-toggle='collapse'
           data-target='#collapsenavbar'
         >
           <span className='navbar-toggler-icon'></span>
         </button>

         <div className='collapse navbar-collapse text-center' id='collapsenavbar'>
           <ul className='navbar-nav ml-auto'>
             <li className='nav-item active'>
               <a className='nav-link text-white' href='./index.html'>
                 Home <span className='sr-only'>(current)</span>
               </a>
             </li>
             <li className='nav-item'>
               <a className='nav-link text-white' href='#about'>
                 About
               </a>
             </li>
             <li className='nav-item'>
               <a className='nav-link text-white' href='#expertise'>
                 Expertise
               </a>
             </li>
             <li className='nav-item'>
               <a className='nav-link text-white' href='#portfolio'>
                 Portfolio
               </a>
             </li>
             <li className='nav-item'>
               <a className='nav-link text-white' href='#contact'>
                 Contact
               </a>
             </li>
           </ul>
         </div>
       </div>
     </nav>

     <div className='container text-center text-white headerset'>
       <h2>Welcome to Jawad Syed Portfolio Site</h2>
       <h1>The Possibilities are Infinite</h1>

       <a
         className='btn btn-secondary text-white text-uppercase btn-lg'
         href='#expertise'
       >
         Find out more
       </a>
     </div>
   </nav>
 );
}

export default Navbar
