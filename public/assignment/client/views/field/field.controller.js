(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("FieldController", FieldController);
    function FieldController($rootScope, $routeParams, FieldService){
        var model = this;
        model.fieldType = "TEXT"; //default value
        var userId = $routeParams.userId;
        var formId = $routeParams.formId;

        FieldService.getFieldsForForm(formId).then(function(res){
            model.fields = res;
        });
        model.addField = function(fieldType){
            var field = {
                "fieldType": fieldType
            }

            switch(fieldType){
                case "TEXT":
                case "TEXTAREA":
                    field.label = "New Text Field",
                    field.placeholder = "New Field";
                    break;
                case "DATE":
                    field.label = "New Date Field";
                    break;
                case "SELECT":
                    field.label = "New Dropdown";
                    field.options = [
                        {"label": "Option 1", "value": "OPTION_1"},
                        {"label": "Option 2", "value": "OPTION_2"},
                        {"label": "Option 3", "value": "OPTION_3"}
                    ];
                    break;
                case "CHECKBOX":
                    field.label = "New Checkboxes";
                    field.options = [
                        {"label": "Option A", "value": "OPTION_A"},
                        {"label": "Option B", "value": "OPTION_B"},
                        {"label": "Option C", "value": "OPTION_C"}
                    ];
                    break;
                case "RADIO":
                    field.label = "New Radio Buttons";
                    field.options = [
                        {"label": "Option X", "value": "OPTION_X"},
                        {"label": "Option Y", "value": "OPTION_Y"},
                        {"label": "Option Z", "value": "OPTION_Z"}
                    ];
                    break;
            }
            console.log(field);
            FieldService.createFieldForForm(formId, field).then(function(res){
                model.fields = res;
            });
        }

        model.cloneField = function(field){

            var clone = angular.copy(field);
            delete clone._id;
            FieldService.createFieldForForm(formId, clone).then(function(res){
                model.fields = res;
            });
        }

        model.removeField = function(fieldId){
            FieldService.deleteFieldFromForm(formId, fieldId).then(function(res){
                model.fields = res;
            });
        }
    }
})();