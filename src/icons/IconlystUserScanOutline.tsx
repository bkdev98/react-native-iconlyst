import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserScanOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 7.668a1.81 1.81 0 1 0 0 3.62 1.81 1.81 0 0 0 0-3.62M9.01 9.478a3.239 3.239 0 1 1 6.477 0 3.239 3.239 0 0 1-6.477 0M9.654 15.936a1.9 1.9 0 0 0-.642 1.402.715.715 0 0 1-1.429 0c0-.831.329-1.753 1.111-2.461.784-.71 1.96-1.15 3.556-1.15 1.595 0 2.77.436 3.554 1.143a3.3 3.3 0 0 1 1.112 2.458.714.714 0 1 1-1.429 0c0-.46-.18-.982-.64-1.396-.458-.414-1.259-.776-2.597-.776-1.337 0-2.138.364-2.597.78M21.25 15.106c.394 0 .714.32.714.715v1.577a4.606 4.606 0 0 1-4.607 4.606h-1.29a.715.715 0 0 1 0-1.429h1.29a3.177 3.177 0 0 0 3.178-3.177V15.82c0-.395.32-.715.714-.715M3.249 15.106c.395 0 .714.32.714.715v1.577a3.18 3.18 0 0 0 3.179 3.177h1.257a.715.715 0 0 1 0 1.43H7.142a4.607 4.607 0 0 1-4.608-4.607V15.82c0-.395.32-.715.715-.715M7.142 4.004a3.18 3.18 0 0 0-3.179 3.178v1.577a.714.714 0 1 1-1.429 0V7.182a4.607 4.607 0 0 1 4.608-4.607H8.43a.714.714 0 1 1 0 1.43zM15.386 3.29c0-.395.32-.715.715-.715h1.257a4.607 4.607 0 0 1 4.607 4.607v1.577a.715.715 0 0 1-1.429 0V7.182a3.18 3.18 0 0 0-3.178-3.178H16.1a.715.715 0 0 1-.714-.714"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserScanOutline;
