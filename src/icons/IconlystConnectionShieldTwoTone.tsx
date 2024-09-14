import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystConnectionShieldTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 21.453s7.324-2.217 7.324-8.33c0-6.114.266-6.587-.322-7.18-.59-.594-6.041-2.49-7.002-2.49s-6.413 1.901-7.002 2.49c-.588.588-.321 1.065-.321 7.18 0 6.114 7.323 8.33 7.323 8.33"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12 16.45 4.202-3.053-1.605-4.94H9.403l-1.605 4.94z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 7.857v-4.36M16.208 10.95l3.118-1.21M7.799 10.95 4.68 9.74M14.615 15.889l2.063 2.804M9.405 15.889l-2.063 2.804"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystConnectionShieldTwoTone;
