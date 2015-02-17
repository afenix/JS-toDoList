$(document).ready(function() {
  $('form#tasks').submit(function(event) {
    event.preventDefault();

    var inputTaskName = $('input#task-name').val();
    var newTask = {taskName: inputTaskName};

    $("#task-list").append("<li><span class='task'>" + newTask.taskName + "</span></li>");
    $("input#task-name").val("");


      $(".task").last().click(function() {
        $("#show-tasks").show();
        $(".task-name").text(newTask.taskName + " (Check off if complete)");



        $('#checkbox').click(function() {
         if($(this).is(':checked'))
           {
        $("ul#completed-tasks").append("<li><span class='task'>" + newTask.taskName + "</span></li>");
        $("#completed-tasks").show();
        $("#task-list").remove();
        $("#show-tasks").remove();
        $(".task-name").text(newTask.taskName);
      }
      });
    });
  });
});
