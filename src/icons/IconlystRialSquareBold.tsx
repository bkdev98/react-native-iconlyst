import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRialSquareBold = ({
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
      d="M17.939 13.454a3.195 3.195 0 0 1-2.091 2.935.75.75 0 0 1-.51-1.411 1.68 1.68 0 0 0 1.101-1.54v-2.264a.75.75 0 0 1 1.5 0zm-4.352 2.979h-1.305a.75.75 0 1 1 0-1.5h1.305a.75.75 0 0 1 0 1.5m-2.056-7.99a.75.75 0 0 1 1.5 0v3.87c0 .325.264.59.591.59h.216a.59.59 0 0 0 .59-.59v-1.03a.75.75 0 0 1 1.5 0v1.03c0 1.152-.937 2.09-2.09 2.09h-.216a2.09 2.09 0 0 1-2.091-2.09zm-.591 5.26a2.44 2.44 0 0 1-2.439 2.44 2.44 2.44 0 0 1-2.439-2.44v-.93a.75.75 0 0 1 1.5 0v.93a.94.94 0 0 0 1.878 0v-5.26a.75.75 0 0 1 1.5 0zm5.277-11.14H7.783c-3.16 0-5.283 2.222-5.283 5.53v7.95c0 3.303 2.123 5.52 5.283 5.52h8.433c3.16 0 5.284-2.217 5.284-5.52v-7.95c0-3.307-2.124-5.53-5.283-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRialSquareBold;
