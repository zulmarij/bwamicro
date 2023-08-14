const apiAdapater = require("../../apiAdapter");
const { URL_SERVICE_COURSE, HOSTNAME } = process.env;

const api = apiAdapater(URL_SERVICE_COURSE);

module.exports = async (req, res) => {
  try {
    const lessons = await api.get("/api/lessons", {
      params: {
        ...req.query,
      },
    });

    return res.json(lessons.data);
  } catch (error) {
    if (error.code === "ECONNREFUSED") {
      return res.status(500).json({
        status: "error",
        message: "service unavailable",
      });
    }

    const { status, data } = error.response;
    return res.status(status).json(data);
  }
};
