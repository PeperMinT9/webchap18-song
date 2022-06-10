import "./styles.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MicIcon from "@mui/icons-material/Mic";
import Typography from "@mui/material/Typography";
import SongList from "./SongList";

export default function App() {
  return (
    <div className="App">
      <AppBar position="relative">
        <Toolbar>
          <MicIcon sx={{ mr: 1 }} />
          <Typography variant="h6" noWrap>
            노래방 애창곡
          </Typography>
        </Toolbar>
      </AppBar>
      <SongList />
    </div>
  );
}
