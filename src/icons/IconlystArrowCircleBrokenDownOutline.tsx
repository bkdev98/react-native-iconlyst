import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowCircleBrokenDownOutline = ({
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
      d="M12.001 21.682a.75.75 0 0 1-.75-.75v-10.61l-1.739 1.746A.75.75 0 0 1 8.45 11.01l3.02-3.03a.75.75 0 0 1 1.063 0l3.018 3.03a.75.75 0 0 1-1.063 1.059l-1.737-1.744v10.608a.75.75 0 0 1-.75.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.238 19.978a.75.75 0 0 1 .224-1.037 8.25 8.25 0 1 0-8.924 0 .75.75 0 0 1-.812 1.26A9.74 9.74 0 0 1 2.25 12c0-5.384 4.365-9.75 9.75-9.75s9.75 4.366 9.75 9.75a9.74 9.74 0 0 1-4.476 8.202.75.75 0 0 1-1.037-.225"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowCircleBrokenDownOutline;
