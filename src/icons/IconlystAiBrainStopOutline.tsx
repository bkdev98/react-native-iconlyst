import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiBrainStopOutline = ({
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
      d="M13.98 22.23s-.09 0-.14-.01a.746.746 0 0 1-.6-.87c.04-.21.41-2.04 1.69-2.71.37-.19.82-.05 1.01.31.19.37.05.82-.31 1.01-.51.27-.83 1.23-.91 1.66a.75.75 0 0 1-.74.61"
    />
    <Path
      fill={props.color}
      d="m16.97 20.42-2.8-.63c-1.2-.26-1.41-1.24-1.56-1.95-.03-.15-.06-.31-.11-.46-.11-.4.12-.81.52-.92.41-.11.81.12.92.52.05.19.09.37.13.55.15.72.21.76.42.8l2.79.63c.12.03.25.01.32-.04.06-.04.09-.11.11-.21l.31-2.62c.11-.6.48-1.04 1-1.23l.92-.36c-1.31-1.8-1.82-3.27-1.54-4.54.45-2.04-.24-3.75-2.17-5.38-1.14-.96-2.62-1.4-4.62-1.35-.39 0-.76-.32-.77-.73 0-.41.32-.76.73-.77 2.41-.04 4.19.49 5.62 1.7 2.37 2 3.24 4.24 2.66 6.85-.18.8.25 1.91 1.28 3.29.29.39.38.88.25 1.33s-.47.81-.92.99l-.93.36-.35 2.65c-.08.54-.34.97-.74 1.25-.435.305-.96.366-1.47.27M6.33 10.39c-1.04 0-2-.41-2.73-1.15-.29-.3-.29-.77.01-1.06s.77-.29 1.06.01c.44.45 1.03.7 1.66.7 1.28 0 2.32-1.04 2.32-2.33 0-.61-.24-1.19-.66-1.63-.29-.3-.29-.77.01-1.06s.77-.29 1.06.01c.71.72 1.09 1.67 1.09 2.68 0 2.11-1.72 3.83-3.82 3.83"
    />
    <Path
      fill={props.color}
      d="M4.14 9.47c-.19 0-.39-.08-.54-.23a3.78 3.78 0 0 1-1.09-2.68c0-2.11 1.72-3.83 3.83-3.83 1.04 0 2.01.41 2.73 1.15.29.3.29.77-.01 1.06s-.77.29-1.06-.01c-.44-.45-1.03-.7-1.66-.7a2.326 2.326 0 0 0-1.66 3.96.745.745 0 0 1-.53 1.27z"
    />
    <Path
      fill={props.color}
      d="M4.14 9.47c-.19 0-.39-.08-.54-.23-.29-.3-.29-.77.01-1.06L8 3.88c.3-.29.77-.29 1.06.01s.29.77-.01 1.06l-4.39 4.3c-.15.14-.34.21-.52.21zM5.28 22q-.15 0-.3-.06a.76.76 0 0 1-.39-.99c1.01-2.31.73-4.91-.85-7.74-.2-.36-.07-.82.29-1.02s.82-.07 1.02.29c1.79 3.21 2.11 6.35.92 9.07-.12.28-.4.45-.69.45"
    />
  </Svg>
);
export default IconlystAiBrainStopOutline;
