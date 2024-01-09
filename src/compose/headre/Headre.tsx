import React from 'react'
import"./headre.css"
import { AppBar, Toolbar, Typography } from '@mui/material';

const Headre=()=> {
  return (
    <>
    <AppBar position="static" color="primary">
        <Toolbar className='h1'>
          <Typography className='h1' variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            Annuaire d'Entreprise
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Headre;