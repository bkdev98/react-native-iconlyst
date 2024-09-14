import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoatHanger4TwoTone = ({
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
      d="M16.404 20.21H8.589a1.28 1.28 0 0 1-1.28-1.28V16.56c0-.707.573-1.28 1.28-1.28h7.815c.707 0 1.28.573 1.28 1.28v2.368a1.28 1.28 0 0 1-1.28 1.28"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.322 5.984a2.204 2.204 0 0 1 2.8-2.115c.71.19 1.304.774 1.503 1.485a2.194 2.194 0 0 1-1.306 2.673c-.477.189-.8.63-.8 1.142v.487l7.568 3.131a2.292 2.292 0 0 1-.881 4.41h-1.521M7.307 17.198h-1.52A2.29 2.29 0 0 1 3.5 14.91v-.09a2.28 2.28 0 0 1 1.395-2.106l5.3-2.25"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCoatHanger4TwoTone;
