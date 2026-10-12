/**
 * js/player.js — własny odtwarzacz audio z dużymi kontrolkami (play/pauza,
 * ±10s, pasek postępu z dwutonowym odcinkiem odtworzonym/nieodtworzonym,
 * łączny czas trwania, przełącznik prędkości 1×/0.75×) oraz obsługa
 * przełącznika wideo/audio ("Wolę tylko posłuchać").
 *
 * Progresywne wzmocnienie: znacznik <audio controls> działa natywnie nawet
 * bez JS. Gdy JS jest dostępny, ukrywamy natywne kontrolki i budujemy
 * własne, większe. Pasek postępu to nadal natywny <input type="range">
 * (pełne wsparcie klawiatury/dotyku/czytników ekranu za darmo) — nakładka
 * .audio-progress-played to tylko kosmetyczna warstwa pod spodem.
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
    var playedBar = root.querySelector(".audio-progress-played");
    var timeCurrent = root.querySelector(".audio-time-current");
    var timeDuration = root.querySelector(".audio-time-duration");
    var seekBtns = root.querySelectorAll("[data-seek]");
    var speedBtn = root.querySelector(".audio-speed-toggle");
    var lang = document.documentElement.getAttribute("lang") === "en" ? "en" : "pl";
    var playLabel = lang === "pl" ? "Odtwórz" : "Play";
    var pauseLabel = lang === "pl" ? "Pauza" : "Pause";
    var speedLabel = lang === "pl" ? "Prędkość odtwarzania" : "Playback speed";

    function setPlayIcon(isPlaying) {
      playBtn.textContent = isPlaying ? "❚❚" : "▶";
      playBtn.setAttribute("aria-label", isPlaying ? pauseLabel : playLabel);
    }

    function updatePlayedBar() {
      if (!playedBar) return;
      var max = Number(progress.max) || 0;
      var pct = max > 0 ? (Number(progress.value) / max) * 100 : 0;
      playedBar.style.width = pct + "%";
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
      if (timeDuration) timeDuration.textContent = formatTime(audio.duration);
    });

    audio.addEventListener("timeupdate", function () {
      if (!progress.matches(":active")) {
        progress.value = String(Math.floor(audio.currentTime));
      }
      if (timeCurrent) timeCurrent.textContent = formatTime(audio.currentTime);
      updatePlayedBar();
    });

    progress.addEventListener("input", function () {
      audio.currentTime = Number(progress.value);
      if (timeCurrent) timeCurrent.textContent = formatTime(audio.currentTime);
      updatePlayedBar();
    });

    seekBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var delta = Number(btn.getAttribute("data-seek"));
        audio.currentTime = Math.min(Math.max(0, audio.currentTime + delta), audio.duration || Infinity);
      });
    });

    if (speedBtn) {
      speedBtn.addEventListener("click", function () {
        var current = Number(speedBtn.getAttribute("data-speed"));
        var next = current === 1 ? 0.75 : 1;
        audio.playbackRate = next;
        speedBtn.setAttribute("data-speed", String(next));
        var label = (next === 1 ? "1" : "0.75") + "×";
        speedBtn.textContent = label;
        speedBtn.setAttribute("aria-label", speedLabel + ": " + label);
      });
    }

    setPlayIcon(false);
    updatePlayedBar();
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
