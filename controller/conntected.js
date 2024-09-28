import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const connected = async (req, res) => {
  try {
    const { text } = req.body;

    const message = text;

    // console.log(message);

    const response = await axios.post(`${process.env.PYTHON_APP}`, {
      message,
    });

    let results;

    if (response.status === 200) {
      results = response.data.results;
    }

    res.status(200).json({ message: `Got data back from python`, results });
  } catch (error) {
    console.log(error);
  }
};

export default connected;
