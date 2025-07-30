function ignite() {
  const button = document.querySelector('.fire-button');
  const status = document.querySelector('.status');
  const flame = document.createElement('div');
  flame.className = 'flame';
  flame.innerText = '🔥';
  document.body.appendChild(flame);

  // 🔥 効果音の再生（burn.mp3）
  const audio = document.getElementById("burn-sound");
  if (audio) {
    audio.currentTime = 0;
    audio.play().catch((error) => {
      console.log("音声の再生に失敗しました:", error);
    });
  }

  // ボタン無効化演出
  button.disabled = true;
  status.innerText = '燃やしています…（Needless Funding）';

  // 演出終了後
  setTimeout(() => {
    flame.remove();
    button.disabled = false;
    const count = Number(localStorage.getItem('mudaCount') || 0) + 1;
    localStorage.setItem('mudaCount', count);
    status.innerText = `あなたの無駄：${count} 回`;
  }, 2000);
}
