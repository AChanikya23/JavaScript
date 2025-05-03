function authenticate(username, password) {
  if (!username || !password) return false;
  return username === "admin" && password === "1234";
}

if (typeof module !== 'undefined') {
  module.exports = { authenticate };
}