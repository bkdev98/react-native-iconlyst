import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasMittensBulk = ({
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
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M20.205 11.395c0 .74-.29 1.42-.8 1.94l-3.251 3.241a.21.21 0 0 1-.272.017 3.5 3.5 0 0 0-2.087-.658h-7.69c-.583 0-1.113.124-1.575.346-.141.068-.315-.03-.315-.186v-7.66c0-3.07 2.5-5.57 5.57-5.57s5.57 2.5 5.57 5.57v1.22l.18-.19a2.743 2.743 0 0 1 3.87 0c.52.52.8 1.2.8 1.93"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.793 16.94h-7.69c-1.337 0-2.307.87-2.307 2.068l-.001 1.286c0 1.2.97 2.07 2.307 2.07h7.69c1.338 0 2.308-.87 2.308-2.07v-1.286c0-1.198-.97-2.068-2.307-2.068"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChristmasMittensBulk;
