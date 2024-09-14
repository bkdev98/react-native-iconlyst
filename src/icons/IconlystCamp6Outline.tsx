import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCamp6Outline = ({
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
      d="M13.639 2.847a.75.75 0 0 1 .304 1.016L4.79 20.846a.75.75 0 1 1-1.32-.712l9.153-16.983a.75.75 0 0 1 1.016-.304"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 20.493a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5h-18a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.865 2.847a.75.75 0 0 1 1.016.304l9.144 16.984a.75.75 0 1 1-1.32.71L10.56 3.864a.75.75 0 0 1 .304-1.016M12.252 13.639a.75.75 0 0 1 .66.394l3.29 6.104a.75.75 0 0 1-1.32.712l-2.63-4.88-2.63 4.88a.75.75 0 0 1-1.321-.712l3.29-6.104a.75.75 0 0 1 .66-.394"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.977 12.083a.75.75 0 0 1 .75-.75h7.106a.75.75 0 0 1 0 1.5H8.727a.75.75 0 0 1-.75-.75M9.338 9.502a.75.75 0 0 1 .75-.75h4.329a.75.75 0 1 1 0 1.5h-4.33a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCamp6Outline;
