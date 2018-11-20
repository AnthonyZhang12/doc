

- start

```shell
 sudo /etc/init.d/postgresql start
```

- import

```shell
alter user postgres with password '***';

sudo su - postgres

createdb mydb

psql -h localhost -U postgres -W -d mydb -f /home/demo.sql
```

- 远程连接

```shell
# what IP address(es) to listen on;
# listen_addresses = '*'
sudo vim /etc/postgresql/9.5/main/postgresql.conf

# 添加客户端 ip 
# IPv4 local connections:
sudo vim /etc/postgresql/9.5/main/pg_hba.conf


```
