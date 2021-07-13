import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

export default axios.create({
  baseUrl: "https://www.googleapis.com/youtube/v3",
  params: {
    // like typing https://www.googleapis.com/youtube/v3?part=snippet
    // returns videos
    part: "snippet",
    maxResults: 5,
    key: apiKey,
  },
});
