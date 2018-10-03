DROP DATABASE IF EXISTS backlog_trakr;
CREATE DATABASE backlog_trakr;
USE backlog_trakr;

CREATE TABLE users (
  id VARCHAR(20) PRIMARY KEY,
  username VARCHAR(30) UNIQUE NOT NULL,
  email VARCHAR(120) NOT NULL,
  password VARCHAR(32) NOT NULL,
  salt VARCHAR(32) NOT NULL,
  psn VARCHAR(32),
  gamertag VARCHAR(32),
  switch_id VARCHAR(32),
  twitter VARCHAR(32)
);

CREATE TABLE sessions (
  user_id VARCHAR(20) NOT NULL,
  token VARCHAR(32) UNIQUE NOT NULL,
  FOREIGN KEY (user_id)
    REFERENCES users(id)
    ON DELETE CASCADE
);

CREATE TABLE games (
  id VARCHAR(20) PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  gaming_system VARCHAR(32) NOT NULL,
  release_date DATE,
  cover_art VARCHAR(120)
);

CREATE TABLE user_games (
  user_id VARCHAR(20) NOT NULL,
  game_id VARCHAR(20) NOT NULL,
  position INT NOT NULL,
  FOREIGN KEY (user_id)
    REFERENCES users(id)
    ON DELETE CASCADE,
    FOREIGN KEY (game_id)
    REFERENCES games(id)
    ON DELETE CASCADE
);