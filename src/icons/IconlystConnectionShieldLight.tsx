import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystConnectionShieldLight = ({
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
      d="M12 21.453s7.324-2.218 7.324-8.331.266-6.587-.322-7.18c-.59-.593-6.041-2.49-7.002-2.49s-6.413 1.902-7.002 2.49-.321 1.066-.321 7.18S12 21.452 12 21.452"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12 16.449 4.202-3.053-1.605-4.94H9.403l-1.605 4.94zM12 7.857v-4.36M16.208 10.949l3.118-1.21M7.799 10.949 4.68 9.739M14.615 15.888l2.063 2.804M9.405 15.888l-2.063 2.804"
    />
  </Svg>
);
export default IconlystConnectionShieldLight;
