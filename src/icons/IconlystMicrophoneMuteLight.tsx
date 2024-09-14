import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrophoneMuteLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.792 10.91v.019A7.227 7.227 0 0 0 12 18.154a7.17 7.17 0 0 0 4.523-1.604M8.973 4.604a3.66 3.66 0 0 1 6.685 2.054v4.226c0 .135-.009.261-.018.388"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.342 8.37v2.513A3.67 3.67 0 0 0 12 14.559c.72 0 1.387-.216 1.955-.576M19.209 19.234 4.793 4.818M12.002 21v-2.848M19.21 10.91a7.16 7.16 0 0 1-.74 3.19"
    />
  </Svg>
);
export default IconlystMicrophoneMuteLight;
