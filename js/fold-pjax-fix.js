// folder.js 的 pjax 兼容补丁 v2（单事件源）：
// 插件原 folder.js 用 onclick= 绑定（直接打开页面时执行），本补丁用 addEventListener，
// 两个处理器同时挂上会导致一次点击 toggle 两次（状态抵消、看起来点不开）。
// v2：每次绑定时清掉插件挂的 onclick，保证任何加载路径下只有一个 toggle 源。
(function () {
  function bindFolds() {
    // 卸掉插件原 folder.js 的 onclick 绑定（插件先跑后跑都兼容）
    document.querySelectorAll('.fold .fold-title').forEach(function (t) { t.onclick = null; });
    document.querySelectorAll('.fold:not([data-fold-bound])').forEach(function (panel) {
      panel.setAttribute('data-fold-bound', '1');
      var title = panel.querySelector('.fold-title');
      if (!title) return;
      title.addEventListener('click', function () {
        panel.classList.toggle('collapsed');
        panel.classList.toggle('expanded');
      });
    });
  }
  bindFolds();
  document.addEventListener('page:loaded', bindFolds);
  window.addEventListener('pjax:success', bindFolds);
})();
