angular.module("myapp",[])
        .controller("phone",["$scope","$http","$filter",function($scope,$http,$filter){
            $http({url:"/ajax"}).then(function(data){
                var data=data.data;
                var arr=[];
                for(var i=0;i<data.length;i++){
                    var arr1=[];
                    for(var j=1;j<data.length;j++){
                        if(data[i].en==data[j].en&&!data[j].flag){
                            data[j].flag=true;
                            arr1.push(data[j]);
                            arr1.en=data[j].en;
                        }
                    }
                    if(arr1.length>0){
                        arr.push(arr1);
                        var arr=$filter("orderBy")(arr,"en");
                    }
                }
                $scope.data=arr;
                $scope.type="";
                $scope.filter=function(en){
                    $scope.type=en;
                }
                $scope.show=function(){
                    $scope.type="";
                }
            })
        }])