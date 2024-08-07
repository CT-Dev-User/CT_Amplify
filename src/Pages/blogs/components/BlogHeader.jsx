import React, { useEffect } from 'react'

const BlogHeader = ({ headerImg, heading, subHeading, TOCvisible, setTOCVisible }) => {
  

  return (
    <div className='w-[100vw] h-[100vh]'>
      <div className='w-full h-[100vh]'>
        <div className='w-[100vw] h-full relative' style={{ backgroundImage: `url(${headerImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
          <div className='w-[100%] h-[100%] absolute top-0 left-0 bg-black opacity-[0.6] flex flex-col justify-center items-start box-border px-3 gap-[50px] md:justify-evenly md:items:center'>
            <div className='flex flex-col gap-[20px] w-[100%]'>
              <h2 className='text-3xl font-semibold text-white w-[50%] ms-[110px] md:ms-0 md:w-[90%] md:text-xl' style={{ fontFamily: 'Montserrat' }}>{heading}</h2>
              <p className='text-xl md:text-[16px] text-white text-left ms-[110px] md:ms-0 w-[60%] md:w-[90%] md:mx-auto' style={{ fontFamily: 'Poppins' }}>{subHeading}</p>
            </div>
            <button className="relative overflow-hidden text-white border border-current w-[fit-content] px-3 py-1 ms-[110px] group border-b-2 text-[20px] md:px-4 md:ms-0 md:text-[16px] text-[20px] mt-5">
              <span className="absolute inset-0 bg-gradient-to-r from-[#7CE0FF] via-[#A598FF] to-[#C462FF] transition-width duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
              <span className="relative z-10">Connect With Our Experts<span className="font-bold">&rarr;</span></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogHeader