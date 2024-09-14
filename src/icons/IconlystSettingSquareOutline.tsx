import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSettingSquareOutline = ({
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
      d="M2.5 8.5a5.75 5.75 0 0 1 5.75-5.75h8A5.75 5.75 0 0 1 22 8.5v8a5.75 5.75 0 0 1-5.75 5.75h-8A5.75 5.75 0 0 1 2.5 16.5zm5.75-4.25A4.25 4.25 0 0 0 4 8.5v8a4.25 4.25 0 0 0 4.25 4.25h8a4.25 4.25 0 0 0 4.25-4.25v-8a4.25 4.25 0 0 0-4.25-4.25z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.895 7.689a.75.75 0 0 1 .336.625v3.194c0 .039.02.074.05.095h.001l.907.606a.11.11 0 0 0 .127 0l.902-.604a.12.12 0 0 0 .051-.097V8.314a.75.75 0 0 1 1.04-.691 5.283 5.283 0 0 1 .472 9.5l.001 4.377a.75.75 0 1 1-1.5 0v-4.845c0-.3.178-.571.454-.69a3.787 3.787 0 0 0 1.033-6.303v1.848c0 .537-.268 1.04-.714 1.34l-.905.605a1.615 1.615 0 0 1-1.793.002l-.907-.606c-.45-.3-.719-.805-.719-1.343V9.665a3.76 3.76 0 0 0-1.264 2.82c0 1.56.944 2.9 2.303 3.48a.75.75 0 0 1 .455.69V21.5a.75.75 0 0 1-1.5 0v-4.376a5.28 5.28 0 0 1 .463-9.5.75.75 0 0 1 .707.065"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSettingSquareOutline;
