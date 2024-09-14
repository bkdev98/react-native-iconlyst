import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudConnectedBulk = ({
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
      d="M21.515 17.985a3.02 3.02 0 0 1-1.835.624h-4.9a3.03 3.03 0 0 1-1.836-.624c-.102-.078-.252-.051-.297.07l-.061.176h-1.732c-.744 0-1.35-.606-1.35-1.35v-.919h3.067a2.32 2.32 0 0 0 2.209 1.644h4.9c1.279 0 2.32-1.04 2.32-2.32a2.32 2.32 0 0 0-2.32-2.319h-4.9a2.305 2.305 0 0 0-2.165 1.495H9.504v-2.384h-1.5v4.803a2.853 2.853 0 0 0 2.85 2.85h1.758a2.32 2.32 0 0 0 2.168 1.516h4.9c1.28 0 2.32-1.04 2.32-2.32 0-.312-.067-.606-.182-.876-.05-.118-.2-.144-.303-.066"
    />
    <Path
      fill={props.color}
      d="M12.296 12.077h-6.2c-.4 0-.84-.089-1.241-.252A3.14 3.14 0 0 1 3 8.972c0-1.664 1.062-2.879 2.635-3.089.212-1.404 1.36-3.133 3.564-3.133s3.351 1.729 3.563 3.133c1.573.21 2.634 1.424 2.634 3.089a3.13 3.13 0 0 1-1.834 2.848c-.42.169-.863.257-1.266.257"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCloudConnectedBulk;
