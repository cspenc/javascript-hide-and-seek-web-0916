function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  const grandNode = document.querySelector('#grand-node')
  var current = grandNode
  while (current.children[0]) {
    current = current.children[0]
  }
    return current
}

function increaseRankBy(n) {
  const list = document.querySelectorAll('ul.ranked-list li')
  for (var i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + n
  }
}
