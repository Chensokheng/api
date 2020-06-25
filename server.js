require('./utils/db');
const app = require('./express');
const config = require('./config');

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
