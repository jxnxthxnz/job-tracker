// src/components/JobItem.tsx
import React, { useState } from 'react';
import { Job } from '../types';
import styles from './JobItem.module.css';

interface JobItemProps {
  job: Job;
  updateJob: (updatedJob: Job) => void;
  deleteJob: (id: number) => void;
}

const JobItem: React.FC<JobItemProps> = ({ job, updateJob, deleteJob }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedJob, setEditedJob] = useState(job);

  const handleSave = () => {
    updateJob(editedJob);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className={styles.jobItem}>
        <div className={styles.editForm}>
          <input
            className={styles.editInput}
            type="text"
            value={editedJob.company}
            onChange={(e) => setEditedJob({ ...editedJob, company: e.target.value })}
          />
          <input
            className={styles.editInput}
            type="text"
            value={editedJob.title}
            onChange={(e) => setEditedJob({ ...editedJob, title: e.target.value })}
          />
          <select
            className={styles.editSelect}
            value={editedJob.status}
            onChange={(e) => setEditedJob({ ...editedJob, status: e.target.value as Job['status'] })}
          >
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Rejected">Rejected</option>
            <option value="Offer">Offer</option>
          </select>
          <div className={styles.buttons}>
            <button className={`${styles.button} ${styles.saveButton}`} onClick={handleSave}>Save</button>
            <button className={`${styles.button} ${styles.cancelButton}`} onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className={styles.jobItem}>
      <div className={styles.jobDetails}>
        <span className={styles.company}>{job.company}</span> - <span className={styles.title}>{job.title}</span> - <span className={`${styles.status} ${styles[job.status.toLowerCase()]}`}>{job.status}</span>
      </div>
      <div className={styles.buttons}>
        <button className={`${styles.button} ${styles.editButton}`} onClick={() => setIsEditing(true)}>Edit</button>
        <button className={`${styles.button} ${styles.deleteButton}`} onClick={() => deleteJob(job.id)}>Delete</button>
      </div>
    </div>
  );
};

export default JobItem;
