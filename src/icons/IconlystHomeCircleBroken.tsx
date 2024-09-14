import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomeCircleBroken = ({
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
      d="M15.593 13.448a3.092 3.092 0 1 1-6.184 0 3.092 3.092 0 0 1 6.184 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.055 8.206a2.97 2.97 0 0 0-1.092 2.298v7.174A3.32 3.32 0 0 0 7.285 21h10.43a3.32 3.32 0 0 0 3.322-3.322v-7.174c0-.89-.4-1.734-1.091-2.298l-5.575-4.54a2.964 2.964 0 0 0-3.742 0l-2.787 2.27"
    />
  </Svg>
);
export default IconlystHomeCircleBroken;
