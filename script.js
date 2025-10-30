// 固定設定
const pinCode = "1031";
const totalSeats = 20;

// 固定当たり2名（ここを変えれば当たり席を変えられます）
const winners = [7, 14]; // 当たりの席番号を設定

// URLパラメータから席番号を取得
const params = new URLSearchParams(window.location.search);
const seatId = parseInt(params.get("id"));
document.getElementById("seat").textContent = seatId
  ? `あなたの席は No.${seatId} です`
  : "QRコードにIDが設定されていません。";

function checkPin() {
  const inputPin = document.getElementById("pinInput").value.trim();
  const resultEl = document.getElementById("result");

  if (inputPin !== pinCode) {
    resultEl.textContent = "PINが違います";
    resultEl.style.color = "red";
    return;
  }

  if (winners.includes(seatId)) {
    resultEl.textContent = "🎉 幹事おめでとう！";
    resultEl.style.color = "orange";
  } else {
    resultEl.textContent = "✅ セーフ！";
    resultEl.style.color = "green";
  }
}
