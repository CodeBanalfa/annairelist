import Annuaire from '../../data/DataType';
import { useTranslation } from 'react-i18next';
import * as yup from "yup";
import { useFormik } from 'formik';
import { Box, Button, Card, CardContent, CardMedia, Container, Typography, TextField, MenuItem, InputLabel } from '@mui/material';

interface Props {
  Annair: Annuaire;
  handleCloseNew: Function;
  handleAnnairChange: Function;
}

const AnnuaireNew = ({ Annair, handleCloseNew, handleAnnairChange }: Props) => {
  const { t } = useTranslation();

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
      nom: Annair.nom,
      prenom: Annair.prenom,
      dateDeNaissance: Annair.dateDeNaissance,
      address: Annair.address,
      genre: Annair.genre,
      picture: Annair.picture,
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
          image={Annair.picture}
          alt={t("Annair." + Annair.id)}
          sx={{ width: 200 }}
        />
        <CardContent style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1, paddingRight: 16 }}>
            <img src={Annair.picture} alt={Annair.nom} style={{ width: "100%" }} />
          </div>
          <div style={{ flex: 2 }}>
            <Typography variant="h5">{Annair.nom}</Typography>
            <Typography variant="subtitle1">{Annair.prenom}</Typography>
            <Typography variant="body2">Date de naissance: {Annair.dateDeNaissance}</Typography>
            <Typography variant="body2">Adresse: {Annair.address}</Typography>
            <Typography variant="body2">Genre: {Annair.genre}</Typography>
          </div>
        </CardContent>
      </Card>
      <form onSubmit={formik.handleSubmit}>
  <TextField
    fullWidth
    id="nom"
    name="nom"
    label={t("common.name")}
    variant="outlined"
    value={formik.values.nom}
    onChange={formik.handleChange}
    error={formik.touched.nom && Boolean(formik.errors.nom)}
    helperText={formik.touched.nom && formik.errors.nom}
  />

  <TextField
    fullWidth
    id="prenom"
    name="prenom"
    label={t("common.surname")}
    variant="outlined"
    value={formik.values.prenom}
    onChange={formik.handleChange}
    error={formik.touched.prenom && Boolean(formik.errors.prenom)}
    helperText={formik.touched.prenom && formik.errors.prenom}
  />

  <TextField
    fullWidth
    id="dateDeNaissance"
    name="dateDeNaissance"
    label={t("common.birthDate")}
    variant="outlined"
    type="date"
    value={formik.values.dateDeNaissance}
    onChange={formik.handleChange}
    error={formik.touched.dateDeNaissance && Boolean(formik.errors.dateDeNaissance)}
    helperText={formik.touched.dateDeNaissance && formik.errors.dateDeNaissance}
  />

  <TextField
    fullWidth
    id="address"
    name="address"
    label={t("common.address")}
    variant="outlined"
    value={formik.values.address}
    onChange={formik.handleChange}
    error={formik.touched.address && Boolean(formik.errors.address)}
    helperText={formik.touched.address && formik.errors.address}
  />

  <InputLabel className="label">{t("common.gender")}</InputLabel>
  <TextField
    select
    fullWidth
    id="genre"
    name="genre"
    variant="outlined"
    value={formik.values.genre}
    onChange={formik.handleChange}
    error={formik.touched.genre && Boolean(formik.errors.genre)}
    helperText={formik.touched.genre && formik.errors.genre}
  >
    <MenuItem value="homme">{t("common.male")}</MenuItem>
    <MenuItem value="femme">{t("common.female")}</MenuItem>
  </TextField>

  <TextField
    fullWidth
    id="picture"
    name="picture"
    label={t("common.image")}
    variant="outlined"
    value={formik.values.picture}
    onChange={formik.handleChange}
    error={formik.touched.picture && Boolean(formik.errors.picture)}
    helperText={formik.touched.picture && formik.errors.picture}
  />

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




