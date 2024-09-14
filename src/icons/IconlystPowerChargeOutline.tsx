import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPowerChargeOutline = ({
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
      d="M12.156 21.89c-1.46 0-2.91-.33-4.26-.99a9.66 9.66 0 0 1-4.94-5.59c-.85-2.46-.69-5.1.45-7.44a9.7 9.7 0 0 1 5.58-4.95c4.44-1.53 9.35.32 11.67 4.41.2.36.08.82-.28 1.02a.75.75 0 0 1-1.02-.28 8.26 8.26 0 0 0-9.88-3.73 8.22 8.22 0 0 0-4.72 4.19 8.14 8.14 0 0 0-.38 6.29c.72 2.08 2.2 3.76 4.18 4.73a8.16 8.16 0 0 0 6.3.38 8.26 8.26 0 0 0 5.26-5.58c.11-.4.52-.63.92-.52s.63.52.52.92a9.73 9.73 0 0 1-6.21 6.6 9.8 9.8 0 0 1-3.19.54"
    />
    <Path
      fill={props.color}
      d="M20.246 8.46h-3.28c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.53V4.41c0-.41.34-.75.75-.75s.75.34.75.75v3.3c0 .41-.34.75-.75.75M12.016 17.578c-1.03 0-2.03-.38-2.79-1.08-.86-.78-1.36-1.9-1.36-3.07v-1.17c0-.83.67-1.5 1.5-1.5h5.28c.83 0 1.5.67 1.5 1.5v1.03c0 2.19-1.64 4.07-3.74 4.27-.13.01-.26.02-.4.02zm-2.65-5.32v1.17c0 .74.31 1.46.86 1.96.56.51 1.28.75 2.04.67 1.34-.13 2.38-1.35 2.38-2.78v-1.03h-5.28z"
    />
    <Path
      fill={props.color}
      d="M12.006 21.888c-.41 0-.75-.34-.75-.75v-4.2c0-.41.34-.75.75-.75s.75.34.75.75v4.2c0 .41-.34.75-.75.75M13.716 12.26c-.41 0-.75-.34-.75-.75V9.29c0-.41.34-.75.75-.75s.75.34.75.75v2.22c0 .41-.34.75-.75.75m-3.41 0c-.41 0-.75-.34-.75-.75V9.29c0-.41.34-.75.75-.75s.75.34.75.75v2.22c0 .41-.34.75-.75.75"
    />
  </Svg>
);
export default IconlystPowerChargeOutline;
