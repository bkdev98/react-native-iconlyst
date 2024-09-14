import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryEditLight = ({
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
      d="M21.257 10.451 21.24 7.89c-.007-2.846-1.783-4.851-4.631-4.845l-8.15.019C5.62 3.07 3.844 5.086 3.85 7.932l.018 7.677c.007 2.845 1.784 4.851 4.632 4.844h2.596"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.287 3.045.016 6.451-2.74-.893-2.754.909L9.8 3.07M17.774 14.84l2.591 2.59m-3.68 3.357-.914.153a1.023 1.023 0 0 1-1.187-1.12l.102-.944c.049-.455.24-.883.545-1.225l3.601-3.965a1.255 1.255 0 0 1 1.774-.069l.84.779c.51.47.54 1.265.07 1.773l-3.558 3.918c-.332.37-.78.618-1.272.7"
    />
  </Svg>
);
export default IconlystDeliveryEditLight;
