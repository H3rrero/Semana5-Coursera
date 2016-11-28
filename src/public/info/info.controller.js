(function () {

angular.module('public')
.controller('InfoController', InfoController);


InfoController.$inject = ['MenuService','ApiPath'];
function InfoController(MenuService,ApiPath) {
  var inf = this;
  inf.basePath = ApiPath;
  inf.registrado = false;

  if(MenuService.name !="")
  {
    inf.registrado = true;
  }


  inf.name= MenuService.name;
  inf.lastName=MenuService.lastName;
  inf.email= MenuService.email;
  inf.phone = MenuService.phone;
  inf.dish =  MenuService.dish;
  inf.dishDescription= MenuService.dishDescription;
  inf.short_name=MenuService.short_name;



}

})();
