import axios from "axios";
import { rapiApiKey } from "../constants/";

const baseUrl = "https://exercisedb.p.rapidapi.com";

// Func to call the APIs
const apiCall = async (url, params) => {
  try {
    // Set options
    const options = {
      method: "GET",
      url,
      params,
      headers: {
        'x-rapidapi-key': rapiApiKey,
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
      }
    };

    const response = await axios.request(options);
    return response.data;
  } catch (err) {
    console.log("error", err.message);
  }
};

export const fetchExercisesByBodyPart = async (bodyPart) => {
  let data = await apiCall(baseUrl + `/exercises/bodyPart/${bodyPart}`);
  return data;
};
