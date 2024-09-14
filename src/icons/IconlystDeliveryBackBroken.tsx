import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBackBroken = ({
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
      d="m21 10.353-.018-2.344c-.007-2.942-1.845-5.017-4.79-5.009l-8.426.02c-2.936.006-4.772 2.09-4.765 5.032l.01 3.97M3.02 15.99c.006 2.943 1.843 5.017 4.79 5.01l3.96-.02M18.005 14.248h.972a1.943 1.943 0 1 1 0 3.888h-4.87"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.053 16.165-1.944 1.943 1.944 1.944M14.827 6l.017 3.67-2.832-.923-2.849.939-.009-6.66"
    />
  </Svg>
);
export default IconlystDeliveryBackBroken;
