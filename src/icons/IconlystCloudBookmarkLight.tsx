import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudBookmarkLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.564 16.544A4.14 4.14 0 0 0 21 12.769c0-2.595-1.83-4.139-4.103-4.14 0-1.632-1.28-4.899-4.897-4.899s-4.897 3.267-4.897 4.9C4.833 8.648 3 10.172 3 12.77c0 1.679 1 3.125 2.436 3.774"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.752 14.818c0-.97-.662-1.357-1.616-1.357h-2.238c-.924 0-1.617.362-1.617 1.292v5.185a.334.334 0 0 0 .498.291l2.249-1.26 2.227 1.258a.334.334 0 0 0 .5-.291z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudBookmarkLight;
