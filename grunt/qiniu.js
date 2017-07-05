module.exports = {
  options: {
    accessKey: '<%= secrets.qiniu.key %>',
    secretKey: '<%= secrets.qiniu.secret %>',
    bucket: '<%= secrets.qiniu.bucketname %>',
    // domain: config.domain,
    resources: [{
      cwd: 'dist/img',
      pattern: '**/*.*'
    }],
    ignoreDup: false,
    keyGen: function(cwd, file) {
      return 'mail/' + file;
    }
  },
  your_target: {

  }
};
