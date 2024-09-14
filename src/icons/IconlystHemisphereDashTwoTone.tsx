import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHemisphereDashTwoTone = ({
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
      d="M20.94 18.008c-3.99 3.99-10.458 3.99-14.448 0s-3.99-10.46 0-14.45"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.94 18.008c1.596-1.596-.343-6.125-4.333-10.114-3.99-3.991-8.519-5.931-10.115-4.335M9.625 12.385c-1.13-1.297-2.034-2.611-2.664-3.83M15.813 17.469c-1.163-.617-2.408-1.479-3.64-2.543M20.942 18.008c-.438.437-1.096.609-1.903.545M5.946 5.46c-.063-.807.109-1.465.546-1.902"
    />
  </Svg>
);
export default IconlystHemisphereDashTwoTone;
