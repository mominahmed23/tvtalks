import Axios from "axios";

export async function getTvShows(userData) {
  try {
    const res = await Axios.post("http://localhost:5000/home", userData);
    return res.data.tvshows;
  } catch (err) {
    console.log(err);
    return err;
  }
}
