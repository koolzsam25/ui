export const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
};
export const saveToken = userToken => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    // setToken(userToken.token);
};
export const getRole = () => {
    const roleString = sessionStorage.getItem('role');
    const userRole = JSON.parse(roleString);
    return userRole;
};

export const saveRole = userRole => {
    sessionStorage.setItem('role', JSON.stringify(userRole));
    // setRole(userToken.token);
};

