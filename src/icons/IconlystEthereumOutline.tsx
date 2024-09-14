import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEthereumOutline = ({
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
      d="M12.603 2.25a.75.75 0 0 1 .613.317l6.353 9a.75.75 0 0 1 0 .865l-6.353 9a.75.75 0 0 1-1.226 0l-6.353-9a.75.75 0 0 1 0-.864l6.353-9a.75.75 0 0 1 .613-.318M7.168 12l5.435 7.7 5.435-7.7-5.435-7.7z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.283 8.322a.75.75 0 0 1 .64 0l6.353 3a.75.75 0 0 1 0 1.356l-6.353 3a.75.75 0 0 1-.64 0l-6.353-3a.75.75 0 0 1 0-1.356zM8.006 12l4.597 2.17L17.2 12l-4.597-2.17z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEthereumOutline;
