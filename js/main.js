function backTop () {
  window.scrollBy(0, -100)

  scrolldelay = setTimeout('backTop()', 10)

  var sTop = document.documentElement.scrollTop + document.body.scrollTop

  if (sTop === 0) {
    clearTimeout(scrolldelay)
  }
}