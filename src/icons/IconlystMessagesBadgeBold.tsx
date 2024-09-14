import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesBadgeBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.605 9.917a3.683 3.683 0 0 1-3.314-5.284.206.206 0 0 0-.08-.273 9.5 9.5 0 0 0-3.956-1.133c-2.7-.16-5.36.86-7.27 2.78-2.81 2.81-3.57 7.13-1.91 10.73.11.27.44.89.99 1.85.09.16.08.35-.03.5-.22.32-.5.72-.72 1.05-.28.42-.31.97-.07 1.42.24.44.7.72 1.21.72h7.25c2.8 0 5.45-1.24 7.27-3.4 2.126-2.518 2.735-5.919 1.8-8.943a.205.205 0 0 0-.25-.133q-.44.114-.92.116"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.605 8.417c.19 0 .36-.02.53-.07.95-.23 1.66-1.09 1.66-2.11 0-1.21-.98-2.19-2.19-2.19-.87 0-1.62.51-1.97 1.26-.13.28-.21.6-.21.93 0 1.2.98 2.18 2.18 2.18"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessagesBadgeBold;
