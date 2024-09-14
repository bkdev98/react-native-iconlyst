import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDelivery4Outline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M6.679 15.942a.75.75 0 0 1 .525-.212H10.2a.75.75 0 0 1 0 1.5H7.204a.753.753 0 0 1-.525-1.288"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m2.868 6.6.846-2.11a3.53 3.53 0 0 1 3.284-2.23h10.21c1.443 0 2.742.88 3.28 2.22l.849 2.11c.34.84.514 1.74.513 2.65l-.014 7.71c-.003 1.28-.287 2.48-.988 3.37-.724.92-1.814 1.42-3.196 1.42l-11.108-.02c-1.381 0-2.475-.5-3.203-1.43-.706-.89-.994-2.09-.991-3.38l.012-7.69c.001-.9.174-1.78.506-2.62m2.239-1.56v.01L4.26 7.16l-.038.1h7.128v-3.5H6.998a2.04 2.04 0 0 0-1.891 1.28m7.743-1.28v3.5h7.139l-.043-.11-.849-2.11a2.04 2.04 0 0 0-1.89-1.28zm7.48 5H3.882q-.02.228-.02.46l-.012 7.69v.01c-.003 1.08.244 1.91.67 2.44.402.52 1.034.86 2.027.86l11.11.02c.992 0 1.614-.34 2.012-.84.42-.54.665-1.36.667-2.45l.014-7.71q0-.24-.02-.48"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDelivery4Outline;
