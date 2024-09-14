import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerCloudTwoTone = ({
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
      stroke="#CA6FEB"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.5 12.325V7.782C21.5 4.842 19.419 3 16.474 3H8.526C5.581 3 3.5 4.834 3.5 7.782v8.434C3.5 19.165 5.581 21 8.526 21h.917M12.72 12H3.523"
    />
    <Path
      stroke="#CA6FEB"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.863 16.135h.523M7.863 7.865h.523m4.216 0h4.534"
      opacity={0.4}
    />
    <Path
      stroke="#CA6FEB"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.105 16.796c-1.156.011-2.09.788-2.09 2.109a2.11 2.11 0 0 0 1.241 1.922c.308.125.614.173.847.173h4.987c.233 0 .541-.046.852-.17a2.11 2.11 0 0 0 1.239-1.925c0-1.321-.933-2.098-2.089-2.109 0-.83-.652-2.493-2.494-2.493-1.841 0-2.493 1.662-2.493 2.493"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystServerCloudTwoTone;
