import React from 'react'
import heroImg01 from '../assets/images/hero-img01.png'
import heroImg02 from '../assets/images/hero-img02.png'
import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import featureImg from '../assets/images/feature-img.png'
import faqImg from '../assets/images/faq-img.png'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import About from '../components/About/About'
import ServiceList from '../components/Services/ServiceList'
import ListaEsteticistas from '../components/Esteticistas/ListaEsteticistas'
import FaqList from '../components/Faq/FaqList'
import Testimonial from '../components/Testimonial/Testimonial'
const Home = () => {
  return (
    <>
      {/* ================== hero section ================ */}
      <section className='hero__section pt-[60px] 2xl:h-[800px]'>
        <div className="container">
          <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
            {/* =================== hero content ================ */}
            <div>
              <div className='lg:w-[570px]'>
                <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>En esta estética conseguí tu mejor versión.</h1>
                <p className='text__para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, nam magni! Molestiae veniam vero totam aliquam non magni nulla, amet nisi? Incidunt voluptate quis suscipit qui dignissimos aliquam deleniti ipsum.</p>
                <button className='btn'>Solicitar un turno.</button>
              </div>

              {/* =================== hero counter ================ */}
              <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>+5</h2>
                  <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                  <p className='text__para'>Años de experiencia</p>
                </div>

                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>2</h2>
                  <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                  <p className='text__para'>Sucursales</p>
                </div>

                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>100%</h2>
                  <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                  <p className='text__para'>Clientes satisfechos</p>
                </div>
              </div>
            </div>
            {/* =================== hero content ================ */}
            <div className='flex gap-[30px] justify-end'>
              <div>
                <img className='w-full rounded-[10px]' src={heroImg01} alt="" />
              </div>
              <div className='mt-[30px]'>
                <img className='w-full rounded-[10px] mb-[30px]' src={heroImg02} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================= hero section end ================ */}

      <section>
        <div className="container">
          <div className='lg:w-[470px] mx-auto'>
            <h2 className='heading text-center'>
              Dando nuestros mejores servicios.
            </h2>
            <p className='text__para text-center'>Brindando calidad de atención junto a nuestros profesionales desde hace más de 5 años.</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon01} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                  Encontra una esteticista.
                </h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] text-center'>Profesionales formados con formacion de alta calidad.</p>
                <Link
                  to="/esteticistas"
                  className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>
              </div>
            </div>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon02} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                  Encontra tu sucursal más cercana.
                </h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] text-center'>Profesionales formados con formacion de alta calidad.</p>
                <Link
                  to="/esteticistas"
                  className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>
              </div>
            </div>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon03} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                  Agenda un turno.
                </h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] text-center'>Profesionales formados con formacion de alta calidad.</p>
                <Link
                  to="/esteticistas"
                  className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />

      {/* ================= services section ================ */}

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className='heading text-center'>Nuestros servicios estéticos.</h2>
            <p className='text__para text-center'>Servicios estéticos para todos los tipos de piel.</p>
          </div>

          <ServiceList />
        </div>
      </section>

      {/* ================= services section end ================ */}

      {/* ================= feature section ================ */}
      <section>
        <div className='container'>
          <div className='flex items-center justify-between flex-col lg:flex-row'>

            {/* ================= feature content ================ */}
            <div className='xl:w-[670px]'>
              <h2 className='heading'>
                Recibe atencion virtual <br />en cualquier momento.
              </h2>
              <ul className='pl-4'>
                <li className='text__para'>
                  1. Programar la cita directamente</li>
                <li className='text__para'>
                  2. Encontrar una esteticista</li>
                <li className='text__para'>
                  3. Agenda un turno con tu esteticista favorita! </li>
              </ul>
              <Link to='/'><button className='btn'>Saber más</button></Link>
            </div>

            {/* ================= feature image ================ */}
            <div className='realtive z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
              <img src={featureImg} className='w-3/4 rounded-2xl' alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* ================= feature section end ================ */}

      {/* ================= esteticists section ================ */}

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className='heading text-center'>Nuestras esteticistas.</h2>
            <p className='text__para text-center'>Servicios estéticos para todos los tipos de piel.</p>
          </div>
          <ListaEsteticistas />
        </div>
      </section>

      {/* ================= esteticists section ================ */}

      {/* ================= preguntas frecuentes section ================ */}

      <section>
        <div className='container'>
          <div className='flex justify-between gap-[50px] lg:gap-0'>
            <div className='w-1/2 hidden md:block'>
              <img src={faqImg} alt="" className='rounded-full' />
            </div>
            <div className='w-full md:1/2 pl-12'>
              <h2 className='heading'>Preguntas frequentes de nuestros clientes.</h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>

      {/* ================= preguntas frecuentes section end ================ */}

      {/* ================= testimonios ================ */}

      <section>
        <div className='container'>
          <div className="xl:w-[470px] mx-auto">
            <h2 className='heading text-center'>¿Qué opinan nuestros clientes?</h2>
            <p className='text__para text-center'>Servicios estéticos para todos los tipos de piel.</p>
          </div>

          <Testimonial/>
        </div>
      </section>

      {/* ================= testimonios fin ================ */}

    </>
  )
}

export default Home