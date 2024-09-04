import React from 'react'
import aboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom'
const About = () => {
    return <section>
        <div className='container'>
            <div className='flex  justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
                
                {/* =================== about image =============== */}
                <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
                    <img src={aboutImg} alt="" className='rounded-2xl' />
                    <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] md:right-[-7%] lg:right-[22%]">
                        <img src={aboutCardImg} alt="" />
                    </div>
                </div>

                {/* =================== about content =============== */}
                <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                    <h2 className='heading'>Orgullosa de ser una de las mejores de Córdoba.</h2>
                    <p className='text__para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi nesciunt blanditiis natus placeat? Blanditiis ipsam aut, atque temporibus, et at, obcaecati aliquid ratione eum dignissimos tempore necessitatibus voluptatibus quisquam maxime.</p>
                    <p className="text__para mt-[30px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nobis in deserunt obcaecati laborum pariatur vitae impedit cupiditate aspernatur odio cumque adipisci magnam ullam, nam, sit itaque cum, doloremque suscipit.</p>
                    <Link to="/">
                        <button className='btn'>Leer más...</button>
                    </Link>
                </div>
            </div>
        </div>
    </section>
}

export default About