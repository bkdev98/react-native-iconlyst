import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleUpOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M16.856 11.565a.75.75 0 0 1-1.058-.072L12 7.14 8.2 11.493a.75.75 0 1 1-1.13-.986l4.364-5a.75.75 0 0 1 1.13 0l4.363 5a.75.75 0 0 1-.072 1.058M17.046 18.31a.75.75 0 0 1-.683.44H7.636a.75.75 0 0 1-.565-1.243l4.364-5a.75.75 0 0 1 1.13 0l4.363 5a.75.75 0 0 1 .118.803m-2.333-1.06L12 14.14l-2.714 3.11z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDoubleUpOutline;
