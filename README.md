# send-uuid
Generate and send uuid to remote server with post request. <br>
//to run

1. docker-compose up -d

//to access redis-cli

1. docker exec -it 'redis-container-id' redis cli

//access mysql server 
// first get the IPAddress
1. docker inspect 'db-service-container-id' 
// then get into the mysql cli
2. mysql -uroot -pPASSWORD -h IPAdress -P 3306
