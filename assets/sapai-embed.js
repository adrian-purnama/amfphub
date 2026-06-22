/* SapAi embed widget — host page listens for close/open from the iframe */
(function () {
  var iframe = document.getElementById("sapai-embed-widget");
  if (!iframe) return;

  var launcher = document.createElement("button");
  launcher.type = "button";
  launcher.id = "sapai-embed-launcher";
  launcher.setAttribute("aria-label", "Open assistant chat");
  launcher.style.cssText = [
    "display:none",
    "position:fixed",
    "bottom:20px",
    "right:20px",
    "z-index:2147483000",
    "width:56px",
    "height:56px",
    "border:1px solid rgba(228,228,231,0.9)",
    "border-radius:999px",
    "background:#18181b",
    "color:#fff",
    "box-shadow:0 8px 24px rgba(0,0,0,0.2)",
    "cursor:pointer",
    "align-items:center",
    "justify-content:center",
    "padding:0"
  ].join(";");
  launcher.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/></svg>';
  document.body.appendChild(launcher);

  function showChat() {
    iframe.style.display = "block";
    launcher.style.display = "none";
  }

  function hideChat() {
    iframe.style.display = "none";
    launcher.style.display = "inline-flex";
  }

  launcher.addEventListener("click", showChat);

  window.addEventListener("message", function (e) {
    var d = e.data;
    if (!d || d.type !== "sapai-embed") return;
    if (d.action === "close") hideChat();
    if (d.action === "open") showChat();
  });

  hideChat();
})();
