import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaypalTwoTone = ({
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
      d="M10.063 12.998h2.475a5 5 0 1 0 0-9.998H8.42a2.42 2.42 0 0 0-2.39 2.042L4.011 17.845A1 1 0 0 0 5 19.001h2c.649 0 1.2-.472 1.301-1.113l.617-3.912a1.16 1.16 0 0 1 1.146-.978"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.297 17.898 7.87 20.42a.5.5 0 0 0 .495.577l2.712.002a1 1 0 0 0 .99-.844l.574-3.65h2.609a5 5 0 0 0 4.938-4.221 4.99 4.99 0 0 0-2.472-5.122l-.266-.146"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPaypalTwoTone;
