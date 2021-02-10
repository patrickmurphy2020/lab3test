"use strict";
exports.__esModule = true;
var Todo = /** @class */ (function () {
    function Todo() {
        this.tasks = [];
    }
    Todo.prototype.addTask = function (task) {
        var count = this.tasks.push(task);
        console.log("Item " + task + " added To Array Tasks");
        return count;
    };
    Todo.prototype.listAllItems = function () {
        this.tasks.forEach(function (task) {
            console.log(task);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var index = tasks.indexOf(task);
        if (index > -1) {
            this.tasks.splice(index, 1);
            console.log("Item " + task + " removed from array tasks");
        }
        return tasks.length;
    };
    return Todo;
}());
var myTodos = new Todo();
myTodos.addTask("Work");
myTodos.addTask("Sleep");
myTodos.listAllItems();
myTodos.deleteTask("Sleep");
