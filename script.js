$(document).ready(function () {
  var taskIdCounter = 0;

  // Toggle the visibility of the "Add Task" form
  $(".add-task").click(function () {
    $(".container").toggle();
  });

  // Toggle the visibility of the "Add Category" form
  $(".add-category").click(function () {
    $(".container_category").toggle();
  });

  $(".add-category").click(function(){
    var circlepurple = $("#circle purple").val();
    var circleblue = $("#circle blue").val();
    var circlepink = $("#circle pink").val();
    var circlegreen = $("#circle green").val();

    circleIdCounter++;

    
  })

  $(".add").click(function () {
    var title = $("#title").val();
    var description = $("#description").val();
    var tag = $("input[name='tag']:checked").next().text();

    taskIdCounter++;

    var taskContainerHTML = `
          <div class="task-container">
            <div class="task-header">${title}</div>
            <p>${description}</p>
            <div class="task-options">
              <div class="options-container">
                <div class="edit-option">Edit</div>
                <div class="delete-option">Delete</div>
              </div>
            </div>
            <div class="task-colors">
              <span class="circle ${tag.toLowerCase()}"></span>${tag}
            </div>
            <div class="task-checkbox">
              <input type="checkbox" id="task${taskIdCounter}Done" />
              <label for="task${taskIdCounter}Done">Done</label>
            </div>
          </div>
        `;

    $(".task-container-wrapper").append(taskContainerHTML);

    $("#title").val("");
    $("#description").val("");
    $("input[name='tag']").prop("checked", false);
  });
});
  
// <div class="category">
//         <span class="circle purple"></span>
//         <span>Work</span>
//       </div>
      // <div class="category">
      //   <span class="circle blue"></span>
      //   <span>Study</span>
      // </div>
      // <div class="category">
      //   <span class="circle pink"></span>
      //   <span>Entertainment</span>
      // </div>
      // <div class="category">
      //   <span class="circle green"></span>
      //   <span>Family</span>
      // </div>

    // <div class="task-container-wrapper">
    //   <div class="task-container">
    //     <div class="task-header">Task 1 Title</div>
    //     <p>
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam
    //       aliquam massa ut varius.
    //     </p>

    //     <div class="task-options">
    //       <div class="options-container">
    //         <div class="edit-option">Edit</div>
    //         <div class="delete-option">Delete</div>
    //       </div>
    //     </div>>

    //     <div class="task-colors">
    //       <span class="circle blue"></span>
    //       <span class="circle pink"></span>
    //       <span class="circle purple"></span>
    //     </div>

    //     <div class="task-checkbox">
    //       <input type="checkbox" id="task1Done" />
    //       <label for="task1Done">Done</label>
    //     </div>
    //   </div>

    //   <div class="task-container">
    //     <div class="task-header">Task 2 Title</div>
    //     <p>
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam
    //       aliquam massa ut varius.
    //     </p>
    //     <div class="task-options"></div>
    //     <div class="task-colors">
    //       <span class="circle blue"></span>
    //       <span class="circle pink"></span>
    //       <span class="circle purple"></span>
    //     </div>
    //     <div class="task-checkbox">
    //       <input type="checkbox" id="task2Done" />
    //       <label for="task2Done">Done</label>
    //     </div>
    //   </div>

    //   <div class="task-container">
    //     <div class="task-header">Task 3 Title</div>
    //     <p>
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam
    //       aliquam massa ut varius.
    //     </p>
    //     <div class="task-options"></div>
    //     <div class="task-colors">
    //       <span class="circle blue"></span>
    //       <span class="circle pink"></span>
    //       <span class="circle purple"></span>
    //     </div>

    //     <div class="task-checkbox">
    //       <input type="checkbox" id="task3Done" />
    //       <label for="task3Done">Done</label>
    //     </div>

    //   <div class="task-container">
    //     <div class="task-header">Task 4 Title</div>
    //     <p>
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam
    //       aliquam massa ut varius.
    //     </p>
    //     <div class="task-options"></div>
    //     <div class="task-colors">
    //       <span class="circle blue"></span>
    //       <span class="circle pink"></span>
    //       <span class="circle purple"></span>
    //     </div>
    //     <div class="task-checkbox">
    //       <input type="checkbox" id="task4Done" />
    //       <label for="task4Done">Done</label>
    //     </div>
    //   </div>
    // </div>