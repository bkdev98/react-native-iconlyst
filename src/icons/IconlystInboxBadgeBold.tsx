import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInboxBadgeBold = ({
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
      d="M21.39 12.86a.2.2 0 0 1-.2.2H16.6c-1.18 0-2.24.66-2.76 1.72a2.16 2.16 0 0 1-1.95 1.21c-.83 0-1.58-.46-1.95-1.21a3.06 3.06 0 0 0-2.76-1.72H2.59a.2.2 0 0 1-.2-.2V8.97c0-3.32 2.12-5.55 5.28-5.55h7.794c.142 0 .24.143.196.278a4.13 4.13 0 0 0 3.93 5.361 4.1 4.1 0 0 0 1.5-.283c.137-.054.291.042.292.189.002.757.008 2.703.009 3.895"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.6 14.56h4.59c.111 0 .2.089.2.2v2.18c0 3.32-2.12 5.55-5.28 5.55H7.67c-3.16 0-5.28-2.23-5.28-5.55v-2.18c0-.111.09-.2.2-.2h4.59c.6 0 1.15.34 1.42.88a3.63 3.63 0 0 0 3.29 2.05c1.4 0 2.67-.78 3.29-2.05.27-.54.81-.88 1.42-.88M19.59 2.3c-.94 0-1.77.5-2.22 1.25-.26.4-.4.88-.4 1.38 0 1.45 1.17 2.63 2.62 2.63.57 0 1.1-.18 1.53-.5.66-.48 1.09-1.25 1.09-2.13 0-1.45-1.18-2.63-2.62-2.63"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystInboxBadgeBold;
