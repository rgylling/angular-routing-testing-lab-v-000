describe('Routes', function (){
  var $state

  beforeEach(module('app'));

  beforeEach(inject(function ($injector) {
    $state = $injector.get('$state');
  }));

  describe('Settings', function (){
    var state;

    it('should have the right URL', function (){
      state = $state.get('settings');
      expect(state.url).toEqual('/settings');
    });

    it('should have the right template', function (){
      expect(state.templateUrl).toEqual('views/settings.html');
    });
  });

  describe('UserSettings', function (){
    var state;

    it('should have the right URL', function (){
      state = $state.get('settings.user');
      expect(state.url).toEqual('/user');
    });

    it('should have the right template', function (){
      expect(state.templateUrl).toEqual('views/settings/user.html');
    });
  });

  describe('NotificationSettings', function (){
    var state;

    it('should have the right URL', function (){
      state = $state.get('settings.notifications');
      expect(state.url).toEqual('/notifications');
    });

    it('should have the right template', function (){
      expect(state.templateUrl).toEqual('views/settings/notifications.html');
    });
  });

});
