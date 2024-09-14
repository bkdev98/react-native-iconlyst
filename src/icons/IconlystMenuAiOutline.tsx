import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMenuAiOutline = ({
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
      fillRule="evenodd"
      d="M6.108 4.73A2.36 2.36 0 0 0 3.75 7.088v9.824a2.36 2.36 0 0 0 2.358 2.358h5.953a2.36 2.36 0 0 0 2.358-2.358V7.088a2.36 2.36 0 0 0-2.358-2.358zM2.25 7.088A3.86 3.86 0 0 1 6.108 3.23h5.953a3.86 3.86 0 0 1 3.858 3.858v9.824a3.86 3.86 0 0 1-3.858 3.858H6.108a3.86 3.86 0 0 1-3.858-3.858zM18.082 5.793a.75.75 0 0 1 .75.75v10.915a.75.75 0 0 1-1.5 0V6.543a.75.75 0 0 1 .75-.75M21 8.172a.75.75 0 0 1 .75.75v6.155a.75.75 0 0 1-1.5 0V8.922a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.042 13.407a.75.75 0 0 1-.704-.49l-.09-.243a2.59 2.59 0 0 0-1.525-1.528l-.242-.09a.75.75 0 0 1 0-1.406l.242-.09a2.59 2.59 0 0 0 1.526-1.528l.09-.242a.75.75 0 0 1 1.406 0l.09.242c.262.708.819 1.266 1.526 1.528l.242.09a.75.75 0 0 1 0 1.406l-.242.09a2.59 2.59 0 0 0-1.526 1.528l-.09.243a.75.75 0 0 1-.703.49m.7-3.054a4 4 0 0 1-.7-.7c-.204.26-.44.496-.7.7q.392.308.7.7.307-.392.7-.7M11.385 16.7a.75.75 0 0 1-.718-.531.82.82 0 0 0-.544-.545.75.75 0 0 1 0-1.435.82.82 0 0 0 .544-.545.75.75 0 0 1 1.435 0c.08.261.284.466.544.545a.75.75 0 0 1 0 1.435.82.82 0 0 0-.544.545.75.75 0 0 1-.717.532"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMenuAiOutline;
