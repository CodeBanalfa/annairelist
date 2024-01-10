import React from 'react';
import * as yup from "yup";
import { useFormik } from 'formik';
import { Box, Button, Card, CardContent, CardMedia, Container, Typography, TextField, MenuItem, InputLabel } from '@mui/material';
import Annuaire from '../../data/DataType';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

interface AnnuaireNewProps {
  Annuaire: Annuaire | null;
  handleCloseNew: Function;
  handleAnnairChange: Function;
}

const AnnuaireNew: React.FC<AnnuaireNewProps> = ({ Annuaire, handleCloseNew, handleAnnairChange }) => {


  const schema = yup.object().shape({
    nom: yup.string().min(3, "Le nom doit contenir au moins 3 caractères").required('Le nom est requis'),
    prenom: yup.string().required('Le prénom est requis'),
    dateDeNaissance: yup.string().required('La date de naissance est requise'),
    address: yup.string().required('L\'adresse est requise'),
    genre: yup.string().required('Le genre est requis'),
    picture: yup.string().required('L\'image est requise'),
  });

  const formik = useFormik({
    initialValues: {
      nom: Annuaire?.nom || '',
      prenom: Annuaire?.prenom || '',
      dateDeNaissance: Annuaire?.dateDeNaissance || '',
      address: Annuaire?.address || '',
      genre: Annuaire?.genre || '',
      picture: Annuaire?.picture || '',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      let An: Annuaire = {
        nom: values.nom,
        prenom: values.prenom,
        dateDeNaissance: values.dateDeNaissance,
        address: values.address,
        genre: values.genre,
        picture: values.picture,
        id: 0
      };
      handleAnnairChange(An);
      handleCloseNew();
    },
  });

  return (
    <Container>
      <Card>
        <CardMedia
          component="img"
          image={Annuaire?.picture || ''}
          alt={t("Annuaire." + Annuaire?.id)}
          sx={{ width: 200 }}
        />
        <CardContent style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1, paddingRight: 16 }}>
            <img src={Annuaire?.picture || ''} alt={Annuaire?.nom || ''} style={{ width: "100%" }} />
          </div>
          <div style={{ flex: 2 }}>
            <Typography variant="h5">{Annuaire?.nom}</Typography>
            <Typography variant="subtitle1">{Annuaire?.prenom}</Typography>
            <Typography variant="body2">Date de naissance: {Annuaire?.dateDeNaissance}</Typography>
            <Typography variant="body2">Adresse: {Annuaire?.address}</Typography>
            <Typography variant="body2">Genre: {Annuaire?.genre}</Typography>
          </div>
        </CardContent>
      </Card>
      <form onSubmit={formik.handleSubmit}>
      
        <Box display="flex" gap={2} justifyContent="right">
          <Button variant="outlined" onClick={() => handleCloseNew()}>
            {t("common.cancel")}
          </Button>
          <Button variant="contained" type="submit">
            {t("common.save")}
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default AnnuaireNew;





