import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinRemoveBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M20.559 18.655 4.501 2.595a.749.749 0 1 0-1.06 1.06l2.16 2.16a8 8 0 0 0-1.627 4.84c0 5.635 6.593 10.97 8.028 10.97.935 0 3.346-1.814 5.232-4.175l2.264 2.266a.751.751 0 0 0 1.061-1.061"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.82 13.219a.5.5 0 0 0 .83-.201 7.7 7.7 0 0 0 .375-2.361c0-4.427-3.6-8.028-8.027-8.028-.859 0-1.66.128-2.384.379a.5.5 0 0 0-.189.826z"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPinRemoveBulk;
