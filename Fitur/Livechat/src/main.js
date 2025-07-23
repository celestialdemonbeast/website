document.getElementById('generatorForm').addEventListener('submit', e => {
  e.preventDefault();
  const fs = document.getElementById('fontSize').value;
  const tc = document.getElementById('textColor').value;
  const av = document.getElementById('avatarSize').value;
  const op = document.getElementById('bgOpacity').value;

  const css = `
#chatframe {
  background: rgba(255, 255, 255, ${op / 100});
}
#chatframe ytd-live-chat-frame, #chatframe ytd-live-chat-header-renderer {
  font-size: ${fs}px !important;
  color: ${tc} !important;
}
#chatframe img {
  width: ${av}px !important;
  height: ${av}px !important;
  border-radius: 50% !important;
}
`;

  document.getElementById('outputCSS').textContent = css.trim();
});
