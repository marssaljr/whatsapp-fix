window.addEventListener('load', function () {
  if (document.readyState === 'complete') {
    setTimeout(function () {
      let sidebar = document.getElementsByClassName('_aigv _aigw')[1]
      sidebar.style.display = 'none'
      let icon = document.getElementsByClassName('_ajv6 x1y1aw1k x1sxyh0 xwib8y2 xurb0ha')[0];
      icon.addEventListener('click', () => {
        if (sidebar.style.display === 'none') {
          sidebar.style.display = ''
        } else {
          sidebar.style.display = 'none'
        }
      })

    }, 8000);
  }
})