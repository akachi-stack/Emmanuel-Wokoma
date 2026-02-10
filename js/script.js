var thanx = "Unlock your brand’s full potential with a website that doesn’t just look good—it converts. I build fast, modern, user-focused websites designed to attract attention, drive engagement, and turn visitors into paying customers. With expert digital marketing strategies, SEO, and high-performance design, I help businesses grow online and stay ahead of the competition. Whether you need a stunning new site, a marketing revamp, or a complete digital strategy, I deliver results that speak for themselves. Let’s build something powerful for your business. Call --- 09169019241 ";

alert(thanx);


let header = document.querySelector('#sticky');

window.addEventListener('scroll', function() {
  if (window.scrollY > 80) {
    if (header) header.style.width = '100%';
    if (header) header.style.background = 'var(--bg-clr-one)';
  } else {
    if (header) header.style.width = '100%';
    if (header) header.style.background = 'var(--bg-clr-one)';
  }
});

// select the hamburger element in your HTML ( the menu icon for mobile view)
const hamburgerContainer = document.querySelector('.hamburger');

// select the dropdown box element ( the mobile menu that appears when the hamburger is clicked)
const dropdownBox = document.getElementById('dropdownBox');

// select the exit icon element ( used to close the mobile menu)
const exitIcon = document.getElementById('exitIcon');

// select all anchor tags inside list items in the mobile navigation container
const allAnchorTags = document.querySelectorAll('#navcon-mobile li a');


// check if the hamburger container element exists in the DOM
if (hamburgerContainer) {
  // add click event listener to the hamburger container
  hamburgerContainer.addEventListener('click', function () {
    // show the dropdown box ( mobile menu) and apply animation
    if (dropdownBox) {
      dropdownBox.style.display = 'flex';
      dropdownBox.classList.add('animate__rollIn');
    }
  });
}

// check if the exit icon exists in the DOM
if (exitIcon) {
  // add click event listener to the exit icon
  exitIcon.addEventListener('click', function () {
    // hide the dropdown box ( close the mobile menu) and remove animation
    if (dropdownBox) {
      dropdownBox.style.display = 'none';
      dropdownBox.classList.remove('animate__rollIn');
    }
  });
}


// check if there are anchor tags inside the mobile navigation container 
if (allAnchorTags) {
  // loop through all anchor tags and add event listener to each one
  allAnchorTags.forEach(allAnchorTag => {
    allAnchorTag.addEventListener('click', function () {
      // hide the dropdown box when an anchor tag is clicked ( close the menu)
      if (dropdownBox) dropdownBox.style.display = 'none';
    });
  });
}

// porfolio script

var $galleryContainer = $('.gallery').isotope({
  itemSelector: '.item',
  layoutMode: 'fitRows'
});

$('.button').on('click', function () {
  $('.button').removeClass('active');
  $(this).addClass('active');

  var value = $(this).attr('data-filter');
  $galleryContainer.isotope({
    filter: value
  });
});

// magnific popup
$('.gallery').magnificPopup({
  delegate: '.overlay a',
  type: 'image',
  gallery: {
    enabled: true
  }
});

// Cokar Gist carousel autoplay + dots
(function () {
  const container = document.querySelector('.gist-window');
  const track = document.querySelector('.gist-track');
  const cards = document.querySelectorAll('.gist-card');
  const dotsWrap = document.querySelector('.gist-dots');
  if (!container || !track || cards.length === 0 || !dotsWrap) return;

  function getCardsPerView() {
    const w = window.innerWidth;
    if (w <= 480) return 1;
    if (w <= 768) return 2;
    if (w <= 1100) return 3;
    return 4;
  }

  let cardsPerView = getCardsPerView();
  let pages = Math.max(1, Math.ceil(cards.length / cardsPerView));
  let pageIndex = 0;
  let interval = null;

  function renderDots() {
    dotsWrap.innerHTML = '';
    for (let i = 0; i < pages; i++) {
      const b = document.createElement('button');
      b.dataset.index = i;
      if (i === 0) b.classList.add('active');
      b.addEventListener('click', () => { goToPage(i); resetAutoplay(); });
      dotsWrap.appendChild(b);
    }
  }

  function goToPage(i) {
    pageIndex = i % pages;
    const scrollLeft = pageIndex * container.clientWidth;
    container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    updateDots();
  }

  function updateDots() {
    const dots = dotsWrap.querySelectorAll('button');
    dots.forEach(d => d.classList.remove('active'));
    const active = dotsWrap.querySelectorAll('button')[pageIndex];
    if (active) active.classList.add('active');
  }

  function nextPage() {
    pageIndex = (pageIndex + 1) % pages;
    goToPage(pageIndex);
  }

  function resetAutoplay() {
    clearInterval(interval);
    interval = setInterval(nextPage, 3500);
  }

  function recalc() {
    cardsPerView = getCardsPerView();
    var thanx = "Unlock your brand’s full potential with a website that doesn’t just look good—it converts. I build fast, modern, user-focused websites designed to attract attention, drive engagement, and turn visitors into paying customers. With expert digital marketing strategies, SEO, and high-performance design, I help businesses grow online and stay ahead of the competition. Whether you need a stunning new site, a marketing revamp, or a complete digital strategy, I deliver results that speak for themselves. Let’s build something powerful for your business. Call --- 09169019241 ";

    alert(thanx);

    let header = document.querySelector('#sticky');

    window.addEventListener('scroll', function() {
      if (window.scrollY > 80) {
        if (header) header.style.width = '100%';
        if (header) header.style.background = 'var(--bg-clr-one)';
      } else {
        if (header) header.style.width = '100%';
        if (header) header.style.background = 'var(--bg-clr-one)';
      }
    });

    // select the hamburger element in your HTML ( the menu icon for mobile view)
    const hamburgerContainer = document.querySelector('.hamburger');

    // select the dropdown box element ( the mobile menu that appears when the hamburger is clicked)
    const dropdownBox = document.getElementById('dropdownBox');

    // select the exit icon element ( used to close the mobile menu)
    const exitIcon = document.getElementById('exitIcon');

    // select all anchor tags inside list items in the mobile navigation container
    const allAnchorTags = document.querySelectorAll('#navcon-mobile li a');


    // check if the hamburger container element exists in the DOM
    if (hamburgerContainer) {
      // add click event listener to the hamburger container
      hamburgerContainer.addEventListener('click', function () {
        // show the dropdown box ( mobile menu) and apply animation
        if (dropdownBox) {
          dropdownBox.style.display = 'flex';
          dropdownBox.classList.add('animate__rollIn');
        }
      });
    }

    // check if the exit icon exists in the DOM
    if (exitIcon) {
      // add click event listener to the exit icon
      exitIcon.addEventListener('click', function () {
        // hide the dropdown box ( close the mobile menu) and remove animation
        if (dropdownBox) {
          dropdownBox.style.display = 'none';
          dropdownBox.classList.remove('animate__rollIn');
        }
      });
    }


    // check if there are anchor tags inside the mobile navigation container 
    if (allAnchorTags) {
      // loop through all anchor tags and add event listener to each one
      allAnchorTags.forEach(allAnchorTag => {
        allAnchorTag.addEventListener('click', function () {
          // hide the dropdown box when an anchor tag is clicked ( close the menu)
          if (dropdownBox) dropdownBox.style.display = 'none';
        });
      });
    }

    // porfolio script

    var $galleryContainer = $('.gallery').isotope({
      itemSelector: '.item',
      layoutMode: 'fitRows'
    });

    $('.button').on('click', function () {
      $('.button').removeClass('active');
      $(this).addClass('active');

      var value = $(this).attr('data-filter');
      $galleryContainer.isotope({
        filter: value
      });
    });

    // magnific popup
    $('.gallery').magnificPopup({
      delegate: '.overlay a',
      type: 'image',
      gallery: {
        enabled: true
      }
    });

    // Cokar Gist carousel autoplay + dots
    (function () {
      const container = document.querySelector('.gist-window');
      const track = document.querySelector('.gist-track');
      const cards = document.querySelectorAll('.gist-card');
      const dotsWrap = document.querySelector('.gist-dots');
      if (!container || !track || cards.length === 0 || !dotsWrap) return;

      function getCardsPerView() {
        const w = window.innerWidth;
        if (w <= 480) return 1;
        if (w <= 768) return 2;
        if (w <= 1100) return 3;
        return 4;
      }

      let cardsPerView = getCardsPerView();
      let pages = Math.max(1, Math.ceil(cards.length / cardsPerView));
      let pageIndex = 0;
      let interval = null;

      function renderDots() {
        dotsWrap.innerHTML = '';
        for (let i = 0; i < pages; i++) {
          const b = document.createElement('button');
          b.dataset.index = i;
          if (i === 0) b.classList.add('active');
          b.addEventListener('click', () => { goToPage(i); resetAutoplay(); });
          dotsWrap.appendChild(b);
        }
      }

      function goToPage(i) {
        pageIndex = i % pages;
        const scrollLeft = pageIndex * container.clientWidth;
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
        updateDots();
      }

      function updateDots() {
        const dots = dotsWrap.querySelectorAll('button');
        dots.forEach(d => d.classList.remove('active'));
        const active = dotsWrap.querySelectorAll('button')[pageIndex];
        if (active) active.classList.add('active');
      }

      function nextPage() {
        pageIndex = (pageIndex + 1) % pages;
        goToPage(pageIndex);
      }

      function resetAutoplay() {
        clearInterval(interval);
        interval = setInterval(nextPage, 3500);
      }

      function recalc() {
        cardsPerView = getCardsPerView();
        var thanx = "Unlock your brand’s full potential with a website that doesn’t just look good—it converts. I build fast, modern, user-focused websites designed to attract attention, drive engagement, and turn visitors into paying customers. With expert digital marketing strategies, SEO, and high-performance design, I help businesses grow online and stay ahead of the competition. Whether you need a stunning new site, a marketing revamp, or a complete digital strategy, I deliver results that speak for themselves. Let’s build something powerful for your business. Call --- 09169019241 ";

        alert(thanx);

        let header = document.querySelector('#sticky');

        window.addEventListener('scroll', function() {
          if (window.scrollY > 80) {
            if (header) header.style.width = '100%';
            if (header) header.style.background = 'var(--bg-clr-one)';
          } else {
            if (header) header.style.width = '100%';
            if (header) header.style.background = 'var(--bg-clr-one)';
          }
        });

        // select the hamburger element in your HTML ( the menu icon for mobile view)
        const hamburgerContainer = document.querySelector('.hamburger');

        // select the dropdown box element ( the mobile menu that appears when the hamburger is clicked)
        const dropdownBox = document.getElementById('dropdownBox');

        // select the exit icon element ( used to close the mobile menu)
        const exitIcon = document.getElementById('exitIcon');

        // select all anchor tags inside list items in the mobile navigation container
        const allAnchorTags = document.querySelectorAll('#navcon-mobile li a');


        // check if the hamburger container element exists in the DOM
        if (hamburgerContainer) {
          // add click event listener to the hamburger container
          hamburgerContainer.addEventListener('click', function () {
            // show the dropdown box ( mobile menu) and apply animation
            if (dropdownBox) {
              dropdownBox.style.display = 'flex';
              dropdownBox.classList.add('animate__rollIn');
            }
          });
        }

        // check if the exit icon exists in the DOM
        if (exitIcon) {
          // add click event listener to the exit icon
          exitIcon.addEventListener('click', function () {
            // hide the dropdown box ( close the mobile menu) and remove animation
            if (dropdownBox) {
              dropdownBox.style.display = 'none';
              dropdownBox.classList.remove('animate__rollIn');
            }
          });
        }


        // check if there are anchor tags inside the mobile navigation container 
        if (allAnchorTags) {
          // loop through all anchor tags and add event listener to each one
          allAnchorTags.forEach(allAnchorTag => {
            allAnchorTag.addEventListener('click', function () {
              // hide the dropdown box when an anchor tag is clicked ( close the menu)
              if (dropdownBox) dropdownBox.style.display = 'none';
            });
          });
        }

        // portfolio script (requires jQuery + isotope loaded in page)
        var $galleryContainer = $('.gallery').isotope({
          itemSelector: '.item',
          layoutMode: 'fitRows'
        });

        $('.button').on('click', function () {
          $('.button').removeClass('active');
          $(this).addClass('active');

          var value = $(this).attr('data-filter');
          $galleryContainer.isotope({
            filter: value
          });
        });

        // magnific popup (requires jQuery + magnific-popup)
        $('.gallery').magnificPopup({
          delegate: '.overlay a',
          type: 'image',
          gallery: {
            enabled: true
          }
        });

        // Cokar Gist carousel autoplay + dots
        (function () {
          const container = document.querySelector('.gist-window');
          const track = document.querySelector('.gist-track');
          const cards = document.querySelectorAll('.gist-card');
          const dotsWrap = document.querySelector('.gist-dots');
          if (!container || !track || cards.length === 0 || !dotsWrap) return;

          function getCardsPerView() {
            const w = window.innerWidth;
            if (w <= 480) return 1;
            if (w <= 768) return 2;
            if (w <= 1100) return 3;
            return 4;
          }

          let cardsPerView = getCardsPerView();
          let pages = Math.max(1, Math.ceil(cards.length / cardsPerView));
          let pageIndex = 0;
          let interval = null;

          function renderDots() {
            dotsWrap.innerHTML = '';
            for (let i = 0; i < pages; i++) {
              const b = document.createElement('button');
              b.dataset.index = i;
              if (i === 0) b.classList.add('active');
              b.addEventListener('click', () => { goToPage(i); resetAutoplay(); });
              dotsWrap.appendChild(b);
            }
          }

          function goToPage(i) {
            pageIndex = i % pages;
            const scrollLeft = pageIndex * container.clientWidth;
            container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
            updateDots();
          }

          function updateDots() {
            const dots = dotsWrap.querySelectorAll('button');
            dots.forEach(d => d.classList.remove('active'));
            const active = dotsWrap.querySelectorAll('button')[pageIndex];
            if (active) active.classList.add('active');
          }

          function nextPage() {
            pageIndex = (pageIndex + 1) % pages;
            goToPage(pageIndex);
          }

          function resetAutoplay() {
            clearInterval(interval);
            interval = setInterval(nextPage, 3500);
          }

          function recalc() {
            cardsPerView = getCardsPerView();
            pages = Math.max(1, Math.ceil(cards.length / cardsPerView));
            renderDots();
            goToPage(0);
          }

          window.addEventListener('resize', () => { setTimeout(recalc, 150); });
          renderDots();
          resetAutoplay();
        })();

