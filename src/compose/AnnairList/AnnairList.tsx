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
  Menu,
} from '@mui/material';
import DataData from '../../data/DataData';
import Annaire from '../../data/DataType';
interface Props {
  annauires: Annaire[];
}
const AnnairList = ({annauires}:Props) => {
  const [annaires, setAnnaires] = useState(DataData);
  const [selectedLetter, setSelectedLetter] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
 
  const handleSort = (order: 'asc' ) => {
    const sortedAnnaires = [...annaires].sort((a, b) => {
      const fullNameA = `${a.nom} ${a.prenom}`.toLowerCase();
      const fullNameB = `${b.nom} ${b.prenom}`.toLowerCase();


      if (fullNameA < fullNameB) {
        return order === 'asc' ? -1 : 1;
      }
      if (fullNameA > fullNameB) {
        return order === 'asc' ? 1 : -1;
      }
      return 0;
    });

    setAnnaires(sortedAnnaires);
    setAnchorEl(null);
  };

  const handleLetterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedLetter(event.target.value);
  };

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  // Filtrer les données en fonction de la lettre sélectionnée
  const filteredAnnaires = annaires.filter((annaire) => {
    const fullName = `${annaire.nom} ${annaire.prenom}`.toLowerCase();
    return (
      (selectedLetter === '' || fullName.startsWith(selectedLetter.toLowerCase()))
    );
  });

  

  return (
    <>
      <Container >
      <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
        >
      
          
        </Menu>
        <InputLabel variant="standard" htmlFor="tri-par" style={{ paddingRight: '50px' ,width:'100px',textAlign: 'left',display:"flex",alignContent:"end"}}>
          tri par
          <TextField
          select
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
            <Grid item key={entry.id} xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardContent style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ flex: 1, paddingRight: 16 }}>
                    <img src={entry.picture} alt={entry.nom} style={{ width: '100%' }} />
                  </div>
                  <div style={{ flex: 2 }}>
                    <Typography variant="h5">{entry.nom}</Typography>
                    <Typography variant="subtitle1">{entry.prenom}</Typography>
                    <Typography variant="body1">Date de naissance: {entry.dateDeNaissance}</Typography>
                    <Typography variant="body1">Adresse: {entry.address}</Typography>
                    <Typography variant="body1">Genre: {entry.genre}</Typography>
                  </div>
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


