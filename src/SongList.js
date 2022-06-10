import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MusicIcon from "@mui/icons-material/MusicVideo";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItemAvatar from "@mui/material/ListItemAvatar";

const SongList = () => {
  const [songName, setSongName] = useState("");
  const [songs, setSongs] = useState(["오우야", "테스형"]);

  const addSong = (e) => {
    e.preventDefault();
    console.log(songName);
    setSongs([...songs, songName]);
    setSongName("");
  };

  const SongListItem = ({ idx, title }) => {
    return (
      <Paper>
        <ListItem
          button
          component="a"
          href={`https://www.youtube.com/results?search_query=노래방+${title}`}
          target="_blank"
          sx={{ mb: 1, backgroundColor: "beige" }}
          secondaryAction={
            <IconButton
              edge="end"
              onClick={(e) => {
                const deleted = [...songs];
                deleted.splice(idx, 1);
                setSongs(deleted);
                e.preventDefault();
              }}
            >
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar>
              <MusicIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={title}
            secondary={`https://www.youtube.com/results?search_query=노래방+${title}`}
          />
        </ListItem>
      </Paper>
    );
  };

  return (
    <>
      <Box component="form" onSubmit={addSong} sx={{ mt: 2 }}>
        <TextField
          required
          autoFocus
          fullWidth
          id="songInput"
          name="songInput"
          label="노래 제목"
          value={songName}
          onChange={(e) => setSongName(e.currentTarget.value)}
        />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 1 }}>
          노래추가
        </Button>
      </Box>
      <List>
        {songs.map((song, index) => (
          <SongListItem key={index} idx={index} title={song} />
        ))}
      </List>
    </>
  );
};

export default SongList;
