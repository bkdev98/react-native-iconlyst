import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpaceStarsLight = ({
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
      d="m12.662 10.018 1.062-2.262 2.261-1.062-2.261-1.062-1.062-2.261-1.063 2.26-2.261 1.063 2.261 1.062zM6.438 17.179 7.5 14.917l2.261-1.062-2.26-1.062-1.063-2.262-1.062 2.262-2.262 1.062 2.262 1.062zM16.816 20.63l1.374-2.924 2.924-1.374-2.925-1.373-1.373-2.925-1.374 2.925-2.924 1.373 2.924 1.374zM9.267 19.602v.01M5.479 6.229v.01M19.867 9.001v.01"
    />
  </Svg>
);
export default IconlystSpaceStarsLight;
