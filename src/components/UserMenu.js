import React, { useCallback } from 'react'; //!
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../redux/auth';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const onLogout = useCallback(() => {
    dispatch(authOperations.logOut());
  }, [dispatch]);
  return (
    <div style={styles.container}>
      <span style={styles.name}>Welcome, {name}</span>
      <button className="outBtn" type="button" onClick={onLogout}>
        <span class="material-icons outlined">logout</span>
      </button>
    </div>
  );
}
