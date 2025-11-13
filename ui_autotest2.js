// Interactions for UI-AutoTest2 page

(() => {
  const submitBtn = document.getElementById('submitBtn');
  const fullName = document.getElementById('fullName');
  const phone = document.getElementById('phone');

  // Hover state: add/remove a data-hover attribute (annotation-friendly)
  ['mouseenter', 'mouseleave'].forEach(evt => {
    submitBtn.addEventListener(evt, () => {
      const hovering = evt === 'mouseenter';
      submitBtn.setAttribute('data-hover', String(hovering));
    });
  });

  // Simple submit interaction: basic validation and feedback
  submitBtn.addEventListener('click', () => {
    const name = fullName.value.trim();
    const tel = phone.value.trim();

    // Very basic check for phone digits length
    const telOk = /\d{6,}/.test(tel);
    const nameOk = name.length >= 1;

    if (!nameOk || !telOk) {
      alert('请输入有效的姓名和电话号码');
      return;
    }
    alert('提交成功');
    // Here you can integrate real submit logic (fetch/XHR) as needed.
  });
})();