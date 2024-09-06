import express, { json } from 'express';
import { connect } from 'mongoose';
import { config } from 'dotenv';
import TaskRouter from './routes/task.js';
import TaskService from './services/task.js';
import cors from 'cors';

config();

const app = express();

app.use(cors());
app.use(json());

const taskService = new TaskService()
const taskRoutes = new TaskRouter(taskService).getRouter()
app.use('/tasks', taskRoutes);

const startServer = () => {
  try {
    connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  } catch (err) {
    console.error('Could not connect to MongoDB...', err);
    process.exit(1);
  }
};

startServer();
