import React,{Component} from 'react';
import Logo from './Logo/logo.png';

class Body extends Component{
    render(){
        
         // Usando un arreglo 

         const Lista = [ 
            {id:1,tittle:"1.- Tipos de componentes"},
            {id:2,tittle:"2.- Contenedores"},
            {id:3,tittle:"3.- Usar mas de un componente"},
            {id:4,tittle:"4.- Funciones"},
            {id:5,tittle:"5.- Props"},
        ]
        
        return(
            
            <div className="Body">
                <br></br>
            <img src={Logo}/>
            
            {
                //Aqui mando llamar al props
            }
            <h2> 
            {this.props.Practica}   
            </h2>
            
            {     // Mostrando el arrego con .map
               Lista.map(p=><h4 key={p.idid}>{p.tittle}</h4>)
            }
          
            </div>
            
              );

    }
}


export default Body;