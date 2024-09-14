import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCamp4Outline = ({
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
      fillRule="evenodd"
      d="M2.5 20.493a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5h-18a.75.75 0 0 1-.75-.75M12.246 10.345c.204 0 .4.083.541.23l1.187 1.236.935-.975a.75.75 0 0 1 1.082 1.039l-1.476 1.539a.75.75 0 0 1-1.082 0l-1.187-1.236-1.187 1.236a.75.75 0 0 1-1.084-.002l-1.467-1.539a.75.75 0 0 1 1.086-1.035l.926.972 1.185-1.235a.75.75 0 0 1 .541-.23"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 15.24a.75.75 0 0 1 .66.393l2.429 4.504a.75.75 0 1 1-1.32.712l-1.769-3.28-1.767 3.28a.75.75 0 1 1-1.32-.712l2.427-4.504a.75.75 0 0 1 .66-.394M13.638 2.847a.75.75 0 0 1 .304 1.016L4.789 20.846a.75.75 0 1 1-1.32-.712l9.153-16.983a.75.75 0 0 1 1.016-.304"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.865 2.847a.75.75 0 0 1 1.016.304l9.144 16.984a.75.75 0 1 1-1.32.71L10.56 3.864a.75.75 0 0 1 .304-1.016"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCamp4Outline;
