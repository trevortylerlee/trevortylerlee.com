import { CopyButton, Button } from '@mantine/core';
import style from '../styles/CopyButton.module.css';

function Demo({label, value}) {
  return (
    <CopyButton value={value}>
      {({ copied, copy }) => (
        <Button style={style} color={copied ? 'teal' : 'blue'} onClick={copy}>
          {copied ? 'Copied!' : `${label}`}
        </Button>
      )}
    </CopyButton>
  );
}

export default Demo