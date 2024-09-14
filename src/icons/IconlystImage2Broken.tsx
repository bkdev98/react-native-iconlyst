import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImage2Broken = ({
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
      d="M21.21 10.5V7.9c0-3.02-1.89-5.15-4.91-5.15H7.65c-3.01 0-4.9 2.13-4.9 5.15v8.15c0 3.02 1.88 5.15 4.9 5.15h8.65c2.025 0 3.542-.957 4.322-2.5.814-1.608.3-3.584-.838-4.982-1.474-1.813-3.242-2.246-5.284-.218-1.93 1.916-2 2.5-5.71 1.258-2.29-.766-3.509 1.673-3.509 1.673"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.313 9.133a1.754 1.754 0 1 1-3.508 0 1.754 1.754 0 0 1 3.508 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystImage2Broken;
