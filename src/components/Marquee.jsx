// import style from '../styles/Marquee.module.css'

export default function Marquee() {
  const possiblePokemon = {
    0: 'weezing',
    1: 'yanma',
    2: 'magnezone',
    3: 'flygon',
    4: 'haunter',
    5: 'celebi',
    6: 'jirachi',
    7: 'mew',
    8: 'darkrai',
    9: 'gyarados',
    10: 'aerodactyl',
    11: 'lugia',
    12: 'tympole',
    13: 'hoppip',
    14: 'combee',
    15: 'geodude',
    16: 'jigglypuff',
    17: 'stunfisk',
    18: 'swablu',
    19: 'porygon-z',
    20: 'magikarp',
    21: 'drifloon',
    22: 'mantine',
    23: 'beedrill',
  }

  const d = new Date()
  let hour = d.getUTCHours()
  let pokemon = possiblePokemon[hour]

  return <>
    <marquee aria-hidden="true" scrolldelay='120' scrollamount='4'>
      <img src={`/pokemon/${pokemon}.gif`} alt={`${pokemon}`} />
    </marquee>
  </>
}