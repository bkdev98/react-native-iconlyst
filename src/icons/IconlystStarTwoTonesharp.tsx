import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarTwoTonesharp = ({
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
      strokeWidth={1.5}
      d="M12.25 2.75A12.87 12.87 0 0 0 21.5 12a12.87 12.87 0 0 0-9.25 9.25A12.87 12.87 0 0 0 3 12a12.87 12.87 0 0 0 9.25-9.25Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M19.001 2.75c0 1.148 1.32 2.498 2.499 2.498C20.275 5.248 19 6.585 19 7.747c0-1.17-1.353-2.499-2.498-2.499 1.19 0 2.498-1.35 2.498-2.498Z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystStarTwoTonesharp;
