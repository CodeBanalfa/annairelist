import React, { useState } from 'react';
import { Card, CardContent, Container, Grid, Typography, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import DataData from '../../data/DataData';
import Annaire from '../../data/DataType';

const FiltreAnnuaire = () => {
  const [selectedLetter, setSelectedLetter] = useState('');

  // Logique pour générer A à Z
  const aToZ: string[] = [];
  for (let i = 0; i < 26; i++) {
    aToZ.push(String.fromCharCode(65 + i));
  }

  const handleLetterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedLetter((event.target as HTMLInputElement).value);
  };

  const filteredData = selectedLetter
    ? DataData.filter((entry: Annaire) => entry.nom.startsWith(selectedLetter))
    : DataData;

  return (
    <>
      <Container>
        <RadioGroup
          row
          aria-label="Alphabet Filter"
          name="alphabetFilter"
          value={selectedLetter}
          onChange={handleLetterChange}
        >
          {aToZ.map((letter) => (
            <FormControlLabel
              key={letter}
              value={letter}
              control={<Radio />}
              label={letter}
            />
          ))}
        </RadioGroup>

        <Grid container spacing={2}>
          {filteredData.map((entry: Annaire) => (
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
  );
};

export default FiltreAnnuaire;




