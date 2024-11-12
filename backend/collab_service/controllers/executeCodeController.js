const axios = require("axios");

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

const executeCode = async (req, res) => {
  try {
    const { language, code, langVer } = req.body;

    if (!language || !code || !langVer) {
      return res
        .status(400)
        .json({ message: "Language, code and langVer are required" });
    }

    const response = await API.post("/execute", {
      language: language,
      version: langVer[language],
      files: [
        {
          content: code,
        },
      ],
    });

    res.status(200).json(response.data);
    return response.data;
  } catch (error) {
    console.error("Error executing code:", error); // Log the full error object

	const tooManyRequestsErrorMessage = "Requests limited to 1 per 200ms";
	if (error.response && error.response.data && error.response.data.message === tooManyRequestsErrorMessage) {
		res.status(429).json({ message: error.response.data.message }); // 429 is the standard status code for too many requests
	} else {
		res.status(500).json({ message: error.message });
	}
  }
};

module.exports = { executeCode };
