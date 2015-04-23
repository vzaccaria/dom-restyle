var verb = require('verb');
verb.helper('apidocs', require('helper-apidocs'));

// load data to pass to templates.
verb.data('package.json');

verb.partials('docs/*.md');

verb.task('default', function () {
  verb.src(['docs/readme.md'])
    .pipe(verb.dest('./'));
});