import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNeutralPokerBold = ({
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
      d="M15.225 13a.976.976 0 0 1-.692-1.662.978.978 0 0 1 1.668.687.976.976 0 0 1-.976.975m-1.453 4.736h-3.543a.75.75 0 0 1 0-1.5h3.543a.75.75 0 0 1 0 1.5M8.725 13a.976.976 0 0 1-.692-1.662.978.978 0 0 1 1.668.687.976.976 0 0 1-.976.975M12 2.5c-5.238 0-9.5 4.261-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.261-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNeutralPokerBold;
