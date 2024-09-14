import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBackTwoTone = ({
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
      d="m21.5 10.353-.018-2.344c-.007-2.942-1.845-5.017-4.79-5.009l-8.426.02c-2.936.006-4.772 2.09-4.765 5.032l.018 7.939c.007 2.942 1.844 5.016 4.79 5.009l3.962-.02"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.505 14.248h.972a1.943 1.943 0 1 1 0 3.888h-4.87"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.553 16.165-1.944 1.943 1.944 1.944"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.327 3 .017 6.67-2.832-.923-2.849.939-.009-6.66"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDeliveryBackTwoTone;
