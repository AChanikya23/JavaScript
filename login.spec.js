const fs = require('fs');
const path = require('path');
const { authenticate } = require('./login');

describe("Login Authentication", () => {
  let username, password;

  beforeAll((done) => {
    const filePath = path.join(__dirname, 'data.txt');
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) throw err;
      [username, password] = data.trim().split(',');
      done();
    });
  });

  it("should authenticate with correct credentials", () => {
    expect(authenticate(username, password)).toBeTrue();
  });

  it("should fail with wrong username", () => {
    expect(authenticate("wrong", password)).toBeFalse();
  });

  it("should fail with wrong password", () => {
    expect(authenticate(username, "wrong")).toBeFalse();
  });

  it("should fail with both wrong", () => {
    expect(authenticate("wrong", "wrong")).toBeFalse();
  });

  it("should fail with empty credentials", () => {
    expect(authenticate("", "")).toBeFalse();
  });
});