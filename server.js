import app from './src/app.js';
import { PORT, NODE_ENV } from './src/config/constants.js';

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in ${NODE_ENV} mode`);
  console.log(`API available at http://localhost:${PORT}/api`);
});
