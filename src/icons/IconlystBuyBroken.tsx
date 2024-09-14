import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBuyBroken = ({
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
      d="M9 7.099s11.037.005 11.101.014a1.34 1.34 0 0 1 1.135 1.519l-.949 6.558a1.8 1.8 0 0 1-1.785 1.546H12.5M2.75 3.25l2.08.36.963 11.473a1.8 1.8 0 0 0 1.8 1.653h1.18M14.125 10.795h2.773"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.154 20.203a.544.544 0 1 1 0 1.087.544.544 0 0 1 0-1.087M18.435 20.203a.545.545 0 1 1 0 1.09.545.545 0 0 1 0-1.09"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBuyBroken;
