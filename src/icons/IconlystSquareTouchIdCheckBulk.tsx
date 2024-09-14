import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareTouchIdCheckBulk = ({
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
      d="M21.484 7.906v5.684c0 .193-.18.336-.37.302-1.63-.292-4.806.091-6.077 1.152-1.753 1.464-3.003 3.623-2.768 5.988a.31.31 0 0 1-.304.343H7.766c-3.159 0-5.282-2.222-5.282-5.53V7.906c0-3.308 2.123-5.531 5.282-5.531h8.435c3.16 0 5.283 2.223 5.283 5.531"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M8.659 10.041a3.83 3.83 0 0 1 4.805-1.644.75.75 0 0 0 .58-1.384A5.328 5.328 0 0 0 7.355 9.3a.75.75 0 1 0 1.303.741M15.818 14.568V11.93c0-.822-.258-1.582-.697-2.204a.75.75 0 1 1 1.225-.866c.613.868.972 1.928.972 3.07v2.15a7.7 7.7 0 0 0-1.5.488"
    />
    <Path
      fill={props.color}
      d="M13.003 17.511v-5.414a1.054 1.054 0 1 0-2.105 0v.483a.75.75 0 0 1-1.5 0v-.483a2.553 2.553 0 1 1 5.105 0v3.429a8.2 8.2 0 0 0-1.5 1.985M7.411 11.742a.75.75 0 0 1 .75.75v2.836a.75.75 0 0 1-1.5 0v-2.836a.75.75 0 0 1 .75-.75"
    />
    <Path
      fill={props.color}
      d="M10.148 13.996a.75.75 0 0 1 .75.75v1.623a.75.75 0 0 1-1.5 0v-1.623a.75.75 0 0 1 .75-.75M20.236 16.354a.75.75 0 1 1 1.06 1.06l-3.994 3.99a.75.75 0 0 1-1.061 0l-1.596-1.602a.749.749 0 1 1 1.06-1.058l.856.856a.3.3 0 0 0 .424 0z"
    />
  </Svg>
);
export default IconlystSquareTouchIdCheckBulk;
