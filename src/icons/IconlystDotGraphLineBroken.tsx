import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDotGraphLineBroken = ({
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
      d="M5.114 13.743A1.614 1.614 0 1 0 3.5 12.129m13.103-.184a1.614 1.614 0 1 0-3.228 0v.012a1.607 1.607 0 0 0 1.614 1.602m-3.284-7.152a1.614 1.614 0 1 1-1.614-1.615M21.5 6.407a1.614 1.614 0 1 1-1.614-1.615m-1.123 2.773-2.68 3.199m-9.877.182 2.791-3.357m4.895 3.178-2.704-3.182M14.989 17.16v2.048m4.896-5.786v5.787m-9.795-5.787v5.787m-4.975-1.865v1.865"
    />
  </Svg>
);
export default IconlystDotGraphLineBroken;
