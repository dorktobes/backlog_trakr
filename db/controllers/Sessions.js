const connection = require('../index.js');

module.exports.create = ({ id }, token) => (
  new Promise((resolve, reject) => {
    const query = 'INSERT INTO sessions (user_id, token) VALUES (?, ?)';
    connection.query(query, [id, token], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  })
);

module.exports.destroy = token => (
  new Promise((resolve, reject) => {
    const query = 'DELETE FROM sessions WHERE token = ?';
    connection.query(query, [token], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  })
);

module.exports.find = token => (
  new Promise((resolve, reject) => {
    const query = 'SELECT user_id FROM sessions WHERE token = ?';
    connection.query(query, [token], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  })
);
