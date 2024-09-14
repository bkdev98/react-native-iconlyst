import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCamp3Outline = ({
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
      d="M2.5 20.493a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5h-18a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.638 2.847a.75.75 0 0 1 .304 1.016L4.789 20.846a.75.75 0 1 1-1.32-.712l9.153-16.983a.75.75 0 0 1 1.016-.304M12.25 15.24a.75.75 0 0 1 .66.393l2.429 4.504a.75.75 0 1 1-1.32.712l-1.769-3.28-1.767 3.28a.75.75 0 1 1-1.32-.712l2.427-4.504a.75.75 0 0 1 .66-.394"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.865 2.847a.75.75 0 0 1 1.016.304l9.144 16.984a.75.75 0 1 1-1.32.71L10.56 3.864a.75.75 0 0 1 .304-1.016"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.97 11.998a.75.75 0 0 1 .75-.75h6.908a.75.75 0 1 1 0 1.5H8.72a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCamp3Outline;
