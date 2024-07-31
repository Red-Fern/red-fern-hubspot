(function () {
  // Variables
  let emailGlobalUnsub = document.querySelector('input[name="globalunsub"]');
  let stickySections = document.querySelectorAll('.sticky-section');

  // Functions

  // Function for getting outer height of an element
  function outerHeight(element) {
    const height = element.offsetHeight,
          style = window.getComputedStyle(element);

    return ['top', 'bottom']
      .map(side => parseInt(style[`margin-${side}`]))
      .reduce((total, side) => total + side, height);
  }

  // Function for executing code on document ready
  function domReady(callback) {
    if (['interactive', 'complete'].indexOf(document.readyState) >= 0) {
      callback();
    } else {
      document.addEventListener('DOMContentLoaded', callback);
    }
  }

  // Function to disable the other checkbox inputs on the email subscription system page template
  function toggleDisabled() {
    let emailSubItem = document.querySelectorAll('#email-prefs-form .item');

    emailSubItem.forEach(function (item) {
      let emailSubItemInput = item.querySelector('input');

      if (emailGlobalUnsub.checked) {
        item.classList.add('disabled');
        emailSubItemInput.setAttribute('disabled', 'disabled');
        emailSubItemInput.checked = false;
      } else {
        item.classList.remove('disabled');
        emailSubItemInput.removeAttribute('disabled');
      }
    });
  }

  // Function to add 'no-empty' class to form fields with content
  function watchForms(form) {
    const items = form.querySelectorAll('.hs-fieldtype-text input, .hs-fieldtype-textarea textarea');
    const noEmptyClass = 'no-empty';
  
    const checkAndToggleClass = (elem) => {
      elem.closest('.hs-form-field').classList.toggle(noEmptyClass, elem.value.length > 0);
    };
  
    items.forEach((item) => {
      checkAndToggleClass(item);
      item.addEventListener('change', (e) => {
        checkAndToggleClass(e.target);
      });
    });
  }

  // Function to adjust the overlap of sticky sections
  function adjustOverlaps() {
    for (let i = 0; i < stickySections.length; i++) {
      let stickySection = stickySections[i];
      let previousSection = stickySection.previousElementSibling;
      let overlapColumn = stickySection.querySelector('&>div > .dnd-column:last-child');
  
      if (overlapColumn) {
        if (window.innerWidth > 1023 && previousSection) {
          let previousSectionHeight = outerHeight(previousSection);

          overlapColumn.style.marginTop = -previousSectionHeight + 'px';
        } else {
          overlapColumn.style.marginTop = '';
        }
      }
    }
  }

  // Execute JavaScript on document ready
  domReady(function () {
    if (!document.body) {
      return;
    } else {
      // Function dependent on email unsubscribe from all input
      if (emailGlobalUnsub) {
        emailGlobalUnsub.addEventListener('change', toggleDisabled);
      }

      if (stickySections) {
        adjustOverlaps();
      }
    }
  });

  // Execute JavaScript onFormReady
  window.addEventListener('message', event => {
    if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormReady') {
      const forms = document.querySelectorAll('.hs-form');
      forms.forEach(watchForms);
    }
  });

  // Execute JavaScript on window resize
  window.addEventListener('resize', function(event) {
    if (stickySections) {
      adjustOverlaps();
    }
  }, true);
})();
