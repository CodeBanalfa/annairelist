import { AppBar, Toolbar, Typography } from "@mui/material";
import"./footer.css"
const Footer=()=>{
    return(
        <>
         <AppBar  position="static" color="primary" sx={{ marginTop: 40 ,display:"flex",flexDirection: 'column'}}>
        <Toolbar className="H1">
          <Typography variant="body2" color="inherit" sx={{ flexGrow: 1, textAlign: 'center' }}>
            © faire de moi-même.
          </Typography>
        </Toolbar>
      </AppBar>
        </>
    )
}
export default Footer;