import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMacOSBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.82 8.795a.75.75 0 0 1 1.5 0v1.129a.75.75 0 0 1-1.5 0zm5.75 9.533q-.358.035-.723.035a7.64 7.64 0 0 1-5.133-1.962.75.75 0 1 1 1.005-1.114 6.14 6.14 0 0 0 4.737 1.547 26 26 0 0 1-.033-2.274 14 14 0 0 1-1.52-.142c-1.208-.153-1.496-.8-1.554-1.721-.066-1.405.838-6.661 1.354-9.333H7.537c-3.013 0-5.037 2.118-5.037 5.27v7.75c0 3.153 2.024 5.27 5.037 5.27h5.483a39 39 0 0 1-.45-3.326"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.182 9.923a.75.75 0 0 1-1.5 0V8.794a.75.75 0 0 1 1.5 0zm-.72-6.56H12.23c-.561 2.844-1.44 8.068-1.383 9.251.01.16.025.245.035.288.037.003.097.014.22.03.635.09 1.14.131 1.603.131.392 0 .702.115.918.342.336.351.317.79.3 1.176-.01.242-.027.904.018 1.912a6.2 6.2 0 0 0 2.314-1.468.75.75 0 0 1 1.063 1.058 7.7 7.7 0 0 1-3.272 1.96c.102 1.194.273 2.404.495 3.61h1.919c3.014 0 5.039-2.117 5.039-5.269v-7.75c0-3.152-2.024-5.27-5.038-5.27"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMacOSBold;
