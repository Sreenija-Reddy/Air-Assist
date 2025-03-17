-- Create the Database
CREATE DATABASE AirAssistDB;

-- Use the Database
USE AirAssistDB;

-- Create the `users` Table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Create the `help_requests` Table
CREATE TABLE help_requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    type VARCHAR(100),
    location VARCHAR(255),
    time DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Insert Sample Data
INSERT INTO users (email, password) VALUES ('test@example.com', 'password123');
INSERT INTO help_requests (user_id, type, location, time)
VALUES (1, 'Medical', 'New York', NOW());

-- Query Data
SELECT * FROM users;
SELECT * FROM help_requests;
SELECT help_requests.*, users.email
FROM help_requests
JOIN users ON help_requests.user_id = users.id;

-- Update Data
UPDATE users SET email = 'new@example.com' WHERE id = 1;
UPDATE help_requests SET location = 'Los Angeles' WHERE id = 1;

-- Delete Data
DELETE FROM users WHERE id = 1;
DELETE FROM help_requests WHERE id = 1;

-- Drop Tables (Use with Caution)
DROP TABLE help_requests;
DROP TABLE users;

-- Drop the Database (Use with Caution)
DROP DATABASE AirAssistDB;