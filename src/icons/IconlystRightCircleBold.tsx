import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightCircleBold = ({
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
      d="M16.563 12.285a.7.7 0 0 1-.161.241l-.004.005-3.029 3.019a.747.747 0 0 1-1.061-.002.75.75 0 0 1 .002-1.06l1.746-1.741H8.129a.75.75 0 0 1 0-1.5h5.925L12.31 9.512a.751.751 0 0 1 1.059-1.064l3.028 3.015.005.005a.74.74 0 0 1 .219.529q-.001.154-.058.288M12 2.5c-5.239 0-9.5 4.262-9.5 9.5s4.261 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRightCircleBold;
