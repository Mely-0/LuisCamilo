import React from 'react'
import '../components/portafolio.css'
import Caroulsel from '../components/Caroulsel'
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
export const Portafolio = () => {

  return (
    
    <div className='portafolio'>
      <nav id="navbar-example2" className="navbar bg-body-tertiary">
  <ul className="nav nav-pills">
    <li className="nav-item">
      <a className="nav-link" href="#contenedor1">Portafolio</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#sobremi">Sobremi</a>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Menu</a>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#habilidades">Habilidades</a></li>
        <li><a className="dropdown-item" href="#container-pro">Proyectos</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#contactos-pro">Contactos</a></li>
      </ul>
    </li>
  </ul>
</nav>
    <div className='contenedor1' id='contenedor1'>
      <section className='texto'>
        <h1>Luis Garcia</h1>
        <p>Programador de software , 24 años.</p>
      </section>
      <section className='foto'></section>
    </div>
    <section className='picture'></section>

    <div className='sobremi' id='sobremi'>

      <h5 className='aboutme'>
        Sobre mi 
        <hr />
        Ingeniero electrónico con alto grado de responsabilidad, honestidad y compromiso, con deseos de superación. Me considero una persona con facilidad de adaptación y capacidad para aprender rápidamente y trabajar en equipo para conseguir los objetivos. Siempre buscando aprender nuevas habilidades, asumir responsabilidades adicionales y crecer profesionalmente. Talento para desarrollar, simplificar procedimientos y encontrar soluciones.</h5>
      <div className='habilidades' id='habilidades'>
      {<Caroulsel/>}
      </div>
    </div>
    <div className='container-pro' id='container-pro'>
      <article className='tituloProyecto'>
      <h3>Proyectos</h3>
      </article>
    <div className="container">
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true"/>
                    <h3>Lista de Tareas</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                <a href="https://task-list1.netlify.app"> Ver</a>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true"/>
                    <h3>Pagina Web</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                        <a href="pagina-web151.netlify.app">Ver</a>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true"/>
                    <h3>Api Pokémon </h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                  <a href="https://pokemon-api2.netlify.app">ver</a>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div className='contactos-pro' id='contactos-pro'>
    <div className='contactos'>
        <a href="https://github.com/LuisCamiloG" className='img-1'>
      <article >
      <FaGithub className='ico-1'/>
      </article>
      </a>
      <article className='img-2'>
        <FaFacebookSquare className='ico-2'/>
      </article>
      <article className='img-3'>
        <HiMail className='ico-3'/>
      </article>
    </div>
    </div>
  </div>
  )
}