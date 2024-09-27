// src/components/JobForm.tsx
import React, { useState } from 'react';
import { Job } from '../types';
import styles from './JobForm.module.css';

interface JobFormProps {
  addJob: (job: Job) => void;
}

const JobForm: React.FC<JobFormProps> = ({ addJob }) => {
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState<Job['status']>('Applied');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newJob: Job = {
      id: Date.now(),
      company,
      title,
      status,
    };
    addJob(newJob);
    setCompany('');
    setTitle('');
    setStatus('Applied');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label className={styles.label}>Company:</label>
        <input
          className={styles.input}
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Job Title:</label>
        <input
          className={styles.input}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Status:</label>
        <select
          className={styles.select}
          value={status}
          onChange={(e) => setStatus(e.target.value as Job['status'])}
        >
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Rejected">Rejected</option>
          <option value="Offer">Offer</option>
        </select>
      </div>
      <button className={styles.button} type="submit">Add Job</button>
    </form>
  );
};

export default JobForm;
