(function () {

angular.module('public')
.controller('RegistrationController', RegistrationController);


RegistrationController.$inject = ['MenuService'];
function RegistrationController(MenuService) {
  var reg = this;

  reg.submit = function () {
    reg.completed = true;
  };


  reg.saveData = function(name,lastName,email,phone){
    MenuService.name = name;
    MenuService.lastName=lastName;
    MenuService.email =email;
    MenuService.phone =phone;
  };


reg.dish = function (short_name) {
MenuService.getItems().then(function (response) {
reg.exist = true;
  for (var it in response.data.menu_items ) {
    if (response.data.menu_items[it].short_name == short_name) {
      MenuService.dish = response.data.menu_items[it].name;
      MenuService.dishDescription = response.data.menu_items[it].description;
      MenuService.short_name = short_name;
      reg.exist =false;
    }

  }
  });
}





}

})();
