import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDelete2Outlinesharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.544 6.34h17.412l-1.561 16.299H5.105zm1.65 1.5 1.274 13.299h11.563l1.274-13.3z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.3 2.639h7.9l1.474 4.475-1.425.469-1.134-3.444h-5.73L8.253 7.583l-1.424-.469zM13.001 11.252v6.473h-1.5v-6.473z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDelete2Outlinesharp;
