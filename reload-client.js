// Hook in to constellation UI

var Constellation = Package["constellation:console"].API;

Constellation.addTab({
  name: 'Reload',
  noOpen: true,
  onClick: 'reload'
});

Constellation.registerCallbacks({
  reload: function() {
    Reload._reload();
  }
});
