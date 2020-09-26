import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import usuario from "../json/usuario.json";
import style from "./style.css";
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles((theme) => ({
    
 

      btnhero: {
        background: '#2C41B7',
        borderRadius: 6,
        border: 0,
        color: 'white',
        height: '50px',
        width: '200px',
    },

  
   
}));

const Hero = (props) => {
    const classes = useStyles();
    const hero =   
    <div>
            <div className="heroleft">
                
            <center>
                <br></br>
                <br></br>
                <br></br>
                <div className="texthero">
                    <h1>REGISTRATE Y DISFRUTA DE BENEFICIOS</h1>
                    <h2>¡35% de descuento y revisión gratis!</h2>
                    <div className="text">
                    <TextField className="nombre" required id="standard-required" label="Nombre"  /><br></br>
                    <TextField className="nombre" required id="standard-required" label="Correo"  /><br></br>
                    <TextField className="nombre" required id="standard-required" label="Telefono"  /><br></br>
                    <TextField className="nombre"required id="standard-required" label="Direccion"  />
        </div>
        <br></br>
                    <div className="btnhero">
                        <Button 
                            classes={{
                                root: classes.btnhero

                            }}>
                                Registrarse
                        
                        </Button>
                    </div>
                </div>
             </center>

            </div>
            <div className="heroright">
                
            </div>
            <div className="equipo1">

            </div>
               </div>
  
   
    
    

    return (
  
         

        <div className={classes.root}>
            {hero}
        </div>
      
     
        
        
        
        
     
    
          
           
          
            
            
         
        
        

    );
}
export default Hero;
