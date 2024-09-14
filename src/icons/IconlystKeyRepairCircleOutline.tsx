import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKeyRepairCircleOutline = ({
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
      d="M12.25 4.25a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.5 12.5c0-5.385 4.365-9.75 9.75-9.75S22 7.115 22 12.5s-4.365 9.75-9.75 9.75S2.5 17.885 2.5 12.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.895 7.398a.75.75 0 0 1 .336.626v3.194c0 .038.019.073.05.094l.908.607a.11.11 0 0 0 .127 0l.902-.605a.12.12 0 0 0 .051-.096V8.024a.75.75 0 0 1 1.04-.692 5.283 5.283 0 0 1 .472 9.5v4.378a.75.75 0 0 1-1.5 0v-4.846c0-.3.18-.57.455-.69a3.787 3.787 0 0 0 1.033-6.302v1.848c0 .537-.268 1.04-.715 1.34l-.904.605a1.61 1.61 0 0 1-1.794.001l-.907-.606c-.45-.3-.718-.804-.718-1.342V9.375a3.76 3.76 0 0 0-1.264 2.82c0 1.559.944 2.9 2.302 3.48a.75.75 0 0 1 .455.69v4.845a.75.75 0 0 1-1.5 0v-4.377a5.28 5.28 0 0 1 .464-9.5.75.75 0 0 1 .707.065"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystKeyRepairCircleOutline;
