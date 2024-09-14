import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquarespaceLight = ({
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
      d="M13.598 8.267 8.143 13.73a3.01 3.01 0 0 1-4.26 0v0a3.02 3.02 0 0 1 0-4.267L9.338 4"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6.143 11.468 5.455-5.463a3.01 3.01 0 0 1 4.26 0M10.402 15.733l5.455-5.463a3.01 3.01 0 0 1 4.26 0v0a3.02 3.02 0 0 1 0 4.267L14.662 20"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.858 12.535-5.455 5.463a3.01 3.01 0 0 1-4.26 0"
    />
  </Svg>
);
export default IconlystSquarespaceLight;
