CREATE TABLE accounts ( -- Check what happens if data already exists?
    id SERIAL PRIMARY KEY,
    username VARCHAR(30),
    password VARCHAR(30)
);

INSERT INTO accounts (username, password)
    VALUES ('joe.blogs', 'test123'); -- Single quotes necessary