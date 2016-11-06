'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip:       process.env.OPENSHIFT_NODEJS_IP ||
            process.env.IP ||
            undefined,

  // Server port
  port:     process.env.OPENSHIFT_NODEJS_PORT ||
            process.env.PORT ||
            8080,

  // MongoDB connection options
  mongo: {
    uri:    'mongodb://dbuser:dbpassword@ds017514.mlab.com:17514/heroku_94r929qx' ||
            'mongodb://localhost/shopnx'
  },

  seedDB: true
};

 /* process.env.OPENSHIFT_MONGODB_DB_URL || // Added app*/