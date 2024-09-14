import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaylistAiOutline = ({
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
      d="M6.108 4.73A2.36 2.36 0 0 0 3.75 7.088v9.824a2.36 2.36 0 0 0 2.358 2.358h5.953a2.36 2.36 0 0 0 2.358-2.358V7.088a2.36 2.36 0 0 0-2.358-2.358zM2.25 7.088A3.86 3.86 0 0 1 6.108 3.23h5.953a3.86 3.86 0 0 1 3.858 3.858v9.824a3.86 3.86 0 0 1-3.858 3.858H6.108a3.86 3.86 0 0 1-3.858-3.858zM21 8.172a.75.75 0 0 1 .75.75v6.155a.75.75 0 0 1-1.5 0V8.922a.75.75 0 0 1 .75-.75M18.082 5.793a.75.75 0 0 1 .75.75v10.915a.75.75 0 0 1-1.5 0V6.543a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.861 10.955a.75.75 0 0 1 .704.49l.082.223a2.32 2.32 0 0 0 1.371 1.374l.223.083a.75.75 0 0 1 0 1.406l-.223.083a2.32 2.32 0 0 0-1.37 1.373l-.083.223a.75.75 0 0 1-1.407 0l-.083-.223a2.32 2.32 0 0 0-1.371-1.373l-.223-.083a.75.75 0 0 1 0-1.406l.223-.083a2.32 2.32 0 0 0 1.371-1.373l.083-.224a.75.75 0 0 1 .703-.49m0 3.424a4 4 0 0 0-.55-.551q.303-.248.55-.551.247.304.55.55a4 4 0 0 0-.55.552M11.385 7.3a.75.75 0 0 1 .717.531c.08.262.284.466.544.545a.75.75 0 0 1 0 1.435.82.82 0 0 0-.544.545.75.75 0 0 1-1.435 0 .82.82 0 0 0-.544-.545.75.75 0 0 1 0-1.435.82.82 0 0 0 .544-.545.75.75 0 0 1 .718-.532"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlaylistAiOutline;
