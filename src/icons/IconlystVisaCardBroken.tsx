import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVisaCardBroken = ({
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
      d="M12.249 20.29H6.654c-2.715 0-4.404-1.916-4.404-4.63V8.34c0-2.712 1.697-4.63 4.404-4.63h11.19c2.716 0 4.406 1.918 4.406 4.63v7.32c0 2.714-1.69 4.63-4.407 4.63h-1.797"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.785 10.03.982 3.944 1.78-3.944M10.021 13.974l.565-3.944M15.835 13.974l1.71-3.944 1.166 3.944M14.35 10.32c-.6-.231-1.652-.243-1.695.628-.036.742.733.981 1.149 1.436.158.172.276.39.285.623a.81.81 0 0 1-.264.62c-.39.36-.995.272-1.447.098"
    />
  </Svg>
);
export default IconlystVisaCardBroken;
