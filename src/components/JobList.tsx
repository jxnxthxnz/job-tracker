// src/components/JobList.tsx
import React from 'react';
import { Job } from '../types';
import JobItem from './JobItem';

interface JobListProps {
  jobs: Job[];
  updateJob: (job: Job) => void;
  deleteJob: (id: number) => void;
}

const JobList: React.FC<JobListProps> = ({ jobs, updateJob, deleteJob }) => {
  return (
    <div>
      {jobs.map((job) => (
        <JobItem key={job.id} job={job} updateJob={updateJob} deleteJob={deleteJob} />
      ))}
    </div>
  );
};

export default JobList;
