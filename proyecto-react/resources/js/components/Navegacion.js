import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import style from "./style.css";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    navbtn:{
        background: '#DC3232',
        color: 'white',
        height: '35px',
        marginTop: '-85px',
        width: '155px',
        marginLeft: '80px'
    },
  }));
  

const Navegacion =(props)=>{
    const classes = useStyles();
    const toolba = <AppBar position="fixed"><Toolbar className="nav" >
 
    <div className="contenedor">
        <h2 className="textnav">Nice Smile</h2>

        
           
           
        
            <div  className="navbtnpad">
            <Button
                classes={{
                    root: classes.navbtn
               }}
                >Iniciar Sesión
            
            </Button>
            </div>
            </div>

    </Toolbar>

    </AppBar>
  
    return(
        <div className={classes.root}>
            <AppBar position="static">

            {toolba}
            
            </AppBar>

            
         
            
         
        </div>

    );
}
export default Navegacion;
ReactDOM.render(<Navegacion></Navegacion>, document.getElementById('contenido'));