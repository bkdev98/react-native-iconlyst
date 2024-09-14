import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBowlingOutline = ({
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
      d="M12.25 3.75a8.25 8.25 0 1 1 0 16.5 8.25 8.25 0 0 1 0-16.5M22 12c0-5.385-4.365-9.75-9.75-9.75S2.5 6.615 2.5 12s4.365 9.75 9.75 9.75S22 17.385 22 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.195 11.03a1 1 0 1 1 2 0 1 1 0 0 1-2 0M15.322 9.02a1 1 0 1 1 2 0 1 1 0 0 1-2 0M12.195 6.825a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBowlingOutline;
