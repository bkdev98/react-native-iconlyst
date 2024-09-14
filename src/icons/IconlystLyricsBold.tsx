import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLyricsBold = ({
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
      d="M16.648 17.127h-5.289a.75.75 0 0 1 0-1.5h5.289a.75.75 0 0 1 0 1.5m-7.989.001h-1.31a.75.75 0 0 1 0-1.5h1.31a.75.75 0 0 1 0 1.5m-1.251-5.224h4.184a.75.75 0 0 1 0 1.5H7.408a.75.75 0 0 1 0-1.5m6.893 0h2.346a.75.75 0 0 1 0 1.5h-2.346a.75.75 0 0 1 0-1.5M16.216 2.5H7.781C4.622 2.5 2.5 4.721 2.5 8.026v7.948c0 3.305 2.122 5.526 5.281 5.526h8.434c3.161 0 5.285-2.221 5.285-5.526V8.026c0-3.305-2.123-5.526-5.284-5.526"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLyricsBold;
