import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrueUSDOutline = ({
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
      d="M2.5 3.691a.75.75 0 0 1 .75-.75h5.954a.75.75 0 0 1 .749.783 6.333 6.333 0 0 1-6.328 6.061H3.25a.75.75 0 0 1-.75-.75zm1.5.75v3.83a4.835 4.835 0 0 0 4.357-3.83zM9.355 9.06a6.12 6.12 0 0 1 6.118-6.119h5.778a.75.75 0 0 1 .75.75v5.406a.75.75 0 0 1-.75.75h-5.123V20.31a.75.75 0 0 1-.75.75h-5.273a.75.75 0 0 1-.75-.75zm6.118-4.619a4.62 4.62 0 0 0-4.618 4.618v10.5h3.773V9.098a.75.75 0 0 1 .75-.75h5.123V4.441z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTrueUSDOutline;
