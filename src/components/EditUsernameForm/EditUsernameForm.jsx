import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserName } from '../../slices/UpdateUsername';

const EditUsernameForm = () => {
  const dispatch = useDispatch();
  const currentUserId = useSelector((state) => state.users.currentUserId);
  const currentUser = useSelector((state) => state.users.byId[currentUserId]);
  const [userName, setUserName] = useState(currentUser?.userName || '');
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setError(null);
    try {
      await dispatch(updateUserName({ userId: currentUserId, userName })).unwrap();
      setStatus('success');
    } catch (err) {
      setError(err.message || 'Erreur inconnue');
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nouveau pseudo :
        <input
          type="text"
          value={userName}
          onChange={handleChange}
          disabled={status === 'loading'}
        />
      </label>
      <button type="submit" disabled={status === 'loading'}>
        Modifier
      </button>
      {status === 'success' && <p>Pseudo modifié avec succès!</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default EditUsernameForm;
