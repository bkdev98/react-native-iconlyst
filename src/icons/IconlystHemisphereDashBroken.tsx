import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHemisphereDashBroken = ({
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
      d="M6.492 18.008c-3.99-3.99-3.99-10.46 0-14.45M20.94 18.008a10.22 10.22 0 0 1-11.203 2.189M16.607 7.894c3.99 3.99 5.93 8.518 4.334 10.113M6.492 3.559c1.157-1.157 3.855-.456 6.772 1.538M9.625 12.385c-1.13-1.297-2.034-2.611-2.664-3.83M15.813 17.469c-1.163-.617-2.408-1.479-3.64-2.543"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.942 18.008c-.438.437-1.096.609-1.903.545M5.946 5.46c-.063-.807.109-1.465.546-1.902"
    />
  </Svg>
);
export default IconlystHemisphereDashBroken;
