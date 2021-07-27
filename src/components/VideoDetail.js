import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Loader from "../assets/images/loading3.gif";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "70%",
  },
  padding: {
    padding: "15px",
  },
}));

const VideoDetail = ({
  video: {
    id: { videoId },
    snippet: { title, channelTitle, description },
  },
}) => {
  const classes = useStyles();

  if (!videoId)
    return (
      <div
        style={{
          width: "100vw",
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img alt="loading..." width="300px" src={Loader} />
      </div>
    );

  const videoSrc = `https://www.youtube.com/embed/${videoId}`;

  return (
    <React.Fragment>
      <div style={{ height: "100vh" }}>
        <Paper elevation={6} className={classes.container}>
          <iframe
            frameBorder="0"
            height="100%"
            width="100%"
            title="Video Player"
            src={videoSrc}
          />
        </Paper>
      </div>
      <div
        style={{
          paddingTop: "0px",
          marginTop: "0px",
          border: "5px solid tomato",
        }}
      >
        <Paper elevation={6} className={classes.padding}>
          <Typography variant="h4">
            {title} - {channelTitle}
          </Typography>
          <Typography variant="subtitle1">{channelTitle}</Typography>
          <Typography variant="subtitle2">{description}</Typography>
        </Paper>
      </div>
    </React.Fragment>
  );
};

export default VideoDetail;
