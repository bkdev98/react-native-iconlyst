import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCrossingDirectionsHorizontalRightSquareLight = ({
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
      d="M16.218 3H7.783C4.835 3 3 5.081 3 8.026v7.948C3 18.919 4.835 21 7.784 21h8.434C19.166 21 21 18.919 21 15.974V8.026C21 5.081 19.157 3 16.218 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.516 8.102h2.165v2.165M15.68 8.102l-7.362 7.362M15.68 13.732v2.166h-2.164M8.318 8.535l7.362 7.362"
    />
  </Svg>
);
export default IconlystCrossingDirectionsHorizontalRightSquareLight;
