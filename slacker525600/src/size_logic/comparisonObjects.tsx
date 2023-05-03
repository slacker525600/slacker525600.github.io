import { BabyComparisonObject } from '../babyTypes'
import React from 'react'

export const getComparisonTypes = (): string[] => {
  // get unique type labels from comparison objects
  return comparisonObjects.map(
    (val) => { return val.objectTypeLabel }
  ).filter(
    (value, index, self) => { return self.indexOf(value) === index }
  )
}

export const getValByCompType = (obj: BabyComparisonObject, comparisonType: string): number => {
  let toReturn = 0
  if (comparisonType === 'Length') {
    toReturn = obj.length
  } else if (comparisonType === 'Weight') {
    toReturn = obj.weight
  } else if (comparisonType === 'Volume') {
    toReturn = obj.volume
  }
  return toReturn
}

// should update this to build from csv for ease of migrating to db or other store
// weight (grams) length (cm) volume (ml) category name img link
const gothObjects: BabyComparisonObject[] = [
  new BabyComparisonObject(0.0, 0.0, 0.0, 'Goth', 'Emptiness', <a title="Miraceti, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Darkness.png"><img width="128" alt="Darkness" src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Darkness.png" /></a>),
  new BabyComparisonObject(0.0075, 0.00002, 0.0, 'Goth', '50 Tuberculosis bacteria', <a title="NIAID, CC BY 2.0 &lt;https://creativecommons.org/licenses/by/2.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Mycobacterium_tuberculosis_Bacteria,_the_Cause_of_TB_(5149398656).jpg"><img width="128" alt="Mycobacterium tuberculosis Bacteria, the Cause of TB (5149398656)" src="https://upload.wikimedia.org/wikipedia/commons/8/81/Mycobacterium_tuberculosis_Bacteria%2C_the_Cause_of_TB_%285149398656%29.jpg" /></a>),
  new BabyComparisonObject(0.5, 0.08, 0.5, 'Goth', 'several tears', <a title="User:Vassil, CC BY 3.0 &lt;https://creativecommons.org/licenses/by/3.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Mary_Magdalene_Crying_Statue.jpg"><img width="128" alt="Mary Magdalene Crying Statue" src="https://upload.wikimedia.org/wikipedia/commons/0/00/Mary_Magdalene_Crying_Statue.jpg" /></a>),
  new BabyComparisonObject(1.5, 0.2, 0.008, 'Goth', 'brown recluse spider', <a title="Br-recluse-guy, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Brown-recluse-2.jpg"><img width="128" alt="Brown-recluse-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Brown-recluse-2.jpg/512px-Brown-recluse-2.jpg" /></a>),
  new BabyComparisonObject(6.0, 2.4, 6.1, 'Goth', 'a human eyeball', <a title="Hariadhi, CC0, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Eyeball_dissection_hariadhi.svg"><img width="128" alt="Eyeball dissection hariadhi" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Eyeball_dissection_hariadhi.svg/512px-Eyeball_dissection_hariadhi.svg.png" /></a>),
  new BabyComparisonObject(55.0, 4.7, 41.0, 'Goth', 'a bottle of black nail polish', <a title="User:Matt.whitby at the English-language Wikipedia, CC BY-SA 3.0 &lt;http://creativecommons.org/licenses/by-sa/3.0/&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Nail_polish_bottle.jpg"><img width="128" alt="Nail polish bottle" src="https://upload.wikimedia.org/wikipedia/commons/3/38/Nail_polish_bottle.jpg" /></a>),
  new BabyComparisonObject(280.0, 8.5, 600.0, 'Goth', 'a human heart', <a title="Patrick J. Lynch, medical illustrator, CC BY 2.5 &lt;https://creativecommons.org/licenses/by/2.5&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Heart_anterior_exterior_view.jpg"><img width="128" alt="Heart anterior exterior view" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Heart_anterior_exterior_view.jpg/512px-Heart_anterior_exterior_view.jpg" /></a>),
  new BabyComparisonObject(56.0, 1.5, 50.0, 'Goth', 'a taper candle', <a title="Guillaume Paumier, CC BY 3.0 &lt;https://creativecommons.org/licenses/by/3.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Candles_on_the_Golgotha._Church_of_the_Holy_Sepulchre,_Jerusalem_018_-_Aug_2011.jpg"><img width="128" alt="Candles on the Golgotha. Church of the Holy Sepulchre, Jerusalem 018 - Aug 2011" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Candles_on_the_Golgotha._Church_of_the_Holy_Sepulchre%2C_Jerusalem_018_-_Aug_2011.jpg/512px-Candles_on_the_Golgotha._Church_of_the_Holy_Sepulchre%2C_Jerusalem_018_-_Aug_2011.jpg" /></a>),
  new BabyComparisonObject(195.0, 21.0, 378.0, 'Goth', 'a ouija board', <a title="Elijah Bond (1847–1921) and Charles Kennard (1856–1925), Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Ouija_board_-_Kennard_Novelty_Company.png"><img width="128" alt="Ouija board - Kennard Novelty Company" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Ouija_board_-_Kennard_Novelty_Company.png/512px-Ouija_board_-_Kennard_Novelty_Company.png" /></a>),
  new BabyComparisonObject(250.0, 12.0, 0.0, 'Goth', 'a small dagger', <a title="Metropolitan Museum of Art, CC0, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Dagger_MET_sf26-145-43s1.jpg"><img width="128" alt="Dagger MET sf26-145-43s1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Dagger_MET_sf26-145-43s1.jpg/256px-Dagger_MET_sf26-145-43s1.jpg" /></a>),
  new BabyComparisonObject(1345.0, 15.0, 1500.0, 'Goth', 'a human brain', <a title="Gaetan Lee from London, UK, CC BY 2.0 &lt;https://creativecommons.org/licenses/by/2.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Human_brain_in_a_vat.jpg"><img width="128" alt="Human brain in a vat" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Human_brain_in_a_vat.jpg/256px-Human_brain_in_a_vat.jpg" /></a>),
  new BabyComparisonObject(2250.0, 23.0, 5318.0, 'Goth', 'half of a black cat', <a title="The original uploader was DrL at English Wikipedia., CC BY-SA 2.5 &lt;https://creativecommons.org/licenses/by-sa/2.5&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Blackcat-Lilith.jpg"><img width="128" alt="Blackcat-Lilith" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Blackcat-Lilith.jpg" /></a>)
]

const homeObjects: BabyComparisonObject[] = [
  new BabyComparisonObject(0.0, 0.0, 0.0, 'Home', 'Emptiness', <a title="Miraceti, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Darkness.png"><img width="128" alt="Darkness" src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Darkness.png" /></a>),
  new BabyComparisonObject(0.0075, 0.00002, 0.052, 'Home', 'Grain of sand on the floor', <a></a>),
  new BabyComparisonObject(2, 2, 628, 'Home', 'watch battery', <a></a>),
  new BabyComparisonObject(13, 4.5, 3.89, 'Home', 'AAA battery', <a></a>),
  new BabyComparisonObject(24, 5.0, 8.48, 'Home', 'AA battery', <a></a>),
  new BabyComparisonObject(72.0, 5.2, 25.5, 'Home', 'C battery', <a></a>),
  new BabyComparisonObject(151, 6.2, 49.8, 'Home', 'D battery', <a></a>),
  new BabyComparisonObject(230, 9.2, 77.8, 'Home', 'F battery', <a></a>),
  new BabyComparisonObject(350, 10.7, 366.1, 'Home', 'Can of soup', <a></a>),
  new BabyComparisonObject(34, 10.4, 183.56, 'Home', '60-watt light bulb', <a></a>)
]

const officeObjects: BabyComparisonObject[] = [
  new BabyComparisonObject(0.0075, 0.00002, 0.0, 'Office', 'Grain of sand on the floor', <a></a>),
  new BabyComparisonObject(0.5, 0.8, 0.0, 'Office', 'index card', <a></a>),
  new BabyComparisonObject(0.5, 0.8, 0.0, 'Office', 'a single staple', <a></a>),
  new BabyComparisonObject(0.5, 0.8, 0.0, 'Office', 'a paperclip', <a></a>),
  new BabyComparisonObject(500, 16.2, 220, 'Office', 'a stapler', <a></a>)
]

const natureObjects: BabyComparisonObject[] = [
  new BabyComparisonObject(0.0075, 0.00002, 0.0, 'Nature', 'Grain of sand at the beach', <a></a>),
  new BabyComparisonObject(0.5, 0.8, 0.0, 'Nature', 'fruit fly', <a></a>),
  new BabyComparisonObject(0.5, 0.8, 0.0, 'Nature', '50 grains of sand', <a></a>),
  new BabyComparisonObject(0.5, 0.8, 0.0, 'Nature', 'your fingernail', <a></a>),
  new BabyComparisonObject(300, 11, 900, 'Nature', 'ponderosa pinecone', <a></a>),
  new BabyComparisonObject(0.5, 0.8, 0.0, 'Nature', 'earthworm', <a></a>),
  new BabyComparisonObject(0.5, 0.8, 0.0, 'Nature', 'mouse', <a></a>),
  new BabyComparisonObject(0.5, 0.8, 0.0, 'Nature', 'hamster', <a></a>),
  new BabyComparisonObject(0.5, 0.8, 0.0, 'Nature', 'chihuahua', <a></a>),
  new BabyComparisonObject(0.5, 0.8, 0.0, 'Nature', 'newborn baby', <a></a>)
]

const workshopObjects: BabyComparisonObject[] = [
  //   Tools: 'this tiny drill: http://gizmodo.com/5296077/freakishly-tiny-drill-inspires-us-to-believe-anything-is-possible-in-life',
  //   Tools: <a></a>,
  new BabyComparisonObject(0.5, 0.8, 0.0, 'Workshop', 'a finnishing nail', <a></a>),
  new BabyComparisonObject(0.0075, 0.00002, 0.0, 'Workshop', 'Single flake of sawdust', <a></a>)
]

const etcObjects: BabyComparisonObject[] = [
  new BabyComparisonObject(0.5, 0.8, 0.0, 'Etc', 'a raindrop', <a></a>)
]

export const comparisonObjects: BabyComparisonObject[] = [
  ...gothObjects,
  ...homeObjects,
  ...officeObjects,
  ...natureObjects,
  ...workshopObjects,
  ...etcObjects
]

export default comparisonObjects
