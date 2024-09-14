import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrophoneMuteBroken = ({
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
      d="M16.773 16.55a7.17 7.17 0 0 1-7.868.776M5.042 10.91v.019c0 1.924.753 3.674 1.982 4.97M9.223 4.604a3.66 3.66 0 0 1 6.685 2.054v4.226c0 .135-.009.261-.018.388M8.592 8.37v2.513a3.67 3.67 0 0 0 3.658 3.676c.72 0 1.387-.216 1.955-.576M19.459 19.234 5.043 4.818M12.252 21v-2.848M19.46 10.91a7.16 7.16 0 0 1-.74 3.19"
    />
  </Svg>
);
export default IconlystMicrophoneMuteBroken;
