import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFullOutSquareHorizontalLight = ({
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
      d="M17.541 20.249H6.459c-2.75 0-4.461-1.942-4.461-4.69V8.44c0-2.747 1.711-4.689 4.462-4.689h11.081c2.75 0 4.461 1.942 4.461 4.69v7.119c0 2.747-1.72 4.688-4.461 4.688"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17 15-3-3 3-3M7 15l3-3-3-3"
    />
  </Svg>
);
export default IconlystFullOutSquareHorizontalLight;
