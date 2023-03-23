import style from '../styles/Name.module.css';
import Toastify from './Toastify';
import toast from 'react-hot-toast';

function Name() {

  let emojis = [
    '¯\\_(ツ)_/¯',
    'ʘ‿ʘ',
    '•‿•',
    'ಥ‿ಥ',
    '◕‿↼',
    '(-■_■)',
    'ヽ(。_°)ノ',
    '(ಠ_ಠ)',
    '(╯°□°)╯︵ ┻━┻',
    '┳━┳ ヽ(ಠل͜ಠ)ﾉ',
    '(^._.^)ﾉ',
    '( ͡° ͜ʖ ͡°)',
    '⌐◨-◨',
    '☺',
    '☹',
    '♡',
    '✼',
    '✿',
    '❀',
    '❁',
    '❃',
    '❋',
    '❤',
    '♥‿♥',
    '(ಥ_ಥ)',
    'ヽ༼ຈل͜ຈ༽ﾉ',
    '⊙﹏⊙',
    '◔ ⌣ ◔',
    ':‑)',
    ':^)',
    'xD',
    ':-))',
    '>:(',
    ':‑)',
    ':P',
    ':/',
    '</3',
    'x_x',
    'o_O',
    '(◕‿◕✿)',
    '(-_-)zzz',
    '(/◕ヮ◕)/',
    '_(._.)_',
    '(·ω·)',
    ';_;',
    '(ー_ー)!!',
    '(=_=)',
    '(._.)',
    '(*_*)',
    '(@_@)',
    'ˊ＿>ˋ',
    'ᕕ( ᐛ )ᕗ',
    'UwU',
    'OwO',
    '☆彡',
    'ヽ(´ー｀)ﾉ',
    'ヽ(`Д´)ﾉ',
    '☜(ﾟヮﾟ☜)',
  ];

  let positions = [
    'top-left',
    'top-center',
    'top-right',
    'bottom-left',
    'bottom-right',
  ]

  let colors = [
    'blue',
    '#FF0080'
  ]

  const notify = () => {
    let emoji = emojis[Math.floor(Math.random() * emojis.length)];
    let position = positions[Math.floor(Math.random() * positions.length)];
    let color = colors[Math.floor(Math.random() * colors.length)];
    toast(emoji, {
      position: position,
      style: {
        background: color,
      }
    })
  }

  return (
    <button className={style.button} onClick={notify}>
      <h1 className={style.name} data-text="Trevor Lee">Trevor Lee</h1>
    </button>
  );
}

export default Toastify(Name);
