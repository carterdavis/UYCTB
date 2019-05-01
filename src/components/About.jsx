import React from 'react';
import ClickOutside from 'react-click-outside'

class About extends React.Component {
  constructor(props) {
      super(props);
  }

  handleClickOutside() {
    if (this.props.visible) {
      this.props.toggle();
    }
  }

  render() {
    const visibility = this.props.visible ? 'visible' : 'hidden';

    return (
      <div class={`about ${visibility}`}>
        <button class="x" onClick={(e) => {this.props.toggle(); e.stopPropagation();}}>x</button>
        <h2>About The Book</h2>
        <p>Until You Continue To Behave is a super maximalist tragicomedy about guilt and disconnection in a cartoonishly warped world, filled with illustrations, animations, and original music. I wrote/programmed it to transform my fear and disillusionment into something silly and beautiful. You can read the whole thing for free on this site, and a full-color paperback version available to order at UYCTB.STORE, with 100% of the proceeds going to Food Not Bombs.</p>
        <h2>About The Author</h2>
        <p>I'm a very nice young man who currently lives in Minneapolis. Besides writing and programming, I also do a lot of visual art and animation. I'll update this later, haha.</p>
        <p>You can follow me on: <a href="https://twitter.com/sweetstench" target="_blank">Twitter</a> and <a href="https://instagram.com/sweet.stench" target="_blank">Instagram</a></p>
        <h2>Credits</h2>
        <p>Ben Crouse did all the static (non-animated GIF) artwork for this project, including the cover. You can follow him on <a href="https://instagram.com/jumpgalaxy" target="_blank">Instagram</a> and check out his <a href="http://www.bencrousewebsite.com/" target="_blank">website</a>, his art is super good.</p>
        <p>Dana Telsrow did all the music for this project. His songs are funkier and spunkier than a punk and a skunk. You can follow him on <a href="https://instagram.com/danatelsrow" target="_blank">Instagram</a>, <a href="https://twitter.com/danatelsrow" target="_blank">Twitter</a>, <a href="https://danatelsrow.bandcamp.com/" target="_blank">Bandcamp</a>, and <a href="https://open.spotify.com/artist/0PCd5oSATeUv5K9B3qxjMo"  target="_blank">Spotify</a>, and check out his <a href="http://www.danatelsrow.com/" target="_blank">website</a> too.</p>
        <p>Celine Lavonne Bernard Robins edited the text of the book, and her notes made it so much better. You can follow her on <a href="https://twitter.com/CelineLavonne" target="_blank">Twitter</a> and <a href="https://instagram.com/celinelvbrobins" target="_blank">Instagram</a>.</p>
        <h2>Acknowledgements</h2>
        <p>Thank you Lauren, this book would not exist without you; it's a by product of all the happy times we've spent. Thank you Alosha, Spencer, and Connett for goofin with me 24/7 and being such great friends when I didn't have many. Thank you Christian, Mom, and Dad for always being there for me.</p>
        <h2>Legal Stuff</h2>
        <p>Copyright © 2019 by Carter Davis, all rights reserved.</p>
        <p>Until You Continue To Behave is a work of fiction. Names, characters, places, or incidents either are the product of the author's imagination or are used fictitiously. Any resemblance to actual persons, living or dead, events, or locales is entirely coincidental.</p>
      </div>
    )
  }
}

export default ClickOutside(About);
