import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGraterBold = ({
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
      d="m16.014 4.57.206 1.66a2.81 2.81 0 0 1 2.31 2.458l1.077 9.69a2.81 2.81 0 0 1-2.794 3.122H7.187a2.81 2.81 0 0 1-2.794-3.122l1.076-9.69a2.81 2.81 0 0 1 2.31-2.459l.206-1.66c.17-1.494 1.445-2.319 2.778-2.319h2.474c1.333 0 2.608.825 2.777 2.32m-6.539.171c.065-.572.538-.991 1.288-.991h2.474c.75 0 1.223.419 1.287.991l.18 1.447H9.296l.178-1.438zm.81 3.928a.75.75 0 1 0 0 1.5h.051a.75.75 0 1 0 0-1.5zm3.32 0a.75.75 0 0 0 0 1.5h.068a.75.75 0 1 0 0-1.5zm-4.967 2.212a.75.75 0 0 0 0 1.5h.05a.75.75 0 0 0 0-1.5zm3.31 0a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5zm3.312 0a.75.75 0 0 0 0 1.5h.05a.75.75 0 0 0 0-1.5zm-4.974 2.213a.75.75 0 1 0 0 1.5h.05a.75.75 0 0 0 0-1.5zm3.32 0a.75.75 0 1 0 0 1.5h.067a.75.75 0 0 0 0-1.5zm-4.968 2.212a.75.75 0 0 0 0 1.5h.05a.75.75 0 1 0 0-1.5zm3.31 0a.75.75 0 0 0 0 1.5H12a.75.75 0 1 0 0-1.5zm3.312 0a.75.75 0 0 0 0 1.5h.05a.75.75 0 1 0 0-1.5zm-4.974 2.212a.75.75 0 0 0 0 1.5h.05a.75.75 0 0 0 0-1.5zm3.32 0a.75.75 0 0 0 0 1.5h.067a.75.75 0 0 0 0-1.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGraterBold;
