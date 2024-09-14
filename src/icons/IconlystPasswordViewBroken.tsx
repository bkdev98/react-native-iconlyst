import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordViewBroken = ({
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
      d="M10.275 17.675H7.867c-2.847 0-4.618-2.01-4.618-4.854V8.905c0-2.844 1.78-4.854 4.618-4.854H8.6M20.632 11.067V8.905c0-2.844-1.772-4.854-4.619-4.854H11.94M17.544 20.598h.002c-1.525 0-2.921-1.095-3.707-2.925.786-1.827 2.182-2.923 3.705-2.923 1.526 0 2.92 1.096 3.707 2.923a6 6 0 0 1-.962 1.56M17.55 17.621v.01M11.94 10.813v-.064m-.26.05a.26.26 0 1 1 .521 0 .26.26 0 0 1-.52 0M15.844 10.813v-.064m-.259.05a.26.26 0 1 1 .523 0 .26.26 0 0 1-.523 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.035 10.813v-.064m-.259.05a.26.26 0 0 1 .26-.26.26.26 0 1 1-.26.26"
    />
  </Svg>
);
export default IconlystPasswordViewBroken;
