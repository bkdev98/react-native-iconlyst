import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTreadingHouseDownOutline = ({
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
      d="M8.207 11.046a.75.75 0 0 0-.133 1.052l2.405 3.105a.75.75 0 0 0 1.056.13l2.209-1.733 1.997 2.594a.75.75 0 1 0 1.188-.915l-2.458-3.194a.75.75 0 0 0-1.058-.133l-2.21 1.736-1.944-2.509a.75.75 0 0 0-1.052-.133"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.996 8.145a.75.75 0 0 1 .75.75v8.675a2.314 2.314 0 0 0 2.314 2.313h8.88a2.314 2.314 0 0 0 2.313-2.313V8.895a.75.75 0 0 1 1.5 0v8.675a3.814 3.814 0 0 1-3.814 3.813H8.06a3.814 3.814 0 0 1-3.814-3.813V8.895a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.56 3.53a3.13 3.13 0 0 1 3.88 0l7.525 5.957a.75.75 0 1 1-.93 1.176l-7.526-5.957a1.63 1.63 0 0 0-2.018 0l-7.525 5.957a.75.75 0 0 1-.931-1.176z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTreadingHouseDownOutline;
