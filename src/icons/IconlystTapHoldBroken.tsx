import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTapHoldBroken = ({
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
      d="M12.088 21.459c-2.174.197-4.512-.312-5.581-1.641-1.173-1.459-2.085-3.23-2.66-4.817-.308-.851.144-1.769.989-2.093a1.735 1.735 0 0 1 2.05.636l1.136 1.647V6.087a1.587 1.587 0 0 1 3.174-.024l.063 4.106c2.22.212 5.437.097 6.335 2.521.904 2.44.014 5.669-1.57 7.252"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.284 7.575a3.9 3.9 0 0 1-.235-1.338c0-2.064 1.593-3.737 3.558-3.737s3.558 1.673 3.558 3.737c0 1.379-.712 2.584-1.771 3.232M15.532 4.845A2.5 2.5 0 1 0 17.75 3.5"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.75 5.258V6l.64.517"
    />
  </Svg>
);
export default IconlystTapHoldBroken;
