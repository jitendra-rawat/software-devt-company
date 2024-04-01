import React from 'react'

const Subfooter = () => {
  return (
    <section className='lg:relative lg:top-20 lg:rounded-lg max-w-7xl mx-auto container bg-red-500 flex flex-col lg:flex-row justify-between items-start py-24 px-4 lg:px-20'>

        <div>
            <h3 className='text-4xl font-bold font-poppins'>LET'S GET YOUR PROJECT <br />
STARTED .</h3>

        </div>
           
           <div className='mt-8 lg:mt-0'>
            <button className='bg-black text-white font-bold py-4 px-8 text-xl rounded-lg'>Contact with us</button>
           </div>

    </section>
  )
}

export default Subfooter