import React from 'react'

const Footer = () => {
 return (
   <div>
     <footer className='footer'>
       <div className='container'>
         <div className='row align-items-center'>
           <div className='col-md-4'>
             <span className='copyright'>
               Copyright <i className='fas fa-copyright'></i> Jawad Syed{' '}
               {new Date().getFullYear()}
             </span>
           </div>
           <div className='col-md-4'>
             <ul className='list-inline social-buttons'>
               <li className='list-inline-item'>
                 <a href='https://github.com/sjahmed1445' target='_blank'>
                   <i className='fab fa-github'></i>
                 </a>
               </li>
               <li className='list-inline-item'>
                 <a
                   href='https://www.linkedin.com/in/jawad-syed-91b4b57'
                   target='_blank'
                 >
                   <i className='fab fa-linkedin-in'></i>
                 </a>
               </li>
             </ul>
           </div>
           <div className='col-md-4'>
             <ul className='list-inline quicklinks'>
               <li className='list-inline-item'>
                 <a href='#'>Privacy Policy</a>
               </li>
               <li className='list-inline-item'>
                 <a href='#'>Terms of Use</a>
               </li>
             </ul>
           </div>
         </div>
       </div>
     </footer>
   </div>
 );
}

export default Footer
