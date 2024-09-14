import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoreCircleTwoTonesharp = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.469 14.847a3.469 3.469 0 1 1 0 6.938 3.469 3.469 0 0 1 0-6.938M18.031 14.847a3.469 3.469 0 1 1 0 6.938 3.469 3.469 0 0 1 0-6.938"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 3.285a3.469 3.469 0 1 1 0 6.937 3.469 3.469 0 0 1 0-6.937"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMoreCircleTwoTonesharp;
