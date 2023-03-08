import React from 'react'
import './topo.css'
import {CgInsertAfterO} from 'react-icons/cg'
import {BsPencilFill} from 'react-icons/bs'
import {RiDeleteBin5Line} from 'react-icons/ri'


const topo = () => {
  return (
    
        <div className="topo__container">
            <div className="conteudo">
                <input type="text" id="inputTarefa" placeholder="Adicione uma nova tarefa"/>
                    
                    <button className='btnAdd'>
                        <CgInsertAfterO className="CgInsertAfterO"/>
                    </button>
            </div>

            <ul id="listaTarefas">
            <li>
                <span className='textoTarefa'> Tarefa 1</span>
                <div>
                    <button className='btnAcao'>
                      
                      <i className="RiDeleteBin5Line"><RiDeleteBin5Line/></i>
                      </button>
                    
                    <button className='btnAcao'>
                      
                      <i className="BsPencilFill"><BsPencilFill/></i>
                    </button>

                </div>
            </li>

        </ul>
        </div>

     

  )
}

export default topo