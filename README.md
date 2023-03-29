# DOCUMENTARY

### SCHEMA

```sql
create schema convin;
```

### TABLE - USERS

```sql
CREATE TABLE users(
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  user_password TEXT NOT NULL,
  date_created VARCHAR(255) NOT NULL
);
```

### TABLE - BUCKETS

```sql
CREATE TABLE buckets(
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
  website_user BIGINT NOT NULL,
  bucket_name VARCHAR(255) NOT NULL,
  FOREIGN KEY (website_user) REFERENCES users(id)
);
```

### TABLE - CARDS

```sql
CREATE TABLE cards(
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
  website_user BIGINT NOT NULL,
  bucket_name BIGINT NOT NULL,
  card_name VARCHAR(255) NOT NULL,
  FOREIGN KEY (website_user) REFERENCES users(id),
  FOREIGN KEY (bucket_name) REFERENCES buckets(id)
);
```
