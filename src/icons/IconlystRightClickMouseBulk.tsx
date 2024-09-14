import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightClickMouseBulk = ({
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
      d="M12.908 10.469a1.66 1.66 0 0 1-1.658-1.656V2.832a.29.29 0 0 0-.329-.292c-3.456.494-6.116 3.318-6.117 6.718v5.408c0 1.82.751 3.532 2.117 4.817 1.358 1.277 3.161 1.98 5.078 1.98 3.968 0 7.195-3.048 7.195-6.794l.002-3.9a.3.3 0 0 0-.3-.3z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.75 8.813c0 .086.07.156.158.156h5.96a.29.29 0 0 0 .292-.313c-.146-1.592-.868-3.071-2.082-4.213a7.3 7.3 0 0 0-4-1.903.29.29 0 0 0-.328.291z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRightClickMouseBulk;
