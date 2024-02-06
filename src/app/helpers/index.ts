const login = (): void => localStorage.setItem('key', '12345');

const logout = (): void => {
    localStorage.removeItem('key')
    window.location.reload();
};

const isLoggedIn = (): boolean => !!localStorage.getItem('key');

const redirectToHome = (): boolean => {
    window.location.href = '/home'
    return false;
}

export {
    login,
    logout,
    isLoggedIn,
    redirectToHome,
}