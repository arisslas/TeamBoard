
//autenticated methods
export function isAuthenticated() {
  return !!this.getAuthenticated();
}
export function getAuthenticated() {
  return localStorage.getItem("auth");
}
export function setAuthenticated(value) {
  return localStorage.setItem("auth", value);
}



