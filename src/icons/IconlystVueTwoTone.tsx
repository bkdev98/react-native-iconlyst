import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVueTwoTone = ({
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
      d="m20.87 6.02-7.188 12.45a1.942 1.942 0 0 1-3.364 0L3.13 6.02a.971.971 0 0 1 .841-1.457h4.832a1.5 1.5 0 0 1 1.3.75L12 8.599l1.898-3.286a1.5 1.5 0 0 1 1.299-.75h4.832a.97.97 0 0 1 .84 1.456"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.055 4.563 12 15.05 5.945 4.563"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystVueTwoTone;
