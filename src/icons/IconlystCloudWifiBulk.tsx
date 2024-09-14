import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudWifiBulk = ({
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
      fillRule="evenodd"
      d="M18.015 8.373a.21.21 0 0 1-.183-.18c-.295-2.108-2.01-4.74-5.331-4.74-3.57 0-5.04 2.91-5.324 4.743a.21.21 0 0 1-.183.176c-2.36.29-3.957 2.098-3.957 4.583a4.64 4.64 0 0 0 2.739 4.222c.294.12.57.2.821.256.204.045.317-.246.18-.404l-.054-.066a2.5 2.5 0 0 1 .389-3.514c3.016-2.415 7.392-2.414 10.407 0a2.5 2.5 0 0 1 .271 3.648c-.14.148-.047.435.156.41a5.2 5.2 0 0 0 1.302-.333 4.64 4.64 0 0 0 2.716-4.219c0-2.483-1.594-4.29-3.95-4.582"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.315 20.546c-.414 0-.75-.312-.75-.727v-.046a.75.75 0 0 1 1.5 0c0 .414-.336.773-.75.773M10.465 18.405a.748.748 0 0 1-.486-1.32c1.329-1.133 3.34-1.138 4.677-.01a.749.749 0 1 1-.966 1.147 2.14 2.14 0 0 0-2.74.003.74.74 0 0 1-.485.18"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.956 16.153a.75.75 0 0 1-.469-.165c-1.839-1.473-4.508-1.472-6.344 0a.749.749 0 1 1-.938-1.17c2.38-1.907 5.838-1.91 8.22 0a.749.749 0 0 1-.469 1.335"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudWifiBulk;
