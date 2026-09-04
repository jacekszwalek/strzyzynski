/**
 * js/player.js — własny odtwarzacz audio z dużymi kontrolkami (play/pauza,
 * -15s/+15s, pasek postępu, czas, prędkość) oraz obsługa przełącznika
 * wideo/audio ("Wolę tylko posłuchać").
 *
 * Progresywne wzmocnienie: znacznik <audio controls> działa natywnie nawet
 * bez JS. Gdy JS jest dostępny, ukrywamy natywne kontrolki i budujemy
 * własne, większe.
 */

(function () {
  "use strict";

  function formatTime(sec) {
    if (!isFinite(sec) || sec < 0) sec = 0;
    var m = Math.floor(sec / 60);
    var s = Math.floor(sec % 60);
    return m + ":" + (s < 10 ? "0" : "") + s;
  }

  function initPlayer(root) {
    var audio = root.querySelector(".audio-el");
    if (!audio) return;

    audio.removeAttribute("controls");

    var playBtn = root.querySelector(".audio-btn--play");
    var progress = root.querySelector(".audio-progress");
    var timeCurrent = root.querySelector(".audio-time-current");
    var timeDuration = root.querySelector(".audio-time-duration");
    var seekBtns = root.querySelectorAll("[data-seek]");
    var speedBtns = root.querySelectorAll(".audio-speed-btn");
    var lang = document.documentElement.getAttribute("lang") === "en" ? "en" : "pl";
    var playLabel = lang === "pl" ? "Odtwórz" : "Play";
    var pauseLabel = lang === "pl" ? "Pauza" : "Pause";

    function setPlayIcon(isPlaying) {
      playBtn.textContent = isPlaying ? "❚❚" : "▶";
      playBtn.setAttribute("aria-label", isPlaying ? pauseLabel : playLabel);
    }

    playBtn.addEventListener("click", function () {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    });
    audio.addEventListener("play", function () { setPlayIcon(true); });
    audio.addEventListener("pause", function () { setPlayIcon(false); });

    audio.addEventListener("loadedmetadata", function () {
      progress.max = String(Math.floor(audio.duration) || 0);
      timeDuration.textContent = formatTime(audio.duration);
    });

    audio.addEventListener("timeupdate", function () {
      if (!progress.matches(":active")) {
        progress.value = String(Math.floor(audio.currentTime));
      }
      timeCurrent.textContent = formatTime(audio.currentTime);
    });

    progress.addEventListener("input", function () {
      audio.currentTime = Number(progress.value);
    });

    seekBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var delta = Number(btn.getAttribute("data-seek"));
        audio.currentTime = Math.min(Math.max(0, audio.currentTime + delta), audio.duration || Infinity);
      });
    });

    speedBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var speed = Number(btn.getAttribute("data-speed"));
        audio.playbackRate = speed;
        speedBtns.forEach(function (b) { b.setAttribute("aria-pressed", "false"); });
        btn.setAttribute("aria-pressed", "true");
      });
    });

    setPlayIcon(false);
  }

  function initListenOnlyToggle(section) {
    var toggleBtn = section.querySelector(".listen-only-btn");
    var videoWrap = section.querySelector(".video-wrap");
    var audioPlayer = section.querySelector(".audio-player");
    if (!toggleBtn || !videoWrap || !audioPlayer) return;

    var lang = document.documentElement.getAttribute("lang") === "en" ? "en" : "pl";
    var toAudioLabel = lang === "pl" ? "Wolę tylko posłuchać" : "I'd rather just listen";
    var toVideoLabel = lang === "pl" ? "Pokaż wideo" : "Show video";

    toggleBtn.addEventListener("click", function () {
      var showingVideo = !videoWrap.hidden;
      videoWrap.hidden = showingVideo;
      audioPlayer.hidden = !showingVideo;
      toggleBtn.textContent = showingVideo ? toVideoLabel : toAudioLabel;
      if (showingVideo) {
        var iframe = videoWrap.querySelector("iframe");
        if (iframe) iframe.src = iframe.src; // zatrzymaj odtwarzanie wideo w tle
      }
      audioPlayer.querySelector(".audio-btn--play, .btn").focus();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".audio-player").forEach(initPlayer);
    document.querySelectorAll(".media-section").forEach(initListenOnlyToggle);
  });
})();
