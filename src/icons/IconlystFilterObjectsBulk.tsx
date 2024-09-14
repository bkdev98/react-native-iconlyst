import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilterObjectsBulk = ({
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
      d="M14.327 17.31a4.08 4.08 0 0 0 4.077 4.076 4.08 4.08 0 0 0 4.077-4.077 4.083 4.083 0 0 0-4.077-4.078 4.083 4.083 0 0 0-4.077 4.078"
    />
    <Path
      fill={props.color}
      d="M9.62 10.343h5.82c.477 0 .906-.247 1.146-.66.241-.413.243-.909.006-1.325l-2.89-5.076a1.31 1.31 0 0 0-1.15-.669h-.005c-.48 0-.91.248-1.15.663L8.468 8.352c-.239.415-.239.912.001 1.327.241.416.67.664 1.15.664M5.75 21.14h3.121c1.338 0 2.27-.971 2.27-2.361v-2.94c0-1.39-.932-2.36-2.27-2.36h-3.12c-1.337 0-2.27.97-2.27 2.36v2.94c0 1.39.933 2.36 2.27 2.36"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFilterObjectsBulk;
