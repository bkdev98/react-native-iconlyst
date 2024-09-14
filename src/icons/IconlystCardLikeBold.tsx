import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCardLikeBold = ({
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
      d="M4.728 16.35a.3.3 0 0 0-.3.3v.83a4.025 4.025 0 0 0 4.024 4.02h8.05a4.025 4.025 0 0 0 4.023-4.02v-.83a.3.3 0 0 0-.3-.3zM12.475 11.344c.623-.409 1.585-1.179 1.835-1.97.107-.335.086-.695-.053-.966a.82.82 0 0 0-.494-.414.93.93 0 0 0-.842.14.755.755 0 0 1-.889 0 .92.92 0 0 0-.838-.142.82.82 0 0 0-.499.415c-.139.27-.159.63-.053.964.26.804 1.215 1.568 1.833 1.973"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.363 7.718a2.32 2.32 0 0 1 1.37-1.153 2.4 2.4 0 0 1 1.743.1 2.4 2.4 0 0 1 1.748-.097c.59.185 1.077.595 1.365 1.151.323.624.379 1.393.15 2.108-.542 1.717-2.663 2.92-2.902 3.052a.75.75 0 0 1-.72.001c-.237-.13-2.344-1.314-2.902-3.051l-.001-.001c-.23-.715-.175-1.485.149-2.11m10.863 7.132a.3.3 0 0 0 .3-.3V6.52A4.027 4.027 0 0 0 16.5 2.5H8.45a4.027 4.027 0 0 0-4.023 4.02v8.03a.3.3 0 0 0 .3.3z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCardLikeBold;
