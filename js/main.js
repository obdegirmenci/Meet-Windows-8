const CONTENT_DATA = {
  titles: {
    orange: "<h1>Work and Play</h1>",
    green: "<h1>New PCs</h1>",
    blue: "<h1>New Look</h1>",
    yellow: "<h1>Apps</h1>"
  },
  descriptions: {
    orange: `
      <p>Watch a movie, bring up the latest gossip or create a to-do list. <span class="hiddenLine">Switch from full-screen video to spreadsheet with a single swipe, or keep both side by side for easy multitasking. Examine your files closely, perform instant searches within your current app, and use familiar programs.</span></p>
    `,
    green: `
      <p>Whichever you choose, your new PC will achieve more and take you further. <span class="hiddenLine">The latest tablets are lightweight, extremely fast, and have longer battery life for greater portability.</span></p>
    `,
    blue: `
      <p>Every tile on the Start screen is linked to a person, app, website, folder, playlist, or anything else important to you. <span class="hiddenLine">Pin as many tiles as you want to the Start screen and arrange them however you like.</span></p>
    `,
    yellow: `
      <p>Tasks that used to require many different programs now come together in a single, simple experience. <span class="hiddenLine">Use your Photos app to see all your photos on Facebook and Flickr, then post them to your blog or email them to a friend—all without leaving the app.</span></p>
    `,
  },
  details: {
    orange: `
      <h2>Serious. Fun. </h2>
      <div id="gallery">
        <div id="info1" class="gallery-slide">
          <div id="infoLeftX" class="gallery-nav"></div>
          <div id="info1Image" class="gallery-image">
            <div class="infoMiddle">
              <div class="infoTitle">Work</div>
              <div class="infoContent">
                A new era has begun for computers. Windows PCs developed with a focus on elegance,
                lightness, stylish design and innovative materials are reaching new heights in
                performance and quality.
              </div>
            </div>
          </div>
          <div id="infoRightX" class="gallery-nav"></div>
        </div>
        <div id="info2" class="gallery-slide">
          <div id="infoLeftY" class="gallery-nav"></div>
          <div id="info2Image" class="gallery-image">
            <div class="infoMiddle">
              <div class="infoTitle">Play</div>
              <div class="infoContent">
                Windows 8 focuses on endless entertainment possibilities and apps. Unleash your
                creativity, lose yourself in games with friends, discover and download videos
                and songs, and play them on your TV or Xbox 360.
              </div>
            </div>
          </div>
          <div id="infoRightY" class="gallery-nav"></div>
        </div>
      </div>
      <h2>The familiar desktop </h2>
      <img src="img/box/orange/img-3.png" />
      <p>
        The desktop that you're used to—along with the familiar file structure and ways of getting around—is not only still here, it's even better than it was. And things like Control Panel and Task Manager are faster and easier to find and use.
      </p>
      <h2>Connected for success</h2>
      <p>
        Built-in mobile broadband features in Windows support 3G and 4G. As you move, your PC will automatically find and use available Wi‑Fi hotspots. So you can be effortlessly connected and ready to work and stay in touch from anywhere.
      </p>
      <br><br><br>
    `,
    green: `
      <h2>Hit the road in style</h2>
      <img src="img/box/green/img-2.jpg" />
      <p>
        New desktops and all-in-ones bring a lean new look to your home and office. You'll get the full power and speed of a desktop—with vast amounts of storage and super responsive processing—in designs that are thinner, lighter, and more stylish than ever.
      </p>
      <img src="img/box/green/img-3.jpg" />
      <p>
        Many of the new-generation desktops and all-in-ones combine the precision and control of a mouse and keyboard with the fun and flexibility of a touch screen.
      </p>
      <img src="img/box/green/img-4.jpg" />
      <br><br>
      <h2>Get one to go: Windows RT PCs</h2>
      <img src="img/box/green/img-5.jpg" />
      <p>
        Sleek and thin, with truly extraordinary battery life, Windows RT PCs are great for life on the go. They stay connected even in sleep mode, resume quickly, and are perfect for both touch and a mouse and keyboard.
      </p>
      <img src="img/box/green/img-6.jpg" />
      <p>
        Windows RT runs apps exclusively from the Windows Store, and also has great built-in apps like Mail, People, Messaging, Photos, SkyDrive, Music, and Video, so you can stay in touch and have fun.
      </p>
      <img src="img/box/green/img-7.jpg" />
      <p>
        Every Windows RT PC comes with Microsoft Office Home & Student 2013 RT Preview, so you can do more with Word, Excel, PowerPoint, and OneNote. The final version of these applications will be installed automatically when they become available.
      </p>
      <img src="img/box/green/img-8.jpg" />
      <br><br><br>
    `,
    blue: `
      <h2>A Start screen that's all about you</h2>
      <img src="img/box/blue/img-1.jpg" />
      <p>
        Every tile on the Start screen is linked to a person, app, website, folder, playlist, or anything else important to you. Pin as many tiles as you want to the Start screen and arrange them however you like.
      </p>
      <img src="img/box/blue/img-2.jpg" />
      <p>
        This isn't just a wall of icons: Windows 8's live tiles show you up-to-date information at a glance. See your friends' latest status updates, weather forecasts, newest Tweets, and more—right from your Start screen without opening any apps.
      </p>
      <h2>See and share</h2>
      <img src="img/box/blue/img-3.jpg" />
      <p>
        Your photos, websites, that fun video you just watched: You can share almost anything you see with others. Instantly. You don't need to stop what you're doing—just copy what you want to share, open another app, and paste. Simply swipe in from the right and tap or click the Share button to send via email or Facebook.
      </p>
      <h2>Touch and mouse</h2>
      <img src="img/box/blue/img-4.jpg" />
      <p>
        Windows is perfect for touchscreen PCs, mice-and-keyboard PCs, and PCs with both. No matter what kind of PC you choose, you'll find fast, fluid ways to switch between apps, move things around, and go from one place to another seamlessly.
      </p>
      <h2>Zip around, get it done</h2>
      <img src="img/box/blue/img-5.jpg" />
      <img src="img/box/blue/img-6.jpg" />
      <img src="img/box/blue/img-7.jpg" />
      <h3>Discover fast and fun ways to get around</h3>
      <ul>
        <li>
          Pinch and stretch to zoom in and out. Get a global view of everything that's on your screen, and slide back and forth to find what you're looking for.
        </li>
        <li>
          Swipe in from the left to switch between recently used apps.
        </li>
        <li>
          Swipe in from the right to get back to Start and to other things you do often, like searching, sharing, and changing your settings.
        </li>
        <li>
          Swipe in from the bottom to see navigation controls for any app you're in.
        </li>
      </ul>
      <p>
        You can easily do all these things with a mouse, too.
      </p>
      <br><br><br>
    `,
    yellow: `
      <h2>Apps work together</h2>
      <img src="img/box/blue/img-1.jpg" />
      <p>
        Every tile on the Start screen is linked to a person, app, website, folder, playlist, or anything else important to you. Pin as many tiles as you want to the Start screen and arrange them however you like.
      </p>
      Controls work the same in every app. Swipe up from the bottom edge (or right-click with a mouse) and app commands appear instantly. Search works the same way across all apps too: No matter which app you're using, you can use the Search button to find things within the app, on your PC, or on the web. Windows comes with apps for essentials and more. Built-in apps like People, Mail, Photos, and Messaging work together to help with all your basic tasks and make everything easier.
      <h2>Ready to roll: Your basic apps</h2>
      <p>
        Windows gives you apps for the basics and a lot more. Free apps like People, Mail, Photos, and Messaging power you through essential tasks and work together to make everything easier.
      </p>
      <ul>
        <li><div class="appDescription"><img src="img/box/yellow/apps/basic-app-1.jpg" />Collect all your emails from different accounts—including Outlook, Gmail, and Yahoo!—in one place./div></li>
        <li><div class="appDescription"><img src="img/box/yellow/apps/basic-app-2.jpg" />Check out the latest info about people from your email accounts, Facebook, and LinkedIn, and start chatting with them.</div></li>
        <li><div class="appDescription"><img src="img/box/yellow/apps/basic-app-3.jpg" />Find and watch movies and TV shows—on your PC or your TV.</div></li>
        <li><div class="appDescription"><img src="img/box/yellow/apps/basic-app-4.jpg" />Send Messages to friends in a merged list from Facebook and Messenger; use any of hundreds of expressions.</div></li>
        <li><div class="appDescription"><img src="img/box/yellow/apps/basic-app-5.jpg" />Access your files seamlessly from Windows 8 apps and other devices.</div></li>
        <li><div class="appDescription"><img src="img/box/yellow/apps/basic-app-6.jpg" />View your photos and videos in one place—whether they're on Facebook, Flickr, SkyDrive, or another PC.</div></li>
        <li><div class="appDescription"><img src="img/box/yellow/apps/basic-app-7.jpg" />Discover, download, and listen to the newest songs, and share your playlists.</div></li>
        <li><div class="appDescription"><img src="img/box/yellow/apps/basic-app-8.jpg" />Skype, which comes with your PC or is available as a free download from the Windows Store, lets you do things together with voice, video, and instant messaging when you're apart.</div></li>
      </ul>
      <h2>Get apps from the Windows Store</h2>
      <p>
        There are tons of apps to choose from in the Windows Store, and more are being added all the time. Tap or click the Store tile on the Start screen to start browsing. Here's a small sample of what you'll find:
      </p>
      <ul>
        <li><div class="appDescription"><img src="img/box/yellow/apps/store-app-1.jpg" />The #1 mobile game of all time takes you to galaxies.</div></li>
        <li><div class="appDescription"><img src="img/box/yellow/apps/store-app-2.jpg" />Access 60,000 radio stations and 2 million on-demand programs.</div></li>
        <li><div class="appDescription"><img src="img/box/yellow/apps/store-app-3.jpg" />Play and create with delightful, vibrant paintings.</div></li>
        <li><div class="appDescription"><img src="img/box/yellow/apps/store-app-4.jpg" />The official app, with 20 million articles in 280 languages.</div></li>
        <li><div class="appDescription"><img src="img/box/yellow/apps/store-app-5.jpg" />Always-updated, full-screen weather information.</div></li>
        <li><div class="appDescription"><img src="img/box/yellow/apps/store-app-6.jpg" />Turn your PC into a second Xbox screen.</div></li>
        <li><div class="appDescription"><img src="img/box/yellow/apps/store-app-7.jpg" />A beautifully designed astronomy app.</div></li>
        <li><div class="appDescription"><img src="img/box/yellow/apps/store-app-8.jpg" />Get detailed, real-time flight information.</div></li>
      </ul>
      <br><br><br>
    `
  }
};

const MODAL_IDS = ["orange", "green", "blue", "yellow"];
const appState = {
  isIntro: true,
  isIntroLocked: true,
  isModalOpen: false,
  isFirstHover: false,
  isAnimRunning: false
};

$(document).ready(function() {
  initializeModals();
  setupEventHandlers();

  if (appState.isIntro) {
    runIntroAnimation().then(() => {
      appState.isIntroLocked = false;
    });
  } else {
    skipIntro();
  }
});

function initializeModals() {
  MODAL_IDS.forEach(id => {
    loadModalContent(id);
    setupHoverEffect(`#${id}`, getHoverAnimationProps(id));
  });
}

function setupEventHandlers() {
  $(document)
    .on("click", "#orange, #green, #blue, #yellow", handleModalClick)
    .on("click", ".headerRight", handleCloseModal)
    .on("click", ".gallery-nav", handleGalleryNavigation);
}

function loadModalContent(modalId) {
  $(`#${modalId} .headerLeft`)
    .fadeOut(0)
    .html(CONTENT_DATA.titles[modalId])
    .fadeIn(500);

  $(`#${modalId} .content`)
    .fadeOut(0)
    .html(CONTENT_DATA.descriptions[modalId])
    .fadeIn(1500);
}

function getHoverAnimationProps(modalId) {
  const props = {
    orange: {
      hoverIn: {"left": "-=10px", "top": "-=10px"},
      hoverOut: {"left": "+=10px", "top": "+=10px"}
    },
    green: {
      hoverIn: {"left": "+=10px", "top": "-=10px"},
      hoverOut: {"left": "-=10px", "top": "+=10px"}
    },
    blue: {
      hoverIn: {"left": "-=10px", "top": "+=10px"},
      hoverOut: {"left": "+=10px", "top": "-=10px"}
    },
    yellow: {
      hoverIn: {"right": "-=10px", "bottom": "-=10px"},
      hoverOut: {"right": "+=10px", "bottom": "+=10px"}
    }
  };
  return props[modalId];
}

function setupHoverEffect(selector, animationProps) {
  $(selector).hover(
    function() {
      if (!appState.isModalOpen && !appState.isIntroLocked) {
        $(this).animate(animationProps.hoverIn, 100).css({opacity: "0.85"});
        if (!appState.isFirstHover) appState.isFirstHover = true;
      }
    },
    function() {
      if (!appState.isModalOpen && !appState.isIntroLocked && appState.isFirstHover) {
        $(this).animate(animationProps.hoverOut, 100).css({opacity: "1.00"});
      }
    }
  );
}

function runIntroAnimation() {
  return new Promise(resolve => {
    $("#tint").animate({"opacity": "1"}, 0);
    $("#top, #bottom, .headerRight").fadeOut(0);
    $("#top").animate({width: "100px", height: "100px"}, 0);
    $("#orange, #green, #blue, #yellow, #gallery, #info1, #info2").fadeOut(0);

    $("#bottom").delay(2000).fadeIn(500);
    $("#top").fadeIn(2000, function() {
      $("#tint").animate({"opacity": "0"}, 8000, "easeInQuint");
    });

    $("#top").delay(2500).animate({width: "600px", height: "600px"}, 4000, function() {
        $("#orange, #green, #blue, #yellow").fadeIn(1000);

        // Individual modal animations
        $("#orange")
        .delay(600)
        .animate({"left": "+=10px", "top": "+=10px"}, 500)
        .fadeOut(200)
        .fadeIn(600);

        $("#green")
        .delay(1200)
        .animate({"right": "+=10px", "top": "+=10px"}, 500)
        .fadeOut(200)
        .fadeIn(600);

        $("#blue")
        .delay(2400)
        .animate({"left": "+=10px", "bottom": "+=10px"}, 500)
        .fadeOut(200)
        .fadeIn(600);

        $("#yellow")
        .delay(1800)
        .animate({"right": "+=10px", "bottom": "+=10px"}, 500)
        .fadeOut(200)
        .fadeIn(600, resolve);

    });

  });
}

function skipIntro() {
  $(".headerRight, #gallery, #info1, #info2").fadeOut(0);
  $("#top").animate({width: "600px", height: "600px"}, 0);

  $("#orange").animate({"left": "+=10px", "top": "+=10px"}, 500);
  $("#green").animate({"right": "+=10px", "top": "+=10px"}, 500);
  $("#blue").animate({"left": "+=10px", "bottom": "+=10px"}, 500);
  $("#yellow").animate({"right": "+=10px", "bottom": "+=10px"}, 500);

  appState.isIntroLocked = false;
}

function handleModalClick() {
  if (!appState.isIntroLocked && !appState.isModalOpen) {
    openModal($(this));
  }
}

function openModal(modal) {
  appState.isModalOpen = true;
  appState.isAnimRunning = true;

  const modalId = modal[0].id;
  toggleOtherModals(modalId, false);

  const positionProps = getModalPositionProps(modalId);

  modal.animate(positionProps.animation, 500, "easeOutExpo", function() {
    if (positionProps.reset) {
      modal.css(positionProps.reset);
    }

    animateModalContent(modalId);

    if (modalId === "orange") {
      $("#gallery,#info1").delay(1500).fadeIn(1000);
    }

    appState.isAnimRunning = false;
  });
}

function getModalPositionProps(modalId) {
  const props = {
    orange: {
      animation: {"left": "0px"},
      reset: null
    },
    green: {
      animation: {"left": "-=300px"},
      reset: {"left": "0px"}
    },
    blue: {
      animation: {"top": "-=300px"},
      reset: {"top": "0px"}
    },
    yellow: {
      animation: {"right": "+=300px", "bottom": "+=300px"},
      reset: {"right": "0px", "bottom": "0px"}
    }
  };
  return props[modalId];
}

function animateModalContent(modalId) {
  $("#tint").animate({"opacity": "0.55"}, 600);
  $(`#${modalId}`).css({"cursor": "default"})
    .animate({width: "580px", height: "580px", "opacity": "1"}, 1000, "easeOutExpo");

  $(`#${modalId} .headerLeft`).delay(500).animate({width: "545px"}, 800, "easeOutExpo");
  $(`#${modalId} .headerRight`).delay(500).fadeIn(1000);
  $(`#${modalId} .content`).delay(500).animate({width: "560px"}, 800, "easeOutExpo");
  $(`#${modalId} .hiddenLine`).delay(400).fadeIn(1000);
  $(`#${modalId} .detail`).fadeIn(200);
  $(`#${modalId} .detailContent`).html(CONTENT_DATA.details[modalId]);
}

function handleCloseModal() {
  if (appState.isModalOpen && !appState.isAnimRunning) {
    closeModal($(this).parents().eq(1));
  }
}

function closeModal(modal) {
  appState.isAnimRunning = true;
  const modalId = modal[0].id;

  animateModalClose(modalId);
  resetModalPosition(modal, modalId);
}

function animateModalClose(modalId) {
  $("#tint").animate({"opacity": "0"}, 1600);
  $("#gallery").fadeOut(200);
  $(`#${modalId} .detail`).fadeOut(200);
  $(`#${modalId} .headerRight`).fadeOut(150);
  $(`#${modalId} .headerLeft`).animate({width: "245px"}, 1500, "easeOutQuint");
  $(`#${modalId} .content`).delay(250).animate({width: "260px"}, 800, "easeOutExpo");
  $(`#${modalId} .hiddenLine`).fadeOut(350);
}

function resetModalPosition(modal, modalId) {
  modal.delay(200).animate({width: "280px", height: "280px"}, 1000, "easeOutExpo", function() {
    const positionProps = getResetPositionProps(modalId);

    if (positionProps.initialAnimation) {
      modal.animate(positionProps.initialAnimation, 500, function() {
        modal.css(positionProps.reset);
        toggleOtherModals(modalId, true);
        finalizeModalClose(modal, modalId);
      });
    } else {
      toggleOtherModals(modalId, true);
      finalizeModalClose(modal, modalId);
    }

    modal.animate(positionProps.finalAnimation, 400, "easeOutExpo");
  });
}

function getResetPositionProps(modalId) {
  const props = {
    orange: {
      initialAnimation: null,
      reset: null,
      finalAnimation: {"left": "+=10px", "top": "+=10px"}
    },
    green: {
      initialAnimation: {"left": "+=300px"},
      reset: {"left": "0px"},
      finalAnimation: {"left": "-=10px", "top": "+=10px"}
    },
    blue: {
      initialAnimation: {"top": "+=300px"},
      reset: {"top": "0px"},
      finalAnimation: {"left": "+=10px", "top": "-=10px"}
    },
    yellow: {
      initialAnimation: {"right": "-=300px", "bottom": "-=300px"},
      reset: {"right": "0px", "bottom": "0px"},
      finalAnimation: {"right": "+=10px", "bottom": "+=10px"}
    }
  };
  return props[modalId];
}

function finalizeModalClose(modal, modalId) {
  modal.animate({opacity: "1.00"}, 500);
  modal.css({"cursor": "pointer"});

  appState.isAnimRunning = false;
  appState.isModalOpen = false;
  appState.isFirstHover = false;
}

function toggleOtherModals(currentModalId, show) {
  MODAL_IDS.forEach(id => {
    if (id !== currentModalId) {
      show ? $(`#${id}`).fadeIn(500) : $(`#${id}`).fadeOut(500);
    }
  });
}

function handleGalleryNavigation() {
  if (appState.isAnimRunning) return;

  const $current = $(this).closest(".gallery-slide");
  const $next = $current.siblings(".gallery-slide");

  $current.fadeOut(600).css({"z-index": "1"});
  $next.fadeIn(600).css({"z-index": "2"});
}
