"use strict";

// Бургер меню

const burgerBtn = document.querySelector(".header__burger");
const menuList = document.querySelector(".header__list");

burgerBtn.addEventListener("click", () => {
  menuList.classList.toggle("_show");
  burgerBtn.classList.toggle("_active");
  setOverflowBody(menuList);
});

// Скрытие кнопок в шапке

const headerBtns = document.querySelector(".header__btns");
if (window.innerWidth <= 1152) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      headerBtns.style.display = "none";
    } else {
      headerBtns.style.cssText = `display: flex; 
		justify-content: flex-end`;
    }
  });
}

// Модальные окна

const btnsCalc = document.querySelectorAll("._btn-calc");
const btnsSize = document.querySelectorAll("._btn-size");
const modals = document.querySelectorAll(".modal");

btnsSize.forEach((btnSize) => {
  btnSize.addEventListener("click", () => {
    showModal("froze", modals);
  });
});

btnsCalc.forEach((btnCalc) => {
  btnCalc.addEventListener("click", () => {
    showModal("calc", modals);
  });
});

// Кнопка скролла

const scrollTopBtn = document.querySelector(".scroll-top");

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  showBtnOnScroll(scrollTopBtn);
});

// Табы

setTabContent("about", "products");

// Спойлеры

const spoilers = document.querySelectorAll(".spoiler-answer-question");

spoilers.forEach((spoiler, i) => {
  const spoilerHead = spoiler.querySelector(".spoiler-answer-question__header");
  spoilerHead.addEventListener("click", () => {
    showClass("_active", spoiler);
    spoilers.forEach((noActiveSpoiler, j) => {
      const bool = noActiveSpoiler.classList.contains("_active");
      if (i !== j && bool) {
        hideClass("_active", noActiveSpoiler);
      }
    });
  });
});

// Функции

function showClass(addClass, ...elems) {
  if (elems.length > 0) {
    elems.forEach((elem) => {
      if (!elem.classList.contains(addClass)) {
        elem.classList.add(addClass);
      }
    });
  }
}

function hideClass(addClass, ...elems) {
  if (elems.length > 0) {
    elems.forEach((elem) => {
      if (elem.classList.contains(addClass)) {
        elem.classList.remove(addClass);
      }
    });
  }
}

function showModal(modalName, modals) {
  if (modals.length > 0) {
    const modalClassName = `modal-${modalName}`;
    const modalElement = document.querySelector(`.${modalClassName}`);
    const modalBody = document.querySelector(`.modal-${modalName}__body`);

    if (modalElement.classList.contains(modalClassName)) {
      showClass("_show", modalElement, modalBody);
      setOverflowBody(modalElement);
      closeModal(modalElement, modalName);
    }
  }
}

function closeModal(modal, modalName) {
  if (modal.classList.contains("_show")) {
    const modalClose = modal.querySelector(".modal-close");
    const modalBody = modal.querySelector(`.modal-${modalName}__body`);
    modalClose.addEventListener("click", () => {
      hideClass("_show", modal, modalBody);
      setOverflowBody(modal);
    });
    modal.addEventListener("click", (event) => {
      if (event.target.parentElement === modal) {
        hideClass("_show", modal, modalBody);
        setOverflowBody(modal);
      }
    });
  }
}

function showBtnOnScroll(scrollBtn) {
  if (window.scrollY > 300) {
    scrollBtn.classList.add("_show");
  } else {
    scrollBtn.classList.remove("_show");
  }
}

function setOverflowBody(elem) {
  const checkShow = elem.classList.contains("_show");
  const checkActive = elem.classList.contains("_active");
  if (checkShow || checkActive) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style = "";
  }
}

function setTabContent(...sectionName) {
  if (sectionName.length > 0) {
    for (let section of sectionName) {
      const tabs = document.querySelectorAll(`.${section}__tab`);
      const tabContents = document.querySelectorAll(`.${section}__tab-content`);

      tabs.forEach((tab, i) => {
        tab.addEventListener("click", () => {
          tabContents[i].classList.add("_active");
          tab.classList.add("_active");
          tabs.forEach((removeTabActive, j) => {
            if (i !== j) {
              tabContents[j].classList.remove("_active");
              removeTabActive.classList.remove("_active");
            }
          });
        });
      });
    }
  }
}
