import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSleepingTwoTone = ({
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
      d="M21.5 12a9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 9-9"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.62 14.29c.7.911 1.734 1.48 2.88 1.48s2.18-.569 2.88-1.48M9.57 10.005v-.051M9.523 9.8a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45M16.03 10.005v-.051m-.006-.153a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45M19.6 3.043l.095.154a7 7 0 0 0 2.251 2.25l.154.096-.154.095a7 7 0 0 0-2.25 2.251l-.096.154-.096-.154a7 7 0 0 0-2.25-2.25l-.154-.096.153-.095a7 7 0 0 0 2.251-2.251z"
    />
  </Svg>
);
export default IconlystSleepingTwoTone;
