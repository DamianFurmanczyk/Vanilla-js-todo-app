// task-start: time now() task-end... + line through zaladuj przykladowe

(function (w) {

  var task_boxes = document.querySelectorAll('.taskbar-inputbox');
  var toggleParent = (t) => {
    t
      .parentNode
      .classList
      .toggle('active');
  };

  task_boxes.forEach(i => {
    var input = i.querySelector('input');
    var btn = i.querySelector('span');
    if (i.id === 'add') {
      input.addEventListener('focus', focusAddInput);
      input.addEventListener('blur', blurAddInput);
      // btn.addEventListener('click', clickAddbtn);
    } else {
      // // input.addEventListener('focus', focusSearchInput);
      // btn.addEventListener('click', clickSearchbtn);
    }
  });

  function focusAddInput() {
    toggleParent(this);
  }
  function blurAddInput() {
    toggleParent(this);
  }

})(window);