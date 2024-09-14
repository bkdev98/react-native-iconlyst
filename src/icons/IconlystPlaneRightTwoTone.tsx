import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneRightTwoTone = ({
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
      d="M20.979 3.521c-1.047-1.047-2.694-.327-3.618.503-.896.807-1.74 1.672-2.58 2.54-.293.301-.539.37-.947.217a210 210 0 0 0-4.881-1.742c-.712-.247-1.458-.32-2.1.139-.553.395-1.029.896-1.574 1.381l4.666 4.743-2.229 2.681-2.758-.273L3.5 15.168l3.644 2.187"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.978 3.521c1.046 1.046.328 2.693-.503 3.617-.807.896-1.673 1.74-2.54 2.582-.3.29-.37.537-.217.946a204 204 0 0 1 1.742 4.881c.247.712.32 1.458-.14 2.1-.394.552-.894 1.029-1.38 1.574l-4.744-4.667-2.694 2.216.287 2.771L9.33 21l-2.187-3.645"
    />
  </Svg>
);
export default IconlystPlaneRightTwoTone;
