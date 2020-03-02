FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD iit12345  
ENV MYSQL_DATABASE redis_app
ENV MYSQL_USER users_service  
ENV MYSQL_PASSWORD iit12345

ADD setup.sql /docker-entrypoint-initdb.d