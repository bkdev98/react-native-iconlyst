import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVisaCardLight = ({
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
      d="M17.595 3.71H6.405C3.696 3.71 2 5.629 2 8.34v7.32c0 2.714 1.689 4.63 4.404 4.63h11.19c2.716 0 4.406-1.916 4.406-4.63V8.34c0-2.712-1.69-4.63-4.405-4.63"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.535 10.031.982 3.944 1.78-3.944M9.771 13.975l.564-3.944M15.585 13.975l1.71-3.944 1.166 3.944M14.1 10.321c-.6-.231-1.652-.243-1.695.628-.036.742.733.981 1.149 1.436.158.172.276.39.285.623a.81.81 0 0 1-.265.62c-.389.36-.994.272-1.446.098"
    />
  </Svg>
);
export default IconlystVisaCardLight;
