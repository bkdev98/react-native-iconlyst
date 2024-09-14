import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeadphoneTwoTone = ({
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
      d="M5.279 13.323a3.56 3.56 0 0 0-1.66 4.01 3.53 3.53 0 0 0 3.276 2.617c.943.04 1.653-.855 1.434-1.773l-.943-3.936c-.222-.93-1.28-1.397-2.107-.918M19.72 13.323a3.56 3.56 0 0 1 1.66 4.01 3.53 3.53 0 0 1-3.276 2.617c-.942.04-1.652-.855-1.433-1.773l.942-3.936c.222-.93 1.28-1.397 2.107-.918"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.125 13.593v-1.92a7.625 7.625 0 0 0-15.25 0v1.92"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystHeadphoneTwoTone;
