import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClubPokerCardBroken = ({
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
      d="M15 21a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h3M16 6v.01M8 18v.01"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.674 14.275c-.46-.01-1.174-.105-1.701-.805m0 0c-.473.7-1.315.799-1.803.798a1.7 1.7 0 0 1-1.565-1.095 1.71 1.71 0 0 1 .92-2.147c.379-.162.777-.16 1.168-.059a1.72 1.72 0 0 1-.344-1.584 1.7 1.7 0 0 1 1.22-1.166 1.704 1.704 0 0 1 1.904.87c.315.611.215 1.366-.23 1.882a1.7 1.7 0 0 1 1.133.038c.787.308 1.209 1.172 1.03 1.962m-3.433.5c0 1.966.004 2.41.004 2.41"
    />
  </Svg>
);
export default IconlystClubPokerCardBroken;
