import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleLeftBold = ({
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
      d="M11 18.002a1 1 0 0 1-.707-.293l-5-5a1 1 0 0 1 0-1.415l5-5a.999.999 0 1 1 1.414 1.413l-4.293 4.294 4.293 4.294A.999.999 0 0 1 11 18.002"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18 18.002a1 1 0 0 1-.707-.293l-5-5a1 1 0 0 1 0-1.415l5-5a.999.999 0 1 1 1.414 1.413l-4.293 4.294 4.293 4.294A.999.999 0 0 1 18 18.002"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDoubleLeftBold;
