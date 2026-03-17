import { useState, useEffect } from 'react';
import styles from './AddStudentForm.module.css';

function AddStudentForm({ onAddStudent }) {
  const [formData, setFormData] = useState({
    name: '',
    score: ''
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  // Валідація в реальному часі
  useEffect(() => {
    const newErrors = {};
    
    if (formData.name.trim() === '') {
      newErrors.name = "Ім'я не може бути порожнім";
    }

    const scoreNum = Number(formData.score);
    if (formData.score === '' || isNaN(scoreNum) || scoreNum < 0 || scoreNum > 100) {
      newErrors.score = "Бал має бути числом від 0 до 100";
    }

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      onAddStudent({
        ...formData,
        score: Number(formData.score),
        isActive: true
      });
      // Очищення форми
      setFormData({ name: '', score: '' });
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3>Додати студента</h3>
      
      <div className={styles.field}>
        <label>Ім'я:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Введіть ім'я..."
        />
        {errors.name && <span className={styles.error}>{errors.name}</span>}
      </div>

      <div className={styles.field}>
        <label>Бал:</label>
        <input
          type="number"
          name="score"
          value={formData.score}
          onChange={handleChange}
          min="0"
          max="100"
          placeholder="0-100"
        />
        {errors.score && <span className={styles.error}>{errors.score}</span>}
      </div>

      <button type="submit" disabled={!isFormValid}>
        Додати
      </button>
    </form>
  );
}

export default AddStudentForm;
