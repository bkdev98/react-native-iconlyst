import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDashCircleLight = ({
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
      d="M10.56 21a9 9 0 0 1-1.976-.547M6.127 18.957a8.4 8.4 0 0 1-1.2-1.209M3.49 15.263A8.8 8.8 0 0 1 3 13.44M3.547 8.594A8.6 8.6 0 0 0 3 10.56M6.244 4.929a9 9 0 0 0-1.209 1.2M10.561 3a8.2 8.2 0 0 0-1.823.49M15.397 3.547A8.4 8.4 0 0 0 13.44 3M19.061 6.244a8 8 0 0 0-1.2-1.209M21 10.56a9 9 0 0 0-.488-1.832M21 13.44a9 9 0 0 1-.547 1.967M18.957 17.862a7.6 7.6 0 0 1-1.209 1.2M15.263 20.501A9 9 0 0 1 13.44 21"
    />
  </Svg>
);
export default IconlystDashCircleLight;
