import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserName } from '../../slices/UpdateUsernameSlice';
import './EditUsernameForm.scss';

const EditUsernameForm = ({ onSaveSuccess, onCancel }) => {
  const dispatch = useDispatch();

  const currentUserId = useSelector((state) => state.users.currentUserId);
  const currentUser = useSelector((state) => state.users.byId[currentUserId]);

  const [userName, setUserName] = useState(currentUser?.userName || '');
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    setUserName(currentUser?.userName || '');
  }, [currentUser]);

  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => setStatus('idle'), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userName.trim()) {
      setError('Le pseudo ne peut pas être vide');
      return;
    }
    if (userName === currentUser?.userName) {
      // Pas besoin d'envoyer si non modifié
      return;
    }

    setStatus('loading');
    setError(null);

    try {
      await dispatch(updateUserName({ userId: currentUserId, userName })).unwrap();
      setStatus('success');
      if (onSaveSuccess) onSaveSuccess();
    } catch (err) {
      setError(err.message || 'Erreur inconnue');
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username-input">User name :</label>
      <input
        id="username-input"
        type="text"
        value={userName}
        onChange={handleChange}
        disabled={status === 'loading'}
      />
      <button type="submit"  className="edit-button" disabled={status === 'loading'}>
        Save
      </button>
      <button type="button" className="edit-button" onClick={onCancel}>Cancel</button>
      {status === 'success' && <p>Pseudo modifié avec succès !</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default EditUsernameForm;
