-- Exercise 1
# select created_at as earlist_date 
# from users
# order by created_at 
# limit 1;

select Date_format(MIN(created_at),'%M %D %Y') as earlist_date
from users;

-- Exercise 2
select email, created_at 
from users
where created_at in (select min(created_at) from users);

-- Exercise 3
# select Date_format(created_at,'%M') as month,count(*) as count
# from users
# group by month 
# order by count desc;

SELECT Monthname(created_at) AS month, 
       Count(*)              AS count 
FROM   users 
GROUP  BY month 
ORDER  BY count DESC; 

-- Exercise 4
select count(*) as yahoo_users 
from users 
where email like '%@yahoo.com'

-- Exercise 5 **
select case 
      when email like '%@yahoo.com' then 'yahoo'
      when email like '%@gmail.com' then 'gmail'
      when email like '%@hotmail.com' then 'hotmail'
      Else 'other'
     end as provider,
     count(*) as total_users
from users
group by provider
order by total_users desc; 
      


