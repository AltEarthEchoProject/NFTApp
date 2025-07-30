function ignite() {
  const button = document.querySelector('.fire-button');
  const status = document.querySelector('.status');

  // 🔥 炎エフェクト追加
  for (let i = 0; i < 5; i++) {
    const flame = document.createElement('div');
    flame.className = 'flame';
    flame.innerText = '🔥';
    flame.style.position = 'absolute';
    flame.style.left = `${Math.random() * 90 + 5}%`;
    flame.style.top = `${Math.random() * 80 + 10}%`;
    flame.style.fontSize = `${Math.random() * 40 + 30}px`;
    flame.style.opacity = '0.8';
    document.body.appendChild(flame);

    // 自動削除
    setTimeout(() => {
      flame.remove();
    }, 2000);
  }

  // 🔊 効果音再生
  const audio = document.getElementById("burn-sound");
  if (audio) {
    audio.currentTime = 0;
    audio.play().catch((error) => {
      console.log("音声の再生に失敗しました:", error);
    });
  }

  // 🔴 背景を一瞬赤くする（フラッシュ的演出）
  document.body.style.transition = 'background-color 0.2s';
  document.body.style.backgroundColor = '#ffdddd';
  setTimeout(() => {
    document.body.style.backgroundColor = '';
  }, 300);

  // 🛑 ボタン無効化
  button.disabled = true;
  status.innerText = '燃やしています…（Needless Funding）';

  // ✅ 終了後ステータス更新
  setTimeout(() => {
    button.disabled = false;
    const count = Number(localStorage.getItem('mudaCount') || 0) + 1;
    localStorage.setItem('mudaCount', count);
    status.innerText = `あなたの無駄：${count} 回`;
  }, 2000);
}
