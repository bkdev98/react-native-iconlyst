import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLyricsBulk = ({
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
      d="M16.786 2.5H8.351c-3.159 0-5.28 2.221-5.28 5.526v7.948c0 3.305 2.121 5.526 5.28 5.526h8.434c3.161 0 5.285-2.221 5.285-5.526V8.026c0-3.305-2.123-5.526-5.284-5.526"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M11.93 17.127h5.288a.75.75 0 0 0 0-1.5H11.93a.75.75 0 0 0 0 1.5M7.92 17.128h1.31a.75.75 0 0 0 0-1.5H7.92a.75.75 0 0 0 0 1.5M12.162 11.904H7.978a.75.75 0 0 0 0 1.5h4.184a.75.75 0 0 0 0-1.5M17.217 11.904h-2.346a.75.75 0 0 0 0 1.5h2.346a.75.75 0 0 0 0-1.5"
    />
  </Svg>
);
export default IconlystLyricsBulk;
