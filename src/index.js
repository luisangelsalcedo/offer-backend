import app from "./app/index.js";
import config from "./config/index.js";

app.listen(process.env.PORT || config.port, () => {
  console.log(`Server running on http://localhost:${config.port}`);
});
