CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30),
    email VARCHAR(30)
);

INSERT INTO users (name, email) --What if this already exists?
    VALUES ('Joe Blogs', 'joe.blogs@example.com');