import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleLeftOutline = ({
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
      d="M11.565 7.144a.75.75 0 0 1-.072 1.058L7.141 12l4.352 3.799a.75.75 0 0 1-.986 1.13l-5-4.364a.75.75 0 0 1 0-1.13l5-4.363a.75.75 0 0 1 1.058.072M18.31 6.954a.75.75 0 0 1 .44.683v8.727a.75.75 0 0 1-1.243.565l-5-4.364a.75.75 0 0 1 0-1.13l5-4.363a.75.75 0 0 1 .803-.118m-1.06 2.333L14.14 12l3.11 2.714z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDoubleLeftOutline;
