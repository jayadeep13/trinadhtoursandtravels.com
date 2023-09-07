document.addEventListener("DOMContentLoaded", function () {
    // Your JavaScript code here


const buttons = document.querySelectorAll('.toggle-button');
const contents = document.querySelectorAll('.content');
const content1 = document.querySelectorAll('.content1'); 
const tabContainer = document.querySelector('.tab-container');
const tabButtons = tabContainer.querySelectorAll('.tab-button');
const tabContents = tabContainer.querySelectorAll('.content10');

const tabContainer1 = document.querySelector('.tab-container1');
const tabButtons1 = tabContainer1.querySelectorAll('.tab-button1');
const tabContents1 = tabContainer1.querySelectorAll('.content12');
const tabContainer12 = document.querySelector('.tab-container12');
const tabButtons12 = tabContainer12.querySelectorAll('.tab-button12');
const tabContents12 = tabContainer12.querySelectorAll('.content22');
const tabContainer13 = document.querySelector('.tab-container13');
const tabButtons13 = tabContainer13.querySelectorAll('.tab-button13');
const tabContents13 = tabContainer13.querySelectorAll('.content13');
const tabContainer14 = document.querySelector('.tab-container14');
const tabButtons14 = tabContainer14.querySelectorAll('.tab-button14');
const tabContents14 = tabContainer14.querySelectorAll('.content14');
const tabContainer15 = document.querySelector('.tab-container15');
const tabButtons15 = tabContainer15.querySelectorAll('.tab-button15');
const tabContents15 = tabContainer15.querySelectorAll('.content15');
const tabContainer16 = document.querySelector('.tab-container16');
const tabButtons16 = tabContainer16.querySelectorAll('.tab-button16');
const tabContents16 = tabContainer16.querySelectorAll('.content16');
const tabContainer17 = document.querySelector('.tab-container17');
const tabButtons17 = tabContainer17.querySelectorAll('.tab-button17');
const tabContents17 = tabContainer17.querySelectorAll('.content17');
const tabContainer18 = document.querySelector('.tab-container18');
const tabButtons18 = tabContainer18.querySelectorAll('.tab-button18');
const tabContents18 = tabContainer18.querySelectorAll('.content18');


  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const tab = button.dataset.tab;
  
      buttons.forEach((btn) => {
        btn.classList.remove('active');
      });
  
      contents.forEach((content) => {
        if (content.dataset.tab === tab) {
          content.style.display = 'block';
        } else {
          content.style.display = 'none';
        }
      });
      content1.forEach((content1) => {
        if (content1.dataset.tab === tab) {
          content1.style.display = 'block';
        } else {
          content1.style.display = 'none';
        }
      });
  
      button.classList.add('active');
    });
  });
  
  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const tab = button.dataset.tab;
  
      tabButtons.forEach((btn) => {
        btn.classList.remove('active');
      });
  
      tabContents.forEach((content) => {
        if (content.dataset.tab === tab) {
          content.style.display = 'block';
        } else {
          content.style.display = 'none';
        }
      });
  
      button.classList.add('active');
    });
  });

  tabButtons1.forEach((button) => {
    button.addEventListener('click', () => {
      const tab = button.dataset.tab;
  
      tabButtons1.forEach((btn) => {
        btn.classList.remove('active');
      });
  
      tabContents1.forEach((content) => {
        if (content.dataset.tab === tab) {
          content.style.display = 'block';
        } else {
          content.style.display = 'none';
        }
      });
  
      button.classList.add('active');
    });
  });
  
 

tabButtons12.forEach((button) => {
  button.addEventListener('click', () => {
    const tab = button.dataset.tab;

    tabButtons12.forEach((btn) => {
      btn.classList.remove('active');
    });

    tabContents12.forEach((content) => {
      if (content.dataset.tab === tab) {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    });

    button.classList.add('active');
  });
});


tabButtons13.forEach((button) => {
  button.addEventListener('click', () => {
    const tab = button.dataset.tab;

    tabButtons13.forEach((btn) => {
      btn.classList.remove('active');
    });

    tabContents13.forEach((content) => {
      if (content.dataset.tab === tab) {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    });

    button.classList.add('active');
  });
});



tabButtons14.forEach((button) => {
  button.addEventListener('click', () => {
    const tab = button.dataset.tab;

    tabButtons14.forEach((btn) => {
      btn.classList.remove('active');
    });

    tabContents14.forEach((content) => {
      if (content.dataset.tab === tab) {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    });

    button.classList.add('active');
  });
});


tabButtons15.forEach((button) => {
  button.addEventListener('click', () => {
    const tab = button.dataset.tab;

    tabButtons15.forEach((btn) => {
      btn.classList.remove('active');
    });

    tabContents15.forEach((content) => {
      if (content.dataset.tab === tab) {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    });

    button.classList.add('active');
  });
});



tabButtons16.forEach((button) => {
  button.addEventListener('click', () => {
    const tab = button.dataset.tab;

    tabButtons16.forEach((btn) => {
      btn.classList.remove('active');
    });

    tabContents16.forEach((content) => {
      if (content.dataset.tab === tab) {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    });

    button.classList.add('active');
  });
});



tabButtons17.forEach((button) => {
  button.addEventListener('click', () => {
    const tab = button.dataset.tab;

    tabButtons17.forEach((btn) => {
      btn.classList.remove('active');
    });

    tabContents17.forEach((content) => {
      if (content.dataset.tab === tab) {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    });

    button.classList.add('active');
  });
});



tabButtons18.forEach((button) => {
  button.addEventListener('click', () => {
    const tab = button.dataset.tab;

    tabButtons18.forEach((btn) => {
      btn.classList.remove('active');
    });

    tabContents18.forEach((content) => {
      if (content.dataset.tab === tab) {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    });

    button.classList.add('active');
  });
});

function initializeTabs(tabContainer) {
  const tabButtons = tabContainer.querySelectorAll('.tab-button');
  const tabContents = tabContainer.querySelectorAll('.content');

  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const tab = button.dataset.tab;

      tabButtons.forEach((btn) => {
        btn.classList.remove('active');
      });

      tabContents.forEach((content) => {
        if (content.dataset.tab === tab) {
          content.style.display = 'block';
        } else {
          content.style.display = 'none';
        }
      });

      button.classList.add('active');
    });
  });
}

// Initialize tab containers
const tabContainers = document.querySelectorAll('.tab-container');

tabContainers.forEach((tabContainer) => {
  initializeTabs(tabContainer);
});

});

