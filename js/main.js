var gifs = [
  '2cool4u',
  'beyonce_bow',
  'beyonce_feminist',
  'beyonce_girls',
  'bgsd',
  'birthday',
  'blink',
  'bothers',
  'cackle',
  'cactus',
  'chicken',
  'DOGWHY',
  'elephant',
  'elmo',
  'eyeroll-extreme',
  'feminism',
  'fuckoff',
  'fuckyou',
  'giggle-minions',
  'giggle',
  'herumph-cat',
  'herumph',
  'hurryhog',
  'idk',
  'infinite-booze',
  'infinite-pug',
  'kermit',
  'lipstick',
  'lolnope',
  'lunch',
  'misandry',
  'peace',
  'penguin',
  'sadsigh',
  'scream',
  'sloth-no',
  'sloth-zzz',
  'sob-laugh',
  'sob-sob',
  'sob-wine',
  'srsly',
  'sus',
  'tableflip-desk',
  'tableflip',
  'tell_me_more',
  'wombat',
  'wtfcat',
  'yayslow'
].reverse()

// add images as div.image

var container = document.getElementById('images')

if (container) {
  // loop through gifs and add to page
  for (var i = gifs.length - 1; i >= 0; i--) {
    // create gif container
    var gifDiv = document.createElement('div')
    gifDiv.className += 'image'

    // create image container
    var gif = document.createElement('img')
    gif.setAttribute('src', 'img/' + gifs[i] + '.gif')

    // append the elements to their parents
    gifDiv.appendChild(gif)
    container.appendChild(gifDiv)
  }
}
