import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMenu3Outline = ({
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
      d="M7.088 4.73A2.36 2.36 0 0 0 4.73 7.088v9.824a2.36 2.36 0 0 0 2.358 2.358h5.954a2.36 2.36 0 0 0 2.357-2.358V7.088a2.36 2.36 0 0 0-2.357-2.358zM3.23 7.088A3.86 3.86 0 0 1 7.088 3.23h5.954a3.86 3.86 0 0 1 3.857 3.858v9.824a3.86 3.86 0 0 1-3.857 3.858H7.088a3.86 3.86 0 0 1-3.858-3.858zM19.063 5.793a.75.75 0 0 1 .75.75v10.915a.75.75 0 0 1-1.5 0V6.543a.75.75 0 0 1 .75-.75M21.98 8.172a.75.75 0 0 1 .75.75v6.155a.75.75 0 0 1-1.5 0V8.922a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMenu3Outline;
