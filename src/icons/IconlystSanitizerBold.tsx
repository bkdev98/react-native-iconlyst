import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSanitizerBold = ({
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
      d="M13.375 8.005v1.37h-3v-1.38c0-.408.337-.74.75-.74h1.5c.413 0 .75.337.75.75m1.112 7.49c0 .42-.336.75-.75.75h-1.112v1.12c0 .41-.336.75-.75.75a.753.753 0 0 1-.75-.75v-1.12h-1.112a.746.746 0 0 1-.75-.75c0-.41.336-.75.75-.75h1.112v-1.11c0-.41.336-.75.75-.75s.75.34.75.75v1.11h1.112c.414 0 .75.34.75.75m-.065-11.62c.334 0 .646.13.885.371l1.664 1.66a.745.745 0 0 0 1.06-.002.75.75 0 0 0-.002-1.06L16.37 3.188a2.72 2.72 0 0 0-1.948-.813H9.625a.75.75 0 0 0 0 1.5h1.5v1.88a2.25 2.25 0 0 0-2.25 2.24v1.418c-1.752.19-3.125 1.661-3.125 3.462v5.25c0 1.93 1.57 3.5 3.5 3.5h5.25c1.93 0 3.5-1.57 3.5-3.5v-5.25c0-1.801-1.373-3.272-3.125-3.462V8.005c0-1.24-1.01-2.25-2.25-2.25v-1.88z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSanitizerBold;
