import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleOneBroken = ({
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
      d="M14.02 3.652 8.21 9.167a2.376 2.376 0 0 0 3.27 3.447L17.291 7.1a2.375 2.375 0 1 0-3.27-3.447"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.26 5.4v13.225a2.376 2.376 0 1 0 4.75 0V5.4a2.375 2.375 0 1 0-4.75 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGoogleOneBroken;
