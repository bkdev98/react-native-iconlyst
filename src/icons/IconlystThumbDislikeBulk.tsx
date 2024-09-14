import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbDislikeBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M18.358 15.462c.243.063.549.063 1.15.063.602 0 .898 0 1.14-.063a1.85 1.85 0 0 0 1.278-1.277c.074-.254.074-.55.074-1.151V5.402c0-.602 0-.898-.074-1.151a1.85 1.85 0 0 0-1.277-1.278c-.243-.063-.539-.063-1.14-.063-.602 0-.908 0-1.15.063a1.85 1.85 0 0 0-1.278 1.278c-.074.253-.074.549-.074 1.15v7.633c0 .602 0 .897.074 1.15a1.85 1.85 0 0 0 1.277 1.278"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.24 12.073a3.05 3.05 0 0 0 1.363 1.773c.718.433 1.731.433 3.853.433.971 0 1.372.412 1.034 1.604-.443 1.605-.876 4.635.834 5.131.76.232 1.616-.084 2.101-.707 1.15-1.47 2.29-2.938 3.429-4.416a.46.46 0 0 0 .02-.514 3.3 3.3 0 0 1-.324-.76c-.127-.465-.127-.887-.127-1.584V5.401c0-.513 0-.874.051-1.211.028-.19-.051-.387-.223-.473a6.4 6.4 0 0 0-2.54-.68c-1.774-.106-4.118-.17-5.807.01-1.246.147-2.681 1.098-3.199 2.48-.75 2.059-.897 5.004-.464 6.546"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystThumbDislikeBulk;
