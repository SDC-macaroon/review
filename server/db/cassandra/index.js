const cassandra = require('cassandra-driver');
/*
  user: 'cassandra'
  installed with brew
*/
const client = new cassandra.Client({
  contactPoints: ['h1', 'h2'],
  localDataCenter: 'datacenter1',
  keyspace: 'ks1',
});

client.connect()
  .then(() => console.log('Connected!'));
