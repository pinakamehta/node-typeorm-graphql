module.exports = {
   "type": "mysql",
   "host": "192.168.1.222",
   "port": 3306,
   "username": "developers",
   "password": "123456",
   "database": "node-typeorm-graphql",
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/entity/**/*.ts"
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}
