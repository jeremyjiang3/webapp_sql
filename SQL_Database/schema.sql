create table users(
    email varchar(225) primary key,
 created_at TIMESTAMP DEFAULT NOW());
 
 insert into users (email) VALUES
    ('K3998@yahoo.com' ),('Wonder@gmail.com');
    
    
alter table users
add words varchar(225);


