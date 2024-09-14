import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHorizontalBarChart2Outline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M4.499 21.868a.75.75 0 0 0 .75-.75v-18a.75.75 0 1 0-1.5 0v18c0 .414.336.75.75.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.75 4.918a.75.75 0 0 1 .75-.75h5.001c.938 0 1.75.737 1.75 1.71V9.72a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1 0-1.5h5.25V5.88c0-.088-.082-.21-.25-.21h-5a.75.75 0 0 1-.75-.75M4.5 13.768h11a.75.75 0 0 1 .75.75v3.84c0 .973-.812 1.71-1.75 1.71h-10a.75.75 0 0 1 0-1.5h10c.168 0 .25-.122.25-.21v-3.09H4.5a.75.75 0 0 1 0-1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.749 9.717a.75.75 0 0 1 .75-.75H19.5c.938 0 1.75.737 1.75 1.71v2.88c0 .974-.812 1.711-1.75 1.711H4.5a.75.75 0 0 1 0-1.5H19.5c.168 0 .25-.122.25-.21v-2.88c0-.088-.082-.21-.25-.21H4.5a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHorizontalBarChart2Outline;
