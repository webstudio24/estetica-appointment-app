import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai'


const socialLinks = [
  {
    path: "https://www.instagram.com/webstudio__/",
    icon: <AiOutlineInstagram className='group-hover:text-white w-4 h-5' />,
  },
  {
    path: "",
    icon: <AiOutlineWhatsApp className='group-hover:text-white w-4 h-5' />,
  },
];

const quickLinks01 = [
  {
    path: "/home",
    display: "Inicio",
  },
  {
    path: "/",
    display: "Sobre nosotros",
  },
  {
    path: "/services",
    display: "Servicios",
  },
  {
    path: "/",
    display: "Blog",
  },
]

const quickLinks02 = [
  {
    path: "/encontrar-esteticista",
    display: "Encontrar esteticista",
  },
  {
    path: "/",
    display: "Registrar un turno",
  },
  {
    path: "/",
    display: "Encontrar una sucursal",
  },
  {
    path: "/",
    display: "Realizar una opinion",
  }
]

const quickLinks03 = [
  {
    path: "/",
    display: "Donar",
  },
  {
    path: "/contact",
    display: "Contactanos",
  },
]

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className='pb-16 pt-10'>
      <div className='container'>
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <img src={logo} alt="" />
            <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>Copyright © {year} desarrollado por Web Studio, todos los derechos reservados.</p>

            <div className='flex items-center gap-3 mt-4'>
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className='w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className='text-[20px] leadign-[30px] font-[700] mb-6 text-headingColor'>Acceso rápido</h2>

            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className='text-[20px] leadign-[30px] font-[700] mb-6 text-headingColor'>Quiero:</h2>

            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className='text-[20px] leadign-[30px] font-[700] mb-6 text-headingColor'>Soporte</h2>

            <ul>
              {quickLinks03.map((item, index) => (
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer