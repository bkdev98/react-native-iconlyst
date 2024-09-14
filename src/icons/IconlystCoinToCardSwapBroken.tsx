import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoinToCardSwapBroken = ({
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
      d="M5.104 20.64c-1.297 0-2.103-.916-2.103-2.21v-3.497c0-1.296.81-2.21 2.103-2.21h5.344c1.297 0 2.104.914 2.104 2.21v3.497c0 1.294-.807 2.21-2.104 2.21H7.776M3 15.533h7.038M17.2 3.361a3.8 3.8 0 1 0 2.608 1.036M21 15.527a5.11 5.11 0 0 1-5.111 5.111l.606-1.633M3 8.47a5.11 5.11 0 0 1 5.11-5.11l-.606 1.632"
    />
  </Svg>
);
export default IconlystCoinToCardSwapBroken;
