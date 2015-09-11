Package.describe({
  name: 'yelongren:constellation-reload',
  version: '0.1.0',
  summary: 'Reload plugin for Constellation',
  git: 'https://github.com/yelongren/constellation-reload.git',
  documentation: 'README.md',
  debugOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom('1.1');

  api.use('reload', 'client');
  api.use('constellation:console@1.2.1', 'client');

  api.addFiles('reload-client.js', 'client');

  api.imply('constellation:console');
});

Package.onTest(function(api) {
  api.use('tinytest');
});
