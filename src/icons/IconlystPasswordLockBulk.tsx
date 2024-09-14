import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordLockBulk = ({
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
      d="M16.217 2.898H7.782C4.623 2.898 2.5 5.12 2.5 8.428v4.05c0 3.307 2.123 5.53 5.282 5.53h5.258a.015.015 0 0 0 .015-.015c0-.961.409-1.822 1.052-2.442a.33.33 0 0 0 .1-.213c.14-1.925 1.685-3.412 3.615-3.454 1.218.001 2.321.595 3.011 1.514.172.229.573.18.61-.103q.056-.393.057-.817v-4.05c0-3.308-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M8.094 11.388a1.011 1.011 0 1 1 .002-2.022 1.011 1.011 0 0 1-.002 2.022M10.99 10.378a1.011 1.011 0 0 0 2.02 0c0-.557-.453-1.01-1.01-1.01s-1.01.453-1.01 1.01M14.894 10.378a1.012 1.012 0 0 0 2.022 0 1.012 1.012 0 0 0-2.022 0"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.333 15.553v.551a2.15 2.15 0 0 1 1.136 1.888v1.601c0 1.191-.97 2.16-2.16 2.16h-2.844a2.16 2.16 0 0 1-2.16-2.16v-1.6a2.15 2.15 0 0 1 1.135-1.889v-.55a2.45 2.45 0 0 1 2.41-2.42h.025a2.455 2.455 0 0 1 2.458 2.42m-1.025 4.7a.66.66 0 0 0 .661-.66v-1.6a.66.66 0 0 0-.66-.66h-2.844a.66.66 0 0 0-.66.66v1.6c0 .364.296.66.66.66zm-1.426-5.62h-.01a.95.95 0 0 0-.932.933v.267h1.893v-.27a.95.95 0 0 0-.95-.93"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPasswordLockBulk;
