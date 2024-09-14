import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbDislike5TwoTone = ({
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
      d="M20.767 15.523c-1.037 0-1.555 0-1.952-.198a1.9 1.9 0 0 1-.842-.842c-.198-.397-.198-.915-.198-1.952V6.493c0-1.036 0-1.554.198-1.952.182-.364.478-.66.842-.842.397-.198.915-.198 1.952-.198"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.773 14.268c-1.43 0-3.602 1.51-4.447 5.31-.109.488-.234.727-.75.922-3.657 0-2.9-5.03-2.068-6.389H7.892c-3.878 0-3.657-3.014-3.657-5.99 0-2.85 1.831-4.569 4.49-4.569h4.596c1.542 0 3.066.942 4.452 1.516"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystThumbDislike5TwoTone;
