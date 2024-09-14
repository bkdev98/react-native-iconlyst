import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAnkrOutline = ({
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
      d="M3.941 13.318a.75.75 0 0 1 .75.75v1.35c0 .861.491 1.647 1.265 2.024l5.3 2.58a2.25 2.25 0 0 0 1.97 0l5.3-2.58a2.25 2.25 0 0 0 1.265-2.023v-1.35a.75.75 0 1 1 1.5 0v1.35a3.75 3.75 0 0 1-2.108 3.371l-5.3 2.581a3.75 3.75 0 0 1-3.284 0l-5.3-2.58a3.75 3.75 0 0 1-2.108-3.372v-1.35a.75.75 0 0 1 .75-.75M10.546 2.649a3.75 3.75 0 0 1 3.39 0l5.3 2.685a3.75 3.75 0 0 1 2.055 3.345v1.268a.75.75 0 1 1-1.5 0V8.68a2.25 2.25 0 0 0-1.233-2.007l-5.3-2.685a2.25 2.25 0 0 0-2.034 0l-5.3 2.685a2.25 2.25 0 0 0-1.233 2.007v1.268a.75.75 0 1 1-1.5 0V8.68a3.75 3.75 0 0 1 2.056-3.345z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.24 8.684a3.297 3.297 0 1 0 0 6.594 3.297 3.297 0 0 0 0-6.594M7.444 11.98a4.797 4.797 0 1 1 9.595 0 4.797 4.797 0 0 1-9.595 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.24 15.297a.75.75 0 0 1 .75.75v4.95a.75.75 0 1 1-1.5 0v-4.95a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAnkrOutline;
