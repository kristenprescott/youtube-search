import React from "react";
import { Grid } from "@material-ui/core";

import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const listOfVideos = videos.map((video) => (
    <VideoItem
      onVideoSelect={onVideoSelect}
      key={video.id.videoId}
      video={video}
    />
  ));

  return (
    <Grid container spacing={10}>
      {listOfVideos}
      {/* <div>LIST OF VIDEOS</div>
      <span>
        {videos.map((video, idx) => (
          <div key={idx}>
            <iframe
              frameBorder="0"
              height="100%"
              width="100%"
              title="Video Player"
              // src={video.id.videoId}
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
            />
            <h3>{video.snippet.title}</h3>
            <h5>{video.snippet.channelTitle}</h5>
            <p>{video.snippet.description}</p>
            <img src={video.snippet.thumbnails.high.url} width="480px" />
          </div>
        ))}
      </span> */}
    </Grid>
  );
};

export default VideoList;

/*
    // console.log("videos: ", videos);
    console.log("video: ", videos[0]);
    console.log("video title: ", videos[0].snippet.title);
    console.log("channel title: ", videos[0].snippet.channelTitle);
    console.log("video description: ", videos[0].snippet.description);
    console.log("high thumbnails: ", videos[0].snippet.thumbnails.high.url);
*/
