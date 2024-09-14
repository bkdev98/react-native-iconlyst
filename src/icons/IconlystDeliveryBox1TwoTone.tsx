import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBox1TwoTone = ({
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
      d="M20.462 8.712v6.558c0 .869-.465 1.672-1.217 2.106l-5.679 3.279a2.43 2.43 0 0 1-2.433 0l-5.68-3.279a2.43 2.43 0 0 1-1.216-2.106V8.712c0-.87.464-1.673 1.217-2.108l5.679-3.279a2.44 2.44 0 0 1 2.433 0l5.68 3.28a2.43 2.43 0 0 1 1.216 2.107"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.775 5.046 7.772 4.496v2.74"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m4.574 7.465 7.772 4.496 7.771-4.496M12.352 21v-9.046"
    />
  </Svg>
);
export default IconlystDeliveryBox1TwoTone;
