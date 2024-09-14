import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailLockBulk = ({
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
      fillRule="evenodd"
      d="M14.564 14.752a.33.33 0 0 0 .088-.185c.26-2.07 1.948-3.645 4.051-3.692h.046c.52 0 1.013.101 1.47.276.209.08.447-.066.447-.29V8.334c0-3.14-2.185-5.51-5.082-5.51H6.748c-2.898 0-5.082 2.37-5.082 5.51v6.181c0 1.617.57 3.076 1.604 4.106.922.918 2.118 1.403 3.456 1.403h6.502c.197 0 .34-.187.304-.38a3.4 3.4 0 0 1-.059-.62v-1.58c0-1.044.416-1.992 1.09-2.692"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12.953 12.419a2.802 2.802 0 0 1-3.515.004L5.402 9.17a.75.75 0 0 1 .942-1.168l4.033 3.25a1.31 1.31 0 0 0 1.635-.002l3.994-3.246a.75.75 0 0 1 .946 1.164z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.211 15.027v.551a2.13 2.13 0 0 1 1.123 1.87v1.58a2.15 2.15 0 0 1-2.148 2.15H17.37a2.15 2.15 0 0 1-2.148-2.15v-1.58c0-.81.459-1.509 1.127-1.872v-.539a2.44 2.44 0 0 1 2.393-2.41h.027a2.44 2.44 0 0 1 2.442 2.4m-1.025 4.65a.643.643 0 0 0 .648-.65v-1.58a.645.645 0 0 0-.648-.64H17.37a.645.645 0 0 0-.648.64v1.58c0 .364.285.65.648.65zm-1.409-5.55h-.01a.94.94 0 0 0-.918.923v.257h1.862v-.27a.93.93 0 0 0-.934-.91"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEmailLockBulk;
