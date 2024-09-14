import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchLockBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m20.993 20.118-1.984-1.98a1.001 1.001 0 0 0-1.412 1.417l1.984 1.979a1 1 0 1 0 1.412-1.416"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M12.109 9.384v.306h-1.95v-.31a.975.975 0 0 1 1.95.004M9.729 11.093a.693.693 0 0 0-.693.693v1.576c0 .382.31.693.693.693h2.809c.382 0 .693-.31.693-.693v-1.576a.693.693 0 0 0-.693-.694z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.713 11.24a8.42 8.42 0 1 1 16.841 0 8.42 8.42 0 0 1-16.84 0m8.391-4.217a2.38 2.38 0 0 1 2.407 2.347v.559a2.1 2.1 0 0 1 1.122 1.857v1.576a2.096 2.096 0 0 1-2.095 2.095h-2.81a2.096 2.096 0 0 1-2.095-2.095v-1.576c0-.806.456-1.506 1.123-1.857v-.568a2.38 2.38 0 0 1 2.348-2.338"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchLockBold;
