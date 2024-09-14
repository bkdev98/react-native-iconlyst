import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSerumOutline = ({
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
      d="M12.25 19.83a11 11 0 0 1-4.614-1.053 2.85 2.85 0 0 1-1.65-2.585V7.927a2.85 2.85 0 0 1 1.651-2.585 10.64 10.64 0 0 1 9.228 0 2.85 2.85 0 0 1 1.65 2.585v8.265a2.85 2.85 0 0 1-1.65 2.585 11 11 0 0 1-4.615 1.052m0-14.047a9.5 9.5 0 0 0-3.989.922 1.34 1.34 0 0 0-.776 1.222v8.265a1.34 1.34 0 0 0 .776 1.221 9.08 9.08 0 0 0 7.98 0 1.34 1.34 0 0 0 .774-1.22V7.926a1.35 1.35 0 0 0-.775-1.222 9.5 9.5 0 0 0-3.99-.922"
    />
    <Path
      fill={props.color}
      d="M13.631 5.887a.75.75 0 0 1-.75-.75V4.36a.632.632 0 0 0-1.263 0v.778a.75.75 0 1 1-1.5 0V4.36a2.132 2.132 0 0 1 4.263 0v.778a.75.75 0 0 1-.75.75M12.251 21.73a.75.75 0 0 1-.75-.75v-1.894a.75.75 0 0 1 1.5 0v1.893a.75.75 0 0 1-.75.75M13.173 16.076q-.45.002-.9-.007c-.517-.006-1.051-.013-1.59 0h-.017a.75.75 0 1 1-.017-1.5c.558-.011 1.106-.005 1.642 0s1.03.012 1.524 0a.72.72 0 0 1 .77.73.75.75 0 0 1-.73.77q-.338.009-.682.007M12.25 12.921a2.256 2.256 0 0 1-1.6-3.851l1.069-1.069a.75.75 0 0 1 1.06 0l1.068 1.068a2.255 2.255 0 0 1-1.6 3.852zm0-3.329-.537.537a.76.76 0 1 0 1.074 0z"
    />
  </Svg>
);
export default IconlystSerumOutline;
