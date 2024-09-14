import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystApplePodcastTwoTone = ({
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
      d="M13.806 15.382c.046.357.025.72.015 1.079-.11 1.239-.246 2.48-.514 3.696-.156.902-1.482 1.067-2.096.554-.235-.176-.31-.475-.372-.747-.165-.804-.268-1.62-.366-2.434-.068-.69-.15-1.384-.096-2.078.12-1.494 3.243-1.51 3.429-.07"
    />
    <Circle
      cx={12.103}
      cy={10.661}
      r={1.708}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.63 17.942q.614-.42 1.16-.965a8.187 8.187 0 1 0-9.721 1.395"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.102 14.317a5.16 5.16 0 1 0-8.205 0"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystApplePodcastTwoTone;
