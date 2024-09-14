import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChoclateBold = ({
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
      d="M11.251 2.363a.3.3 0 0 0-.3-.3h-4A3 3 0 0 0 3.951 5.06v3.135a.3.3 0 0 0 .3.3h6.699a.3.3 0 0 0 .3-.3zM4.252 9.996a.3.3 0 0 0-.3.3v3.773a.3.3 0 0 0 .3.3h6.699a.3.3 0 0 0 .3-.3v-3.773a.3.3 0 0 0-.3-.3zM4.252 15.869a.3.3 0 0 0-.3.3v2.768a3 3 0 0 0 2.998 3h4.001a.3.3 0 0 0 .3-.3v-5.468a.3.3 0 0 0-.3-.3zM12.751 21.637a.3.3 0 0 0 .3.3h3.998a3 3 0 0 0 2.998-3V16.17a.3.3 0 0 0-.3-.3h-6.696a.3.3 0 0 0-.3.3zM19.747 14.369a.3.3 0 0 0 .3-.3v-3.773a.3.3 0 0 0-.3-.3h-6.696a.3.3 0 0 0-.3.3v3.773a.3.3 0 0 0 .3.3zM20.047 8.196a.3.3 0 0 1-.3.3h-6.696a.3.3 0 0 1-.3-.3V2.363a.3.3 0 0 1 .3-.3h.676c.625 0 1.128.476 1.217 1.095.308 2.14 1.618 2.768 3.93 2.899a1.233 1.233 0 0 1 1.173 1.223z"
    />
  </Svg>
);
export default IconlystChoclateBold;
