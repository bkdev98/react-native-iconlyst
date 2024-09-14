import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareTouchIdCloseBulk = ({
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
      d="M21.332 7.906v5.684c0 .193-.18.336-.37.302-1.63-.292-3.809.331-5.08 1.392-1.754 1.464-2.934 3.383-2.7 5.748a.31.31 0 0 1-.304.343H7.614c-3.159 0-5.282-2.222-5.282-5.53V7.906c0-3.308 2.123-5.531 5.282-5.531h8.435c3.16 0 5.283 2.223 5.283 5.531"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m20.166 19.055 1.282-1.28a.746.746 0 0 0 0-1.062.75.75 0 0 0-1.06 0l-1.282 1.28-1.285-1.28a.749.749 0 1 0-1.058 1.062l1.283 1.28-1.285 1.29a.75.75 0 0 0 1.062 1.058l1.283-1.287 1.281 1.287a.75.75 0 1 0 1.062-1.059zM11.838 8.102c-1.426 0-2.672.78-3.331 1.94A.75.75 0 1 1 7.203 9.3a5.33 5.33 0 0 1 6.688-2.287.75.75 0 1 1-.579 1.384 3.8 3.8 0 0 0-1.474-.295M7.259 11.742a.75.75 0 0 1 .75.75v2.836a.75.75 0 0 1-1.5 0v-2.836a.75.75 0 0 1 .75-.75M15.149 8.68a.75.75 0 0 1 1.045.18c.613.868.972 1.928.972 3.07v1.705a.75.75 0 1 1-1.5 0V11.93c0-.822-.258-1.582-.697-2.204a.75.75 0 0 1 .18-1.046"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.245 12.097a2.553 2.553 0 1 1 5.106 0v4.272a.75.75 0 1 1-1.5 0v-4.272a1.054 1.054 0 1 0-2.106 0v.483a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.995 13.996a.75.75 0 0 1 .75.75v1.623a.75.75 0 0 1-1.5 0v-1.623a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSquareTouchIdCloseBulk;
