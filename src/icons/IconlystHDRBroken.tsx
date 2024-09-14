import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHDRBroken = ({
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
      d="M2.526 8.64v6.719M2.527 12.001h4.479M7.008 8.64v6.719M10.366 15.359V8.641h1.12a3.359 3.359 0 0 1 1.425 6.402M17.718 12.663h2.292a1.991 1.991 0 0 0 0-3.983h-2.292v6.637M21.433 15.314l-1.61-2.654"
    />
  </Svg>
);
export default IconlystHDRBroken;
