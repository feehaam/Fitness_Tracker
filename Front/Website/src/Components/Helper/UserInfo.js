export function getUser(){
    const user = {
        "username" : window.localStorage.getItem('FitUserLoginUsername'),
        "password" : window.localStorage.getItem('FitUserLoginPassword')
    }
    return user;
}

export function setUser(username, password){
    window.localStorage.setItem('FitUserLoginUsername', username);
    window.localStorage.setItem('FitUserLoginPassword', password);
}