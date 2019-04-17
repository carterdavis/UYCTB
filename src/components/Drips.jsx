import React from 'react';

import D from './D.jsx';
import U from './U.jsx';
import H from './H.jsx';
import Pp from './Pp.jsx';

class Drips extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { counter: 0, interval: null };
  }

  componentDidMount() {
    const interval = setInterval(() => {
      if ((this.props.current > this.props.num - 2) && (this.props.current < this.props.num + 2)) {
        this.setState({ counter: this.state.counter + 1 });
      }
    }, 3000);
    this.setState({ interval: interval });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    const c = this.state.counter;
    let drips;

    switch (this.props.chapter) {
      case "one":
      return (<div>
        <D c={c} t={29121} f={14020} q={85}><U>[Jonny freek Out##]</U> > hey jim29 <U>[Mr Jim29 That’sme]</U> i want to rip off yor testicals and make them my chewtoy</D>
      <D c={c} t={64130} f={25124} q={80}><U>[tony smash $MA$HER KREW]</U> > <U>[Mr Jim29 That’sme]</U> kick your puny head so hard it bounces off the walls like bouncey ball. BBOINK</D>
      <D c={c} t={12615} f={4327} q={56}><U>[Great deal065065]</U> > <U>[Mr Jim29 That’sme]</U> Save Hoards Of Gold On Bulk Lanterns, Torches, And Flashlights. ((BUY NOW - LIMITED TIME DEAL)) <U>tttp://shop/online-shop</U></D>
      <D c={c} t={259902} f={104832} q={5000}><U>[dddfffdfdd]</U> > violent aaron is innocent,just tickling his grandpa w/ laser! DOn't believe that p*tty</D>
      <D c={c} t={45236} f={33182} q={70}><U>["""marvin"""]</U> > <U>[Mr Jim29 That’sme]</U> Care to explain why you chose to kill these innocent people? MORON!!! I hope youre tortured horribly for many decades..</D>
      <D c={c} t={19942} f={15124} q={100}><U>[butt artery]</U> > <U>[Mr Jim29 That’sme]</U> Comeoutside lets have some play time</D>
      <D c={c} t={11372} f={5144} q={40}><U>[BR/DR Constant Update]</U> > Respectfulday Birth/Death +3,511,789/-1,919,023</D>
      <D c={c} t={57130} f={35621} q={90}><U>[Kreepy Dan,,,]</U> > <U>[Mr Jim29 That’sme]</U> hope you enjoy it when I carve you up like a fine piece of meat tonight</D>
      <D c={c} t={463006} f={129133} q={6000}><U>[dddfffdfdd]</U> > If youre against Violent Aron but still support Mr. Crap Hell, who litrally chucked his dog onto the roof of his living facility (video in bio), then you are apart of the problem.</D>
      <D c={c} t={5902} f={1832} q={25}><U>[wesley smash $MA$HER KREW]</U> > <U>[Mr Jim29 That’sme]</U> going to freeze you in my fridge</D>
      <D c={c} t={7188} f={2310} q={35}><U>[OOZING!*!GUSHING]</U> > <U>[Mr Jim29 That’sme]</U> jim29 i will make you scream</D>
      </div>);
      case "two":
      return (<div>
        <D c={c} t={59940} f={35214} q={85}><U>[whizzzp]</U> > such a loovely night for the land to shake.. devastating.. Look on the bright side, for those buried by the shakes, will not need to purchase burial grave land</D>
      <D c={c} t={58401} f={24995} q={45}><U>[Great deal175175]</U> > DESIGNER SLIPPER, SO COMFY, 92% OFF <U>nnet://store/store-items</U> BUY OR YOU ARE THE FREAK! BUY OR YOU ARE THE PIG!</D>
      <D c={c} t={90191} f={30712} q={75}><U>[NO EVIDENCE]</U> > praying for the victims of this devastating evil disaster <H>&EarthquakeTravis</H> call the judge in sector 729 and tell himto exonerate me I am not a murderer!!!!</D>
      <D c={c} t={411639} f={215786} q={201}><U>[dave***2]</U> > i'm begging you someone please please please please please PLEASE PLEASE pull me up out of this pit. cannot breath. so hungry <H>&EarthquakeTravis</H></D>
      <D c={c} t={852407} f={211516} q={4310}><U>[Bhoobh000]</U> > <H>&EarthquakeTravis</H> Channeling all the Love in my huge Heart to those Affected</D>
      <D c={c} t={1005940} f={314898} q={4012}><U>[chilling_guy^]</U> > heating up cornbread in the nitrowave</D>
      <D c={c} t={15930} f={4514} q={65}><U>[Salez Nation.BUY]</U> > Goinky goinky hwa?? I'm practically losing my sanity as a result of this `un thinkable` deal! Save so much cheap on EARTHQUAKE■TRAVIS■MUG■RED, the coolest gift for anyone from the ages 0 to 999. <U>deal0://EARTHQUAKE_TRAVIS_MUG_RED/~quickpurchase</U> Buy so fast now</D>
      <D c={c} t={120411} f={45114} q={95}><U>[nUMSKULL]</U> > one <span class="t">*</span>hour into Travis and wouldn't you know,, already the brutes are taking advantage of the situation, rob,bing our noble local businesses of food and medicine. my wristrifle is loaded.</D>
      <D c={c} t={11} f={5} q={6}><U>['porp]</U> > GggghhhhhggggGGGGGggggg  <H>&EarthquakeTravis</H> g########</D>
      <D c={c} t={1522033} f={562909} q={5210}><U>[chilling_guy^]</U> > cornbreads done cookin</D>
      <D c={c} t={758032} f={800336} q={1004}><U>[jason_%_isolation]</U> > feeling completely, completely miserable and so sad today</D>
      </div>);
      case "backAtPod":
      return (
        <div><D c={c} t={0} f={0} q={0}><U>[Mr Jim29 That’sme]</U> > How's everybody doing today? I'm feeling quite bodacious ha ha! Hit me up if you want to hang tonight. I'm going to be chilling out at home!</D></div>);
      case "officeChitChat":
      return (<div><D c={c} t={1274078} f={434259} q={3113}><U>[NewsNEWSjc$d*]</U> > TWO DEAD cuz of crashing Dimples <U>[Dimples:)]</U> zoftware? DOINK! Sip for more updates. <H>&DimplesDisaster</H></D></div>);
      case "reallyWorkingNow":
      return (<div><D c={c} t={1441292} f={583145} q={4112}><U>[Whaats-News--]</U> > EXPOSED: Dimples employee Jim29 03Goldman (<U>[Mr Jim29 That’sme]</U>) reported as architect of zoftware crash that mercilessly slaughtered two</D>
      <Pp bg="#ff3797, #38FF3A"><p>The drip already has ten thousand thumbs and four thousand flips. My eyes are blurry and my face is wet. Jittery energy pumps behind my brain. My throat pushes into my mouth.</p></Pp>
      <D c={c} t={99918} f={23478} q={123}><U>[doctorskum22]</U> > <U>[WhaatsNews]</U> > disgusting</D>
      <Pp bg="#38FF3A, #ff3797"><p>I skim through the code. Click between the tabs. Highlight letters, words, lines. I close my eyelids and sit in the dark. My head throbs throughout the room. I take short, quick breaths.</p></Pp>
      <D c={c} t={58345} f={387073} q={105}><U>[porppeprerep]</U> > <U>[Mr Jim29 That’sme]</U> > worthless human being</D>
      <D c={c} t={65503} f={28898} q={95}><U>[%%RIIPPER%%]</U> > <U>[Mr Jim29 That’sme]</U> > WISH..i could slit your throat myself</D>
      <Pp bg="#ff3797, #38FF3A"><p>My celly buzzes around frantically on my desk from all of the notifications it’s getting. It’s already 2:00bt. My mind can't settle on any certain thought. I swallow air wrong and cough.</p></Pp>
      <D c={c} t={71197} f={50571} q={3113}><U>[AttractivHotMomma92299]</U> > <U>[Mr Jim29 That’sme]</U> > Nearby harlots BEGGING for a subsequent fling! -- Click here for the sexy new adventure. <U>tttp://h.ot/19489A9</U></D></div>
      );
    }
  }
}

export default Drips;
