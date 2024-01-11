import React from 'react';
import * as yup from "yup";
import { useFormik } from 'formik';
import { Box, Button, Card, CardContent, CardMedia, Container, TextField, MenuItem, InputLabel, FormControl, Select } from '@mui/material';
import Annuaire from '../../data/DataType';
import { t } from 'i18next';


interface Props {
  Annuaire: Annuaire[];
  handleCloseNew: Function;
  handleAnnairChange: Function;
  handleAddAnnuaire :Function
}

const AnnuaireNew = ({ Annuaire, handleCloseNew, handleAnnairChange,handleAddAnnuaire  }: Props) => {
  const schema = yup.object().shape({
    nom: yup.string().min(3, "Le nom doit contenir au moins 3 caractères").required('Le nom est requis'),
    prenom: yup.string().required('Le prénom est requis'),
    dateDeNaissance: yup.string().required('La date de naissance est requise'),
    address: yup.string().required('L\'adresse est requise'),
    genre: yup.string().required('Le genre est requis'),
    picture: yup.string().required('L\'image est requise'),
  });
  const handleImageSelection = (gender: string) => {
    const selectedImage = gender === 'homme' ? '../asstes/homme.png' : '../asstes/femme.png';
    formik.setFieldValue('picture', selectedImage);
  };
  

  const formik = useFormik({
    initialValues: {
      nom: Annuaire[0]?.nom || '',
      prenom: Annuaire[0]?.prenom || '',
      dateDeNaissance: Annuaire[0]?.dateDeNaissance || '',
      address: Annuaire[0]?.address || '',
      genre: Annuaire[0]?.genre || '',
      picture: Annuaire[0]?.picture || '',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      let newAnnuaire: Annuaire = {
        nom: values.nom,
        prenom: values.prenom,
        dateDeNaissance: values.dateDeNaissance,
        address: values.address,
        genre: values.genre,
        picture: values.picture,
        id: 0
      };
      handleAnnairChange(newAnnuaire);
      handleCloseNew();
     
    },
  });

  return (
    <Container>
      <Card style={{height:"50rem"}}>
      <CardMedia
    component="img"
    image={formik.values.picture || ''}
    alt={t("Annuaire." + Annuaire[0]?.id)}
    sx={{ width: 200, height: 400, objectFit: 'cover' }}
     
     />

        <CardContent style={{ display: "flex", alignItems: "center" ,top:90}}>
          <Button onClick={() => handleImageSelection('homme')}>Image Homme</Button>
          <Button onClick={() => handleImageSelection('femme')}>Image Femme</Button>
          <Box style={{paddingLeft:50,top:90, justifyContent: "space-between"}}>
        
            <TextField
              fullWidth
              id="nom"
              name="nom"
              label="Nom"
              value={formik.values.nom}
              onChange={formik.handleChange}
              error={formik.touched.nom && Boolean(formik.errors.nom)}
              helperText={formik.touched.nom && formik.errors.nom}
              style={{ marginTop: "40px",top:-400 }} 
            />
            <TextField
              fullWidth
              id="prenom"
              name="prenom"
              label="Prenom"
              value={formik.values.prenom}
              onChange={formik.handleChange}
              error={formik.touched.prenom && Boolean(formik.errors.prenom)}
              helperText={formik.touched.prenom && formik.errors.prenom}
              style={{ marginTop: "40px",top:-400 }} 
            />
             <TextField
              fullWidth
              id="dateDeNaissance"
              name="dateDeNaissance"
              label="dateDeNaissance"
              value={formik.values.dateDeNaissance}
              onChange={formik.handleChange}
              error={formik.touched.dateDeNaissance && Boolean(formik.errors.dateDeNaissance)}
              helperText={formik.touched.dateDeNaissance && formik.errors.dateDeNaissance}
              style={{ marginTop: "40px",top:-400 }} 
            />
             <TextField
              fullWidth
              id="address"
              name="address"
              label="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
              style={{ marginTop: "40px",top:-400 }} 
            />
            <FormControl fullWidth>
              <InputLabel id="genre-label" style={{ marginTop: "40px",top:-400 }} >Genre</InputLabel>
              <Select
                labelId="genre-label"
                id="genre"
                name="genre"
                value={formik.values.genre}
                onChange={formik.handleChange}
                label="Genre"
                style={{ marginTop: "40px",top:-400 }} 
              >
                <MenuItem value="homme">Homme</MenuItem>
                <MenuItem value="femme">Femme</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </CardContent>
      </Card>
      <form onSubmit={formik.handleSubmit}>
        <Box display="flex" gap={2} justifyContent="center">
          <Button variant="outlined" onClick={() => handleCloseNew()}>
           Annule
          </Button>
          <Button variant="contained" type="submit">
            Enregistrer
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default AnnuaireNew;






