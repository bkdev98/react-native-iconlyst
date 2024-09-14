import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRialSquareBulk = ({
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
      d="M16.217 2.563H7.783c-3.16 0-5.283 2.222-5.283 5.53v7.95c0 3.303 2.123 5.52 5.283 5.52h8.433c3.16 0 5.284-2.217 5.284-5.52v-7.95c0-3.307-2.124-5.53-5.283-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M15.848 16.39a3.195 3.195 0 0 0 2.091-2.936v-2.28a.75.75 0 0 0-1.5 0v2.264a1.68 1.68 0 0 1-1.101 1.54.75.75 0 0 0 .51 1.411M12.282 16.433h1.305a.75.75 0 1 0 0-1.5h-1.305a.75.75 0 0 0 0 1.5"
    />
    <Path
      fill={props.color}
      d="M12.281 7.693a.75.75 0 0 0-.75.75v3.87c0 1.153.937 2.09 2.091 2.09h.216c1.153 0 2.09-.937 2.09-2.09v-1.029a.75.75 0 0 0-1.5 0v1.03a.59.59 0 0 1-.59.59h-.216a.59.59 0 0 1-.591-.59v-3.87a.75.75 0 0 0-.75-.75M8.501 16.143a2.44 2.44 0 0 0 2.439-2.439v-5.26a.75.75 0 0 0-1.5 0v5.26a.94.94 0 0 1-1.878 0v-.93a.75.75 0 0 0-1.5 0v.93a2.44 2.44 0 0 0 2.439 2.44"
    />
  </Svg>
);
export default IconlystRialSquareBulk;
