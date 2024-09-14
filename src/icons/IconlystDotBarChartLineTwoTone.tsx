import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDotBarChartLineTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.728 14.98a1.614 1.614 0 1 1-3.229 0 1.614 1.614 0 0 1 3.229 0M13.375 14.796a1.614 1.614 0 1 1 1.614 1.614 1.607 1.607 0 0 1-1.614-1.602zM11.705 9.258a1.614 1.614 0 1 1-3.228 0 1.614 1.614 0 0 1 3.227 0M21.5 9.258a1.614 1.614 0 1 1-3.228 0 1.614 1.614 0 0 1 3.228 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.763 10.416-2.68 3.198M13.892 13.617l-2.704-3.182M6.206 13.796l2.79-3.357"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDotBarChartLineTwoTone;
