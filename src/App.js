import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { NavBar, SearchBar, VideoList, VideoDetail } from "./components";
import youtube from "./api/youtube";
import {
  makeStyles,
  createTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import "./index.css";

/*
primary - used to represent primary interface elements for a user. It's the color displayed most frequently across your app's screens and components.
secondary - used to represent secondary interface elements for a user. It provides more ways to accent and distinguish your product. Having it is optional.
error - used to represent interface elements that the user should be made aware of.
warning - used to represent potentially dangerous actions or important messages.
info - used to present information to the user that is neutral and not necessarily important.
success - used to indicate the successful completion of an action that user triggered.
*/
const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      light: "#ff5436",
      main: "#FF0000",
      dark: "#da0000",
      contrastText: "",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#7e7e7e",
      main: "#4a4a4a",
      dark: "#282828",
      // dark: will be calculated from palette.secondary.main,
      // contrastText: "#ffcc00",
    },
    error: {
      main: "#BF211E",
    },
    warning: {
      main: "#E9CE2C",
    },
    info: {
      main: "#1B4079",
    },
    success: {
      main: "#44AF69",
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    [theme.breakpoints.down("xs")]: {
      width: "75%",
    },

    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
}));

const App = () => {
  const classes = useStyles();
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({ id: {}, snippet: {} });

  return (
    <ThemeProvider theme={theme}>
      <Grid className={classes.container} container spacing={10}>
        <Grid item xs={11}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <NavBar>
                <SearchBar
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  onSubmit={handleSubmit}
                />
              </NavBar>
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );

  async function handleSubmit(searchTerm) {
    const {
      data: { items: videos },
    } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 50,
        key: process.env.REACT_APP_API_KEY,
        q: searchTerm,
      },
    });

    setVideos(videos);
    setSelectedVideo(videos[0]);

    // console.log("videos: ", videos);
    console.log("video: ", videos[0]);
    console.log("video title: ", videos[0].snippet.title);
    console.log("channel title: ", videos[0].snippet.channelTitle);
    console.log("video description: ", videos[0].snippet.description);
    console.log("high thumbnails: ", videos[0].snippet.thumbnails.high.url);
  }
};

export default App;
