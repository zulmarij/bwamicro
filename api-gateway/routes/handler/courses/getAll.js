const apiAdapater = require("../../apiAdapter");
const { URL_SERVICE_COURSE, HOSTNAME } = process.env;

const api = apiAdapater(URL_SERVICE_COURSE);

module.exports = async (req, res) => {
  try {
    const courses = await api.get("/api/courses", {
      params: {
        ...req.query,
        status: "published",
      },
    });

    const coursesData = courses.data;
    const firstPage = coursesData.data.first_page_url.split("?").pop();
    const lastPage = coursesData.data.last_page_url.split("?").pop();

    coursesData.data.first_page_url = `${HOSTNAME}/courses?${firstPage}`;
    coursesData.data.last_page_url = `${HOSTNAME}/courses?${lastPage}`;
    coursesData.data.path = `${HOSTNAME}/courses`;

    if (coursesData.data.next_page_url) {
      const nextPage = coursesData.data.next_page_url.split("?").pop();
      coursesData.data.next_page_url = `${HOSTNAME}/courses?${nextPage}`
    }

    if (coursesData.data.prev_page_url) {
      const prevPage = coursesData.data.prev_page_url.split("?").pop();
      coursesData.data.prev_page_url = `${HOSTNAME}/courses?${prevPage}`
    }

    if (coursesData.data.links.length > 0) {
      coursesData.data.links.map((link) => {
        if (link.url) {
          const linkUrl = link.url.split("?").pop();
          link.url = `${HOSTNAME}/courses?${linkUrl}`
        }
        return link;
      });
    }

    return res.json(coursesData);
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
