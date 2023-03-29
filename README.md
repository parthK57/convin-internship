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

