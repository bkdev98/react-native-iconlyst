import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystH6Outline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.5 4.984a.75.75 0 0 1 .75.75v5.603h6.97V5.734a.75.75 0 1 1 1.5 0V18.44a.75.75 0 0 1-1.5 0v-5.603H4.25v5.603a.75.75 0 0 1-1.5 0V5.734a.75.75 0 0 1 .75-.75M16.433 16.395a.75.75 0 0 1-.75-.75v-2.39a4.036 4.036 0 0 1 4.036-4.037h.772a.75.75 0 0 1 0 1.5h-.772a2.536 2.536 0 0 0-2.536 2.536v2.39a.75.75 0 0 1-.75.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.967 17.688a1.783 1.783 0 1 0 0-3.567 1.783 1.783 0 0 0 0 3.566m3.283-1.784a3.284 3.284 0 1 1-6.567 0 3.284 3.284 0 0 1 6.567 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystH6Outline;
