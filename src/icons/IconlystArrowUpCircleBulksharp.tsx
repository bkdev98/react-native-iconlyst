import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowUpCircleBulksharp = ({
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
      d="M12.25 21.75c-5.376 0-9.75-4.374-9.75-9.75s4.374-9.75 9.75-9.75S22 6.624 22 12s-4.374 9.75-9.75 9.75"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m7.72 13.445 4.53-4.551 4.53 4.55-1.063 1.059-3.467-3.483-3.467 3.483z"
    />
  </Svg>
);
export default IconlystArrowUpCircleBulksharp;
