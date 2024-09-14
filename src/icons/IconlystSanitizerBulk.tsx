import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSanitizerBulk = ({
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
      d="M17.998 12.874v5.25c0 1.93-1.57 3.5-3.5 3.5h-5.25c-1.93 0-3.5-1.57-3.5-3.5v-5.25a3.494 3.494 0 0 1 3.5-3.5h5.25c.13 0 .25.01.38.02 1.75.19 3.12 1.68 3.12 3.48"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m18.032 4.845-1.66-1.656a2.72 2.72 0 0 0-1.947-.813H9.628a.75.75 0 0 0 0 1.5h1.5v1.879c-1.24 0-2.25 1.01-2.25 2.24v1.4c.12-.01.25-.02.37-.02h1.13v-1.38c0-.41.34-.74.75-.74h.742l.008.001.007-.001h.743c.41 0 .75.34.75.75v1.37h1.12c.13 0 .25.01.38.02v-1.39c0-1.24-1.01-2.25-2.25-2.25V3.876h1.797c.334 0 .646.13.884.371l1.664 1.66a.747.747 0 0 0 1.06-.001.75.75 0 0 0-.001-1.061M13.74 14.746h-1.113v-1.11c0-.41-.336-.75-.75-.75s-.75.34-.75.75v1.11h-1.112c-.414 0-.75.34-.75.75 0 .42.336.75.75.75h1.112v1.12c0 .41.336.75.75.75s.75-.34.75-.75v-1.12h1.112c.414 0 .75-.33.75-.75 0-.41-.336-.75-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSanitizerBulk;
