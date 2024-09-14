import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowRightCircleBulksharp = ({
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
      d="M2.5 12c0 5.376 4.374 9.75 9.75 9.75S22 17.376 22 12s-4.374-9.75-9.75-9.75S2.5 6.624 2.5 12"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M10.805 16.53 15.356 12l-4.55-4.53-1.059 1.063L13.23 12l-3.483 3.467z"
    />
  </Svg>
);
export default IconlystArrowRightCircleBulksharp;
