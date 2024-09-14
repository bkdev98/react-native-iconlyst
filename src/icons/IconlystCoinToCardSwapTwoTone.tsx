import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoinToCardSwapTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.948 12.723H5.604c-1.293 0-2.103.914-2.103 2.21v3.497c0 1.294.806 2.21 2.103 2.21h5.344c1.297 0 2.104-.916 2.104-2.21v-3.497c0-1.296-.807-2.21-2.104-2.21"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.5 15.533h9.552"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.5 7.16a3.8 3.8 0 1 0-7.598 0 3.8 3.8 0 0 0 7.598 0"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.5 15.527a5.11 5.11 0 0 1-5.111 5.111l.606-1.633M3.5 8.47a5.11 5.11 0 0 1 5.11-5.11l-.606 1.632"
    />
  </Svg>
);
export default IconlystCoinToCardSwapTwoTone;
