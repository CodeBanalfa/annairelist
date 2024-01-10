import AnnairList from "../AnnairList/AnnairList";
import * as React from 'react';

import AddIcon from '@mui/icons-material/Add';
import { Button } from "@mui/material";



const Main = () => {
  

  return (
    <> 
      <Button >
        <AddIcon />  
      </Button>
 
      <AnnairList />

     
    </>
  );
};

export default Main;





