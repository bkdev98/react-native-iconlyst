import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleHeart2Outline = ({
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
      d="M8.835 20.298a.75.75 0 0 1-.317-.07c-.19-.089-4.684-2.222-5.744-5.62a4.52 4.52 0 0 1 2.653-5.83 4.3 4.3 0 0 1 2.011-.138c.506.105.983.317 1.4.622a3.5 3.5 0 0 1 1.4-.627 4.3 4.3 0 0 1 2.005.142 4.514 4.514 0 0 1 2.651 5.836c-1.123 3.43-5.549 5.523-5.737 5.611a.75.75 0 0 1-.322.074M6.722 10.08c-.285 0-.568.043-.84.128a3.01 3.01 0 0 0-1.678 3.947c.721 2.31 3.655 4.033 4.631 4.552.968-.514 3.861-2.217 4.627-4.555a3 3 0 0 0-1.681-3.947 2.8 2.8 0 0 0-1.3-.09 3.3 3.3 0 0 0-1.2.671.75.75 0 0 1-.9 0 3.4 3.4 0 0 0-1.2-.67 3 3 0 0 0-.459-.036"
    />
    <Path
      fill={props.color}
      d="M14.098 18.387a.75.75 0 0 1-.344-.084s-.79-.407-1.5-.829a.75.75 0 1 1 .76-1.292c.4.233.815.461 1.1.611 1.169-.61 5.132-2.878 6.169-6.049.65-2.029.065-4.6-2.307-5.365a3.86 3.86 0 0 0-1.774-.124 4.45 4.45 0 0 0-1.647.908.75.75 0 0 1-.9 0 4.4 4.4 0 0 0-1.632-.9 3.7 3.7 0 0 0-4.34 4.057.75.75 0 0 1-.731.768.727.727 0 0 1-.77-.732 5.2 5.2 0 0 1 6.089-5.573 4.5 4.5 0 0 1 1.83.85 4.7 4.7 0 0 1 1.84-.858c.829-.138 1.679-.08 2.48.172 3.189 1.025 4.17 4.494 3.284 7.258-1.42 4.338-7.047 7-7.286 7.11a.8.8 0 0 1-.321.072"
    />
  </Svg>
);
export default IconlystDoubleHeart2Outline;