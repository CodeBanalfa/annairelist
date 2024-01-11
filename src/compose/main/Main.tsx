import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Button } from "@mui/material";
import AnnairList from "../AnnairList/AnnairList";
import AnnuaireNew from '../new/AnnairNew';
import Annaire from '../../data/DataType';

const Main = () => {
  const [showForm, setShowForm] = useState(false);
  const [annuaireList, setAnnuaireList] = useState<Annaire[]>([]);

  const handleAddClick = () => {
    setShowForm(true);
  };

  const handleAnnuaireChange = (newAnnuaire: Annaire) => {
   
    setAnnuaireList((prevAnnuaireList) => [...prevAnnuaireList, newAnnuaire]);
  };

  const handleCloseNew = () => {
    setShowForm(false);
  };

  const handleAddAnnuaire = (newAnnuaire: Annaire) => {
  
  };

  return (
    <> 
      <Button onClick={handleAddClick}  id="buttonTitle" title="Title">
        <AddIcon /> 
      </Button>
  
      {showForm ? (
        <AnnuaireNew Annuaire={annuaireList} handleCloseNew={handleCloseNew} handleAnnairChange={handleAnnuaireChange} handleAddAnnuaire={handleAddAnnuaire} />
      ) : (
        <AnnairList annauires={annuaireList} />
      )}
    </>
  );
};

export default Main;












