import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",

    // [theme.breakpoints.down("xs")]: {
    //   width: "75%",
    // },

    // [theme.breakpoints.down("sm")]: {
    //   width: "90%",
    // },
  },
}));

const VideoItem = ({ video, onVideoSelect }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Paper className={classes.paper} onClick={() => onVideoSelect(video)}>
        <img
          style={{ marginRight: "20px" }}
          alt="thumbnail"
          src={video.snippet.thumbnails.medium.url}
        />
        <Typography variant="subtitle1">
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default VideoItem;
