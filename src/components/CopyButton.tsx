import { Button, Tooltip } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import style from '../styles/CopyButton.module.css'

export function CopyButton({value, label}) {
  const clipboard = useClipboard();

  return (
    <Tooltip
      label={label === 'trevortylerlee@gmail.com' ? 'Email copied!' : 'Phone number copied!'}
      offset={10}
      position="top"
      radius="md"
      color="blue"
      transition="pop"
      transitionDuration={100}
      withArrow
      opened={clipboard.copied}
    >
      <Button
        style={style}
        variant="default"
        radius='md'
        rightIcon={
          clipboard.copied ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M5 12l5 5l10 -10"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-copy" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <rect x="8" y="8" width="12" height="12" rx="2"></rect>
              <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
            </svg>
          )
        }
        size="md"
        styles={{
          root: { paddingRight: 14, height: 48 },
          rightIcon: { marginLeft: 24 },
        }}
        onClick={() => clipboard.copy(value)}
      >
        {label}
      </Button>
    </Tooltip>
  );
}

export default CopyButton