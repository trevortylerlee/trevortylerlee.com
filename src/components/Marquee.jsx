// import style from '../styles/Marquee.module.css'

export default function Marquee() {
  const possiblePokemon = {
    0: 'darkrai',
    1: 'gyarados',
    2: 'aerodactyl',
    3: 'lugia',
    4: 'tympole',
    5: 'hoppip',
    6: 'combee',
    7: 'geodude',
    8: 'jigglypuff',
    9: 'stunfisk',
    10: 'swablu',
    11: 'porygon-z',
    12: 'magikarp',
    13: 'drifloon',
    14: 'mantine',
    15: 'beedrill',
    16: 'weezing',
    17: 'yanma',
    18: 'magnezone',
    19: 'flygon',
    20: 'haunter',
    21: 'celebi',
    22: 'jirachi',
    23: 'mew',
  }

  const d = new Date()
  let hour = d.getHours()
  let pokemon = possiblePokemon[hour]

  return <>
    <marquee aria-hidden="true" scrolldelay='120' scrollamount='4'>
      <img src={`/pokemon/${pokemon}.gif`} alt={`${pokemon}`} />
    </marquee>
  </>
}