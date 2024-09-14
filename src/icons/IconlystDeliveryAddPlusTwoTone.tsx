import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryAddPlusTwoTone = ({
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
      d="m21.35 11.63-.019-3.62c-.007-2.943-1.845-5.018-4.79-5.01l-8.425.02C5.18 3.025 3.344 5.11 3.35 8.051l.018 7.939c.007 2.942 1.844 5.016 4.79 5.009l3.961-.02M21.348 18.341h-5.319m2.66-2.66V21"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.177 3 .017 6.67-2.833-.923-2.848.939-.01-6.66"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDeliveryAddPlusTwoTone;
