import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRotationBroken = ({
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
      d="M11.32 14.816 9.187 12.68a.96.96 0 0 1 0-1.36l2.135-2.135a.96.96 0 0 1 1.359 0l2.135 2.135a.96.96 0 0 1 0 1.36l-2.135 2.135a.96.96 0 0 1-1.36 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21 6.32-2.615-.605-.603 2.6"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.353 5.879a8.89 8.89 0 0 1 1.795 9.641M18.269 18.316a8.88 8.88 0 0 1-7.884 2.488M3.027 17.952l2.632.526.523-2.619"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.685 18.312a8.89 8.89 0 0 1-2.481-8.264M5.394 5.877a8.88 8.88 0 0 1 7.805-2.726"
    />
  </Svg>
);
export default IconlystRotationBroken;
