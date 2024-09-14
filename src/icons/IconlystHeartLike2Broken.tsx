import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartLike2Broken = ({
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
      d="M21.149 11.828c1.017-3.177-.18-6.805-3.513-7.878-1.752-.55-3.994.024-5.135 2.185A4.32 4.32 0 0 0 7.356 3.95c-3.333 1.073-4.52 4.701-3.504 7.878 1.637 5.088 7.353 8.417 8.649 8.417 1.041 0 4.97-2.187 7.295-5.654"
    />
  </Svg>
);
export default IconlystHeartLike2Broken;
