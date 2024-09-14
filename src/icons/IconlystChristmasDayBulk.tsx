import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasDayBulk = ({
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
      d="M2.5 9.264v8.18c0 3.04 1.92 4.92 5.02 4.92h8.96c3.1 0 5.02-1.91 5.02-4.99v-8.11c0-3.03-1.92-4.91-5.02-4.91h-.57v2.49a.749.749 0 1 1-1.5 0v-2.49H8.08v2.49a.749.749 0 1 1-1.5 0v-2.42c-1.13.15-2.09.58-2.78 1.28-.86.85-1.31 2.09-1.3 3.56"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.31 17.865c-.12.27-.39.45-.69.45h-2.87v4.05h-1.5v-4.05H8.38c-.3 0-.57-.18-.69-.45a.76.76 0 0 1 .14-.81c.45-.49.87-1.03 1.24-1.64h-.13c-.3 0-.56-.17-.69-.43a.75.75 0 0 1 .12-.81c1.05-1.23 2.02-2.74 2.96-4.62a.76.76 0 0 1 .67-.41c.28 0 .54.16.67.41.94 1.88 1.91 3.39 2.96 4.62a.751.751 0 0 1-.57 1.24h-.13c.37.61.79 1.15 1.24 1.64.2.22.26.54.14.81M19.49 16.06l-.01-.01a.744.744 0 0 0-1.055.057.757.757 0 0 0 .56 1.259.75.75 0 0 0 .505-1.305M5.522 10.79l-.577.578a.75.75 0 0 0 1.06 1.06l.578-.575a.751.751 0 0 0-1.06-1.062M19.048 10.49a.75.75 0 0 0-1.061-1.062l-.694.694a.749.749 0 1 0 1.061 1.06zM8.088 2.866a.75.75 0 0 1 .75.75v3.223a.75.75 0 0 1-1.5 0V3.616a.75.75 0 0 1 .75-.75M15.914 2.866a.75.75 0 0 1 .75.75v3.223a.75.75 0 0 1-1.5 0V3.616a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChristmasDayBulk;
