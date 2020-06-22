import './styles.sass';
import Parallax from 'parallax-js';

window.addEventListener('load', () => {
  const yandexMapLink = 'https://yandex.ru/map-widget/v1/?um=constructor%3A5c95f0671f0cf40619e0dc409815bc8df62d19663e3b8061e9bf20317b7d5d33&amp;source=constructor'
  const clouds = [document.getElementById('cloud-1'), document.getElementById('cloud-2'), document.getElementById('cloud-3')];
  clouds.forEach(cloud => {
    new Parallax(cloud);
  })
  const hMapBtn = document.getElementById('hMapBtn')
  const hMapCon = document.getElementById('hMapCon')
  const hMapIframe = document.getElementById('hMapIframe')
  hMapBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (!hMapIframe.src) {
      hMapIframe.src = yandexMapLink
    }
    hMapCon.classList.toggle('h-map__full-size_visible')
  })
  const hMapBtnMob = document.getElementById('hMapBtnMob')
  const hMapConMob = document.getElementById('hMapConMob')
  const hMapIframeMob = document.getElementById('hMapIframeMob')
  hMapBtnMob.addEventListener('click', (e) => {
    e.preventDefault()
    if (!hMapIframeMob.src) {
      hMapIframeMob.src = yandexMapLink
    }
    hMapConMob.classList.toggle('h-map__full-size_visible')
  })
  const mobileBtn = document.getElementById('mobileBtn')
  const mobileMenu = document.getElementById('mobileNav')
  const mobileBg = document.getElementById('mobileContainer')
  
  mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile-nav_hidden')
  })
  mobileBg.addEventListener('click', () => {
    mobileMenu.classList.add('mobile-nav_hidden')
  })
  const popup = document.getElementById('popup')
  const signUpBtn = document.getElementById('sign-up-button')
  const signUpBtn2 = document.getElementById('sign-up-button-2')
  const popupCloseBtn = document.getElementById('popup-close')
  const popupSubmitBtn = document.getElementById('popup-submit')
  const popupSuccess = document.getElementById('popup-success')
  const popupSuccessCloseBtn = document.getElementById('popup-success-close')
  signUpBtn.addEventListener('click', (e) => {
    showPopup(e)
  })
  signUpBtn2.addEventListener('click', (e) => {
    showPopup(e)
  })
  popupCloseBtn.addEventListener('click', (e) => {
    showPopup(e)
  })
  popupSubmitBtn.addEventListener('click', (e) => {
    showPopup(e)
    showPopupSuccess(e)
  })
  popupSuccessCloseBtn.addEventListener('click', (e) => {
    showPopupSuccess(e)
  })
  function showPopup(e) {
    e.preventDefault()
    popup.classList.toggle('popup_hidden')
  }
  let popupTimeout
  function showPopupSuccess(e) {
    if (popupTimeout) {
      clearTimeout(popupTimeout)
    }
    e.preventDefault()
    popupSuccess.classList.toggle('popup-success_hidden')
    popupTimeout = setTimeout(function () {
      popupSuccess.classList.add('popup-success_hidden')
    }, 5000)
  }
})

