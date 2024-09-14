import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbDislikeBold = ({
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
      d="M2.74 12.073a3.05 3.05 0 0 0 1.363 1.773c.718.433 1.731.433 3.853.433.971 0 1.372.412 1.034 1.605-.443 1.604-.876 4.634.834 5.13.76.233 1.616-.084 2.101-.707a785 785 0 0 0 3.429-4.416.46.46 0 0 0 .02-.514 3.3 3.3 0 0 1-.324-.76c-.127-.465-.127-.887-.127-1.584V5.402c0-.513 0-.873.051-1.211.028-.19-.051-.386-.223-.472a6.4 6.4 0 0 0-2.54-.682c-1.774-.105-4.118-.168-5.807.011-1.246.148-2.681 1.098-3.199 2.48-.75 2.06-.897 5.005-.464 6.546M17.858 15.461c.243.063.549.063 1.15.063.602 0 .898 0 1.14-.063a1.85 1.85 0 0 0 1.278-1.277c.074-.254.074-.55.074-1.151V5.401c0-.602 0-.898-.074-1.151a1.85 1.85 0 0 0-1.277-1.277c-.243-.064-.539-.064-1.14-.064-.602 0-.908 0-1.151.064a1.85 1.85 0 0 0-1.277 1.277c-.074.253-.074.549-.074 1.15v7.633c0 .602 0 .897.074 1.15a1.85 1.85 0 0 0 1.277 1.278"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystThumbDislikeBold;
