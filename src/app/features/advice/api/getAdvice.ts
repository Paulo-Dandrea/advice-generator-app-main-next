import axios from "axios";

export const getAdvice = async () => {
  try {
    const { data } = await axios.get("https://api.adviceslip.com/advice");
    return data.slip;
  } catch (error) {
    console.log(error);
  }
};
