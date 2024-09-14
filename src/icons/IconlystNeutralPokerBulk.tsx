import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNeutralPokerBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.5 2.5C7.262 2.5 3 6.761 3 12s4.262 9.5 9.5 9.5S22 17.238 22 12s-4.261-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.725 13a.976.976 0 0 1-.692-1.661.978.978 0 0 1 1.668.687.976.976 0 0 1-.976.975M14.272 17.737h-3.543a.75.75 0 0 1 0-1.5h3.543a.75.75 0 0 1 0 1.5M9.225 13a.976.976 0 0 1-.692-1.661.978.978 0 0 1 1.668.687.976.976 0 0 1-.976.975"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNeutralPokerBulk;
