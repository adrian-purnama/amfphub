/* SapAi embed widget — launcher is in HTML so it shows even if JS loads late */
(function () {
  if (window.__sapaiEmbedInit) return;
  window.__sapaiEmbedInit = true;

  function init() {
    var iframe = document.getElementById("sapai-embed-widget");
    var launcher = document.getElementById("sapai-embed-launcher");
    if (!iframe || !launcher) return;

    function showChat() {
      iframe.classList.add("is-open");
      launcher.classList.add("is-hidden");
    }

    function hideChat() {
      iframe.classList.remove("is-open");
      launcher.classList.remove("is-hidden");
    }

    launcher.addEventListener("click", showChat);

    window.addEventListener("message", function (e) {
      var d = e.data;
      if (!d || d.type !== "sapai-embed") return;
      if (d.action === "close") hideChat();
      if (d.action === "open") showChat();
    });

    hideChat();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
