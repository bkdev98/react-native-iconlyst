import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTreadingHouseUpOutline = ({
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
      d="M16.793 11.046a.75.75 0 0 1 .134 1.052l-2.406 3.105a.75.75 0 0 1-1.056.13L11.256 13.6l-1.997 2.594a.75.75 0 1 1-1.188-.915l2.458-3.194a.75.75 0 0 1 1.058-.133l2.21 1.736 1.944-2.509a.75.75 0 0 1 1.052-.133"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.004 8.143a.75.75 0 0 0-.75.75v8.675a2.314 2.314 0 0 1-2.314 2.313H8.06a2.314 2.314 0 0 1-2.313-2.313V8.893a.75.75 0 1 0-1.5 0v8.675A3.814 3.814 0 0 0 8.06 21.38h8.879a3.814 3.814 0 0 0 3.814-3.813V8.893a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.44 3.527a3.13 3.13 0 0 0-3.88 0L3.035 9.485a.75.75 0 0 0 .931 1.176l7.526-5.957a1.63 1.63 0 0 1 2.018 0l7.526 5.957a.75.75 0 0 0 .93-1.176z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTreadingHouseUpOutline;
