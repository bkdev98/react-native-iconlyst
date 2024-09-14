import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystQuoraLight = ({
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
      d="M5.881 11.209a.75.75 0 1 0 1.497-.097zm9.223-.502h-.75c0 .254.128.49.34.628zm-4.244 8.457a.75.75 0 0 0 0-1.5zm6.877-5.283-.652.37a.75.75 0 0 0 1.338-.067zM7.378 11.112a6 6 0 0 1-.013-.405h-1.5q0 .253.016.502zm-.013-.405c0-2.774 1.727-4.69 3.495-4.69v-1.5c-2.921 0-4.995 2.955-4.995 6.19zm3.495-4.69c1.767 0 3.494 1.916 3.494 4.69h1.5c0-3.235-2.074-6.19-4.994-6.19zm0 11.647c-3.738 0-6.796-3.1-6.796-6.957h-1.5c0 4.656 3.7 8.457 8.296 8.457zm-6.796-6.957c0-3.857 3.058-6.957 6.796-6.957v-1.5c-4.597 0-8.296 3.802-8.296 8.457zM10.86 3.75c3.737 0 6.794 3.1 6.794 6.957h1.5c0-4.656-3.698-8.457-8.294-8.457zm6.794 6.957a7.1 7.1 0 0 1-.602 2.87l1.371.607a8.6 8.6 0 0 0 .732-3.477zm-2.96.628c1.518.99 1.787 1.854 2.391 2.916l1.304-.741c-.54-.95-.987-2.2-2.876-3.431z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.686 16.827c-.041 2.385-1.114 4.058-3.604 4.17-1.361.06-2.982-.693-4.02-3.585-.849-2.361-1.366-3.3-3.808-3.412l-.302-.903c2.277-1.566 5.387-1.296 6.744 2.85 1.16 3.543 4.61 1.9 4.99.88"
    />
  </Svg>
);
export default IconlystQuoraLight;
