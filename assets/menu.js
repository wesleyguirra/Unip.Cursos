(function() {
  /* In animations (to close icon) */

  var beginAC = 8,
    endAC = 32,
    beginB = 8,
    endB = 32;

  function inAC(s) {
    s.draw('80% - 24', '80%', 0.3, {
      delay: 0.1,
      callback: function() {
        inAC2(s)
      }
    });
  }

  function inAC2(s) {
    s.draw('100% - 54.5', '100% - 30.05', 0.6, {
      easing: ease.ease('elastic-out', 1, 0.3)
    });
  }

  function inB(s) {
    s.draw(beginB - 6, endB + 6, 0.1, {
      callback: function() {
        inB2(s)
      }
    });
  }

  function inB2(s) {
    s.draw(beginB + 12, endB - 12, 0.3, {
      easing: ease.ease('bounce-out', 1, 0.3)
    });
  }

  /* Out animations (to burger icon) */

  function outAC(s) {
    s.draw('90% - 24', '90%', 0.1, {
      easing: ease.ease('elastic-in', 1, 0.3),
      callback: function() {
        outAC2(s)
      }
    });
  }

  function outAC2(s) {
    s.draw('20% - 24', '20%', 0.3, {
      callback: function() {
        outAC3(s)
      }
    });
  }

  function outAC3(s) {
    s.draw(beginAC, endAC, 0.7, {
      easing: ease.ease('elastic-out', 1, 0.3)
    });
  }

  function outB(s) {
    s.draw(beginB, endB, 0.7, {
      delay: 0.1,
      easing: ease.ease('elastic-out', 2, 0.4)
    });
  }

  /* Awesome burger default */

  var pathA = document.getElementById('pathA'),
    pathB = document.getElementById('pathB'),
    pathC = document.getElementById('pathC'),
    segmentA = new Segment(pathA, beginAC, endAC),
    segmentB = new Segment(pathB, beginB, endB),
    segmentC = new Segment(pathC, beginAC, endAC),
    trigger = document.getElementById('navbar-toggle'),
    toCloseIcon = true,
    dummy = document.getElementById('dummy'),
    wrapper = document.getElementById('header-menu--icon')

  wrapper.style.visibility = 'visible';

  trigger.onclick = function() {
    if (toCloseIcon) {
      inAC(segmentA);
      inB(segmentB);
      inAC(segmentC);
      $('#header-menu').fadeIn();
      console.log('teste');
    } else {
      outAC(segmentA);
      outB(segmentB);
      outAC(segmentC);
      $('#header-menu').fadeOut();
    }
    toCloseIcon = !toCloseIcon;
  };

})();