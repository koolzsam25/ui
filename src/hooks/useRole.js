import { useState } from 'react';

export default function useToken() {
  const getRole = () => {
    const tokenString = sessionStorage.getItem('role');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  };

  const [role, setRole] = useState(getRole());

  const saveRole = userToken => {
    sessionStorage.setItem('role', JSON.stringify(userToken));
    setRole(userToken.token);
  };

  return {
    setRole: saveRole,
    role: role
  }
}