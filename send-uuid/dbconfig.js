let config = {
  host     : process.env.DATABASE_HOST || '127.0.0.1',
  user     : 'root',
  password : 'iit12345',
  database: 'redis_app'
}
module.exports = config;
