/* SapAi embed widget */
(function () {
  if (window.__sapaiEmbedInit) return;
  window.__sapaiEmbedInit = true;

  function init() {
    var iframe = document.getElementById("sapai-embed-widget");
    var launcher = document.getElementById("sapai-embed-launcher");
    if (!iframe || !launcher) return;

    var embedSrc = iframe.getAttribute("src") || "";
    var wasClosedByUser = false;

    function showChat() {
      if (wasClosedByUser && embedSrc) {
        iframe.src = embedSrc;
        wasClosedByUser = false;
      }
      iframe.classList.add("is-open");
      launcher.classList.add("is-hidden");
    }

    function hideChat(markClosed) {
      iframe.classList.remove("is-open");
      launcher.classList.remove("is-hidden");
      if (markClosed) wasClosedByUser = true;
    }

    launcher.addEventListener("click", showChat);

    window.addEventListener("message", function (e) {
      var d = e.data;
      if (!d || d.type !== "sapai-embed") return;
      if (d.action === "close") hideChat(true);
      if (d.action === "open") showChat();
    });

    hideChat(false);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
