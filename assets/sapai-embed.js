/* SapAi embed widget */
(function () {
  var SAPAI_ORIGIN = "https://sapai.amfphub.com";

  function openChat() {
    var iframe = document.getElementById("sapai-embed-widget");
    var launcher = document.getElementById("sapai-embed-launcher");
    if (!iframe || !launcher) return;

    var embedSrc = iframe.getAttribute("data-embed-src") || iframe.getAttribute("src") || "";
    window.__sapaiIgnoreCloseUntil = Date.now() + 1500;

    launcher.classList.add("is-hidden");
    iframe.classList.add("is-open");

    if (embedSrc) {
      iframe.src = embedSrc;
    }
  }

  function closeChat() {
    if (window.__sapaiIgnoreCloseUntil && Date.now() < window.__sapaiIgnoreCloseUntil) {
      return;
    }

    var iframe = document.getElementById("sapai-embed-widget");
    var launcher = document.getElementById("sapai-embed-launcher");
    if (!iframe || !launcher) return;

    iframe.classList.remove("is-open");
    launcher.classList.remove("is-hidden");
  }

  window.sapaiEmbedOpen = openChat;
  window.sapaiEmbedClose = closeChat;

  if (!window.__sapaiEmbedMessageBound) {
    window.__sapaiEmbedMessageBound = true;
    window.addEventListener("message", function (e) {
      if (e.origin !== SAPAI_ORIGIN) return;
      var d = e.data;
      if (!d || d.type !== "sapai-embed") return;
      if (d.action === "close") closeChat();
      if (d.action === "open") openChat();
    });
  }
})();
