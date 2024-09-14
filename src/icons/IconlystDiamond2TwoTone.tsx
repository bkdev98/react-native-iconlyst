import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiamond2TwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.506 3a.77.77 0 0 0-.708.447L9.42 8.545a.77.77 0 0 1-.375.374l-5.098 2.38a.774.774 0 0 0 0 1.402l5.098 2.38a.77.77 0 0 1 .375.374l2.378 5.098c.14.3.425.45.708.447"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.506 3c.28.002.557.151.695.447l2.38 5.098a.77.77 0 0 0 .374.374l5.098 2.38a.774.774 0 0 1 0 1.402l-5.098 2.38a.77.77 0 0 0-.374.374l-2.38 5.098a.76.76 0 0 1-.695.447"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDiamond2TwoTone;
