import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBackward30sLight = ({
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
      d="M4.502 11.813a8.25 8.25 0 1 1 1.455 4.87"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3 9.8 1.28 2.221 2.208-1.274M8.924 10.555A1.445 1.445 0 1 1 10.37 12a1.446 1.446 0 1 1-1.446 1.445"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.54 14.846a1.685 1.685 0 0 1-1.684-1.685v-2.323a1.685 1.685 0 0 1 3.37 0v2.323c0 .93-.754 1.685-1.685 1.685"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBackward30sLight;
