import React, {  useState } from 'react';
import"./style.css";
import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  TextField,
  MenuItem,
  InputLabel,
  IconButton,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DataData from '../../data/DataData';
import Annaire from '../../data/DataType';
import { useTranslation } from 'react-i18next';
interface Props {
  annauires: Annaire[];
}
const AnnairList = ({annauires}:Props) => {
  const [annaires, setAnnaires] = useState(DataData);
  const [selectedLetter, setSelectedLetter] = useState('');
  
  const { t, i18n } = useTranslation();
  
  const handleLetterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedLetter(event.target.value);
  };
   // Supprimer l'annuaire avec l'id spécifié
  const handleDelete = (id: number) => {
   
    const updatedAnnaires = annaires.filter((annaire) => annaire.id !== id);
    setAnnaires(updatedAnnaires);
  };
  // Filtrer les données en fonction de la lettre sélectionnée
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  
  const filteredAnnaires = annaires
    .filter((annaire) => {
      const fullName = `${annaire.nom} ${annaire.prenom}`.toLowerCase();
      return (
        selectedLetter === '' || fullName.startsWith(selectedLetter.toLowerCase())
      );
    })
    .sort((a, b) => a.nom.localeCompare(b.nom));

  

  return (
    <>
      <Container >
    
        <InputLabel variant="standard" htmlFor="tri-par" style={{ paddingRight: '50px' ,width:'100px',textAlign: 'left',display:"flex",alignContent:"end"}}>
          tri par
          <TextField
          select
           aria-label="tri par" 
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleLetterChange}
          value={selectedLetter}
          aria-labelledby="tri-par"
          
        >
          <MenuItem value="">All</MenuItem>
          {letters.map((letter) => (
            <MenuItem key={letter} value={letter}>
              {letter}
            </MenuItem>
          ))}
        </TextField>
        </InputLabel>
        
        <Grid container spacing={2} >
          {filteredAnnaires.map((entry: Annaire) => (
            <Grid item key={entry.id} xs={17} sm={12} md={8} lg={6}>
              <Card >
                <CardContent style={{ display: 'flex', alignItems: 'center' }}>
                  <Box style={{ flex: 70, paddingRight: 16 }}>
                    <img src={entry.picture} alt={entry.nom} style={{ width: '100%' }} />
                  </Box>
                  <IconButton aria-label="Supprimer" style={{display:"", alignItems:"flex-start",gap:"calc(20px + 10%)"}} onClick={() => handleDelete(entry.id)} >
                    <CloseIcon />
                  </IconButton>
                  <Box style={{ flex: 70 }} >
                    <Typography variant="h5">Nom:{entry.nom}</Typography>
                    <Typography variant="h5">Prénom:{entry.prenom}</Typography>
                    <Typography variant="body1">Date de naissance: {entry.dateDeNaissance}</Typography>
                    <Typography variant="body1">Addresse: {entry.address}</Typography>
                    <Typography variant="body1">Genre: {entry.genre}</Typography>
                  </Box>
                  
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default AnnairList;


