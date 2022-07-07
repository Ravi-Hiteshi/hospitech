export function setLoggedIn(val) {
  localStorage.setItem("token", val);
}

export function setLogout() {
  localStorage.removeItem("token");
}
