// JavaScriptでモーダルの動作を設定

// 各ギャラリーアイテムとモーダルウィンドウ要素を取得
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

// すべてのギャラリーアイテムにクリックイベントを追加
document.querySelectorAll(".gallery-item img").forEach((item) => {
  item.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.parentElement.getAttribute("data-description");
  });
});

// 「✕」ボタンをクリックしてモーダルを閉じる
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});
