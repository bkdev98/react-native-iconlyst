import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiBrainFlashOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M13.907 22.27s-.09 0-.14-.01a.754.754 0 0 1-.6-.87c.04-.21.41-2.04 1.69-2.71.37-.19.82-.05 1.01.31.19.37.05.82-.31 1.01-.5.26-.83 1.23-.91 1.66a.75.75 0 0 1-.74.61"
    />
    <Path
      fill={props.color}
      d="m16.897 20.462-2.79-.63c-1.2-.26-1.41-1.24-1.56-1.96-.03-.15-.06-.31-.11-.46-.11-.4.12-.81.52-.92s.81.12.92.52c.05.19.09.37.13.55.15.72.21.76.42.8l2.79.63c.12.03.25.01.32-.04.06-.04.09-.11.11-.22l.31-2.62c.11-.59.48-1.03.99-1.23l.93-.36c-1.31-1.8-1.82-3.27-1.54-4.54.45-2.04-.24-3.75-2.17-5.38-1.14-.96-2.61-1.4-4.62-1.35-.41 0-.76-.32-.77-.73 0-.41.32-.76.73-.77 2.4-.04 4.19.49 5.62 1.7 2.37 2 3.24 4.24 2.66 6.85-.18.8.25 1.91 1.28 3.29.29.39.38.88.25 1.33s-.47.81-.92.99l-.93.36-.35 2.65c-.08.54-.34.97-.74 1.25-.393.275-1.012.378-1.48.29M5.207 22.03q-.15 0-.3-.06a.76.76 0 0 1-.39-.99c1.01-2.31.73-4.91-.85-7.73-.2-.36-.07-.82.29-1.02s.82-.07 1.02.29c1.79 3.21 2.11 6.35.92 9.07-.12.28-.4.45-.69.45zM6.668 11.183c-.12 0-.25-.02-.37-.06-.49-.16-.82-.61-.82-1.13v-1.8h-1.66c-.45 0-.85-.25-1.06-.65s-.17-.87.1-1.24l2.95-4.06c.3-.42.84-.59 1.33-.43s.82.61.82 1.13v1.8h1.66c.45 0 .85.25 1.06.65.2.4.17.87-.1 1.24l-2.95 4.06c-.23.31-.59.49-.96.49m-2.24-4.49h1.8c.41 0 .75.34.75.75v1.59l2.03-2.79h-1.8c-.41 0-.75-.34-.75-.75v-1.59z"
    />
  </Svg>
);
export default IconlystAiBrainFlashOutline;
