import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserCheckedTwoTone = ({
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
      d="M21.274 11.196q.036.399.036.806a8.83 8.83 0 0 1-8.83 8.83 8.83 8.83 0 1 1 1.1-17.591"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.123 6.187 1.806 1.81 3.721-3.724"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.14 19.69c.173-1.344 1.369-2.835 4.334-2.835 2.999 0 4.185 1.5 4.35 2.86"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.994 11.966a2.514 2.514 0 1 1-5.028 0 2.514 2.514 0 0 1 5.028 0"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystUserCheckedTwoTone;
