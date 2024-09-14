import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPoundCircleBold = ({
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
      d="M11.376 11.148c.01.013.013.03.022.043q.015.02.029.041h1.925a.75.75 0 0 1 0 1.5h-1.345a2.93 2.93 0 0 1-.469 1.907 13 13 0 0 1-.205.264h2.752a.75.75 0 0 1 0 1.5H9.689a.749.749 0 0 1-.545-1.265c.448-.474.832-.925 1.174-1.371.197-.296.243-.673.17-1.034H8.955a.75.75 0 0 1 0-1.5h.787a2.93 2.93 0 0 1 .878-3.244 2.95 2.95 0 0 1 4.154.372.75.75 0 0 1-.093 1.057.754.754 0 0 1-1.057-.093 1.45 1.45 0 0 0-2.039-.187 1.445 1.445 0 0 0-.209 2.01M12 2.563c-5.238 0-9.5 4.262-9.5 9.5 0 5.237 4.262 9.5 9.5 9.5s9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPoundCircleBold;
