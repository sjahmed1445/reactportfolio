import React from 'react'

const Expertise = () => {
 return (
   <div>
     <section className='container expertise text-center' id='expertise'>
       <h1>Expertise</h1>
       <p>Sometimes the best way to envision the future is to invent it</p>

       <div className='row rowsetting'>
         <div className='col-lg-4 col-md-4 col-sm-10 col-10 d-block m-auto'>
           <div className='imgsetting d-block m-auto bg-secondary'>
             <i className='fas fa-code fa-5x text-white'></i>
           </div>
           <h2>Full Stack Development</h2>
           <p>
             Innovative optimized solution seeker. Excited to be at the
             deployment phase of my new career as a web developer. I am
             ambitious, adventurous, assiduous, animated, and an alliteration
             advocate. Managed portfolio of programs/projects.
           </p>
         </div>

         <div className='col-lg-4 col-md-4 col-sm-10 col-10 d-block m-auto'>
           <div className='imgsetting d-block m-auto bg-secondary'>
             <i className='fab fa-gg-circle fa-5x text-white'></i>
           </div>
           <h2>DevOps Management</h2>
           <p>
             Orchestrates teams, infrastructure, and tools to enable rapid
             software delivery. Innovative ideas to accomplish the work not
             limiting to only organization but customize to used across.
             Introduced agile/scrum methods for team efficiency improvements.
           </p>
         </div>

         <div className='col-lg-4 col-md-4 col-sm-10 col-10 d-block m-auto'>
           <div className='imgsetting d-block m-auto bg-secondary'>
             <i className='fab fa-cloudversify fa-5x text-white'></i>
           </div>
           <h2>Cloud Architecture</h2>
           <p>
             Build and lead new Cloud Service Brokers team to architect and
             implement new public/hybrid/private cloud platforms. Create,
             evolve, mature and execute a cloud migration plan that includes
             detailed road map and risk assessment.
           </p>
         </div>
       </div>
     </section>
   </div>
 );
}

export default Expertise
