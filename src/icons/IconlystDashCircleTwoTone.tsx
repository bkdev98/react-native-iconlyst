import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDashCircleTwoTone = ({
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
      d="M11.06 21a9 9 0 0 1-1.976-.547M6.627 18.957a8.4 8.4 0 0 1-1.2-1.209M3.99 15.263a8.8 8.8 0 0 1-.49-1.823M4.047 8.594A8.6 8.6 0 0 0 3.5 10.56M6.744 4.929a9 9 0 0 0-1.209 1.2M11.061 3a8.2 8.2 0 0 0-1.823.49"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.897 3.547A8.4 8.4 0 0 0 13.94 3M19.561 6.244a8 8 0 0 0-1.2-1.209M21.5 10.56a9 9 0 0 0-.488-1.832M21.5 13.44a9 9 0 0 1-.547 1.967M19.457 17.862a7.6 7.6 0 0 1-1.209 1.2M15.763 20.501A9 9 0 0 1 13.94 21"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDashCircleTwoTone;
