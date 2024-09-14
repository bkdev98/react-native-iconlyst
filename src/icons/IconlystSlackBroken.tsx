import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSlackBroken = ({
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
      d="M14.38 18.235h1.382a1.381 1.381 0 1 1-1.383 1.382zM6.514 15.012V13.63H5.131a1.381 1.381 0 1 0 1.383 1.38M18.986 10.372h1.383a1.382 1.382 0 1 0-1.383-1.382zM11.12 4.383v1.381H9.737a1.382 1.382 0 1 1 1.383-1.381M5.132 8.527a1.381 1.381 0 1 0 0 2.764h4.606a1.38 1.38 0 0 0 1.381-1.378v-.005a1.38 1.38 0 0 0-1.377-1.38H7.437M20.367 15.473a1.382 1.382 0 0 0 0-2.762h-4.61c-.762 0-1.38.619-1.378 1.38v.005c0 .762.62 1.378 1.382 1.377h2.303M9.277 19.619a1.383 1.383 0 0 0 2.764 0v-4.611a1.38 1.38 0 0 0-1.382-1.377h-.003c-.762 0-1.38.62-1.379 1.38v2.304M16.223 4.383a1.382 1.382 0 0 0-2.764 0v4.61a1.38 1.38 0 0 0 1.382 1.378h.004a1.38 1.38 0 0 0 1.378-1.38V6.686"
    />
  </Svg>
);
export default IconlystSlackBroken;
