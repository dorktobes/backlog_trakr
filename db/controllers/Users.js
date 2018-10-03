const connection = require('../index.js');

module.exports.create = user => (
  new Promise((resolve, reject) => {
    const {
      username,
      email,
      password,
      salt,
      psn,
      gamertag,
      switchId,
      twitter,
    } = user;
    const values = [username, email, password, salt, psn, gamertag, switchId, twitter];
    const query = `
    INSERT INTO users (
      username,
      email,
      password,
      salt,
      psn,
      gamertag,
      switch_id,
      twitter
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    connection.query(query, values, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  })
);

module.exports.findById = id => (
  new Promise((resolve, reject) => {
    const query = `
    SELECT (
      username,
      psn,
      gamertag,
      switch_id,
      twitter
      ) FROM users WHERE id = ?`;
    connection.query(query, [id], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  })
);
