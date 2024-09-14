import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRadarAiOutline = ({
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
      d="M16.594 4.464a.75.75 0 0 1 1.047-.17c4.316 3.116 5.29 9.141 2.175 13.458-3.115 4.316-9.14 5.29-13.457 2.175a9.64 9.64 0 0 1-3.93-8.97.75.75 0 0 1 1.49.178 8.14 8.14 0 1 0 12.845-5.624.75.75 0 0 1-.17-1.047"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.708 10.783a.75.75 0 0 1 .615.864 3.71 3.71 0 0 0 1.04 3.249 3.733 3.733 0 0 0 5.274 0 3.71 3.71 0 0 0 1.04-3.25.75.75 0 0 1 1.479-.247 5.21 5.21 0 0 1-1.458 4.557 5.23 5.23 0 0 1-7.396 0A5.21 5.21 0 0 1 6.844 11.4a.75.75 0 0 1 .864-.616"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 12.444a.75.75 0 0 1-.704-.49l-.127-.346a4 4 0 0 0-2.362-2.365l-.344-.127a.75.75 0 0 1 0-1.407l.344-.128a4 4 0 0 0 2.362-2.365l.127-.345a.75.75 0 0 1 1.407 0l.128.345a4 4 0 0 0 2.362 2.365l.344.128a.75.75 0 0 1 0 1.407l-.344.127a4 4 0 0 0-2.362 2.365l-.128.346a.75.75 0 0 1-.703.49m1.54-4.032A5.5 5.5 0 0 1 12 6.871a5.5 5.5 0 0 1-1.54 1.541c.61.406 1.134.93 1.54 1.542a5.5 5.5 0 0 1 1.54-1.542M5.709 6.725a.75.75 0 0 1-.718-.532 1.48 1.48 0 0 0-.986-.988.75.75 0 0 1 0-1.435c.472-.144.842-.514.986-.988a.75.75 0 0 1 1.435 0c.144.474.514.844.987.988a.75.75 0 0 1 0 1.435 1.48 1.48 0 0 0-.987.988.75.75 0 0 1-.717.532m.054-2.237-.054-.055-.055.055.055.054zM11.382 13.28a.75.75 0 0 1 .156 1.048l-5.871 7.928a.75.75 0 0 1-1.206-.893l5.872-7.928a.75.75 0 0 1 1.049-.156"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRadarAiOutline;
