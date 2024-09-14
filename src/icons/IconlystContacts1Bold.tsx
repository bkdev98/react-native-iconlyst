import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystContacts1Bold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.654 18.353h-7.85c-.29 0-.48-.2-.48-.48 0-1.63 1.34-3.35 4.4-3.35s4.4 1.72 4.4 3.35c0 .28-.19.48-.47.48m-3.93-11.01c1.63 0 2.97 1.34 2.97 2.97s-1.34 2.96-2.97 2.96c-1.62 0-2.96-1.33-2.96-2.96s1.34-2.97 2.96-2.97m3.48-4.05h-8.1c-3 0-4.9 1.6-5.1 4.5h-1.2c-.6 0-1 .4-1 1s.4 1 1 1h3.3c.4 0 .7-.2.9-.5.1.1.1.3.1.5 0 .6-.4 1-1 1h-2.2v5.2h-1.1c-.6 0-1 .4-1 1s.4 1 1 1h3.3c.4 0 .7-.2.9-.5.1.1.1.3.1.5 0 .6-.4 1-1 1h-1.9c.6 2.2 2.3 3.4 4.9 3.4h8c3.3 0 5.3-2 5.3-5.3v-8.5c0-3.3-1.9-5.3-5.2-5.3"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystContacts1Bold;
