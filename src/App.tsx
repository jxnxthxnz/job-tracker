// src/App.tsx
import React, { useState } from 'react';
import { Job } from './types';
import JobForm from './components/JobForm';
import JobList from './components/JobList';
import styles from './App.module.css';

const App: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  const addJob = (job: Job) => {
    setJobs([...jobs, job]);
  };

  const updateJob = (updatedJob: Job) => {
    setJobs(jobs.map((job) => (job.id === updatedJob.id ? updatedJob : job)));
  };

  const deleteJob = (id: number) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  return (
    <div>
      <h1>Job Tracker</h1>
      <JobForm addJob={addJob} />
      <JobList jobs={jobs} updateJob={updateJob} deleteJob={deleteJob} />
    </div>
  );
};

export default App;
