import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocument3DotsTwoTone = ({
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
      d="M16.537 3H8.463a4.12 4.12 0 0 0-4.12 4.12v9.76A4.12 4.12 0 0 0 8.464 21h8.074a4.12 4.12 0 0 0 4.12-4.12V7.12A4.12 4.12 0 0 0 16.537 3"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.58 12.839.006-.007m-2.678 2.68.006-.007m5.171.006.006-.006M15.376 8.219l-.977.009H9.625"
    />
  </Svg>
);
export default IconlystDocument3DotsTwoTone;
