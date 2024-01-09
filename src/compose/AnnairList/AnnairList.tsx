import {  Card, CardContent, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import DataData from '../../data/DataData'
import Annaire from '../../data/DataType'


const AnnairList=() =>{
  return (
   <>
    
    <Container>
      <Grid container spacing={2}>
        {DataData.map((entry: Annaire) => (
          <Grid item key={entry.id} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardContent style={{ display: "flex", alignItems: "center" }}>
                <div style={{ flex: 1, paddingRight: 16 }}>
                  <img src={entry.picture} alt={entry.nom} style={{ width: "100%" }} />
                </div>
                <div style={{ flex: 2 }}>
                  <Typography variant="h5">{entry.nom}</Typography>
                  <Typography variant="subtitle1">{entry.prenom}</Typography>
                  <Typography variant="body2">Date de naissance: {entry.dateDeNaissance}</Typography>
                  <Typography variant="body2">Adresse: {entry.address}</Typography>
                  <Typography variant="body2">Genre: {entry.genre}</Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      
    </Container>
   </>
  )
}

export default AnnairList