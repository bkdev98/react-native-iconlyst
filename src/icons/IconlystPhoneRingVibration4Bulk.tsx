import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneRingVibration4Bulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M5.39 6.268a.75.75 0 0 0-.936.497l-1.5 4.9a.75.75 0 0 0 1.435.44l1.5-4.9a.75.75 0 0 0-.498-.937M21.79 11.468a.75.75 0 0 0-.937.497l-1.5 4.899a.75.75 0 0 0 1.435.44l1.5-4.9a.75.75 0 0 0-.498-.936"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.69 6.064c-.46-.92-1.23-1.58-2.17-1.86l-4.41-1.4c-2-.59-4.16.53-4.72 2.43l-3.1 9.81c-.59 2 .53 4.16 2.43 4.72l4.38 1.39c.39.14.79.2 1.19.2.58 0 1.16-.13 1.7-.41.9-.46 1.58-1.27 1.86-2.21l3.1-9.81c.28-.94.18-1.98-.26-2.86"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.074 17.636c-.53 0-.95-.42-.95-.95 0-.54.5-.95.95-.95.53 0 .95.42.95.95 0 .54-.5.95-.95.95"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPhoneRingVibration4Bulk;
