import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBedSideViewOutline = ({
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
      d="M19 8.636a.75.75 0 0 1 .75.75v1.473a.75.75 0 0 1-1.5 0V9.386a.75.75 0 0 1 .75-.75M5 6.117a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.05 10.117h13.9c.503 0 .939-.001 1.312.133a2.25 2.25 0 0 1 1.355 1.355c.134.373.134.809.133 1.311v.884c0 .503.001.938-.133 1.312a2.25 2.25 0 0 1-1.355 1.354c-.373.135-.809.134-1.311.134H5.05c-.504 0-.939.001-1.312-.134a2.25 2.25 0 0 1-1.355-1.354c-.134-.374-.134-.809-.133-1.312v-.883c0-.503-.001-.939.133-1.312a2.25 2.25 0 0 1 1.355-1.355c.373-.134.808-.134 1.311-.133m.11 1.5c-.68 0-.822.011-.914.044a.75.75 0 0 0-.452.452c-.033.092-.044.235-.044.914v.663c0 .679.011.822.044.914a.75.75 0 0 0 .452.451c.092.033.235.045.914.045h13.68c.679 0 .822-.012.914-.045a.75.75 0 0 0 .452-.451c.033-.092.044-.235.044-.914v-.663c0-.679-.011-.822-.044-.914a.75.75 0 0 0-.452-.451c-.092-.034-.235-.045-.914-.045z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.49 15.122a.75.75 0 0 1 .577.89L5.74 17.55a.75.75 0 0 1-1.467-.313L4.6 15.7a.75.75 0 0 1 .89-.577M18.51 15.122a.75.75 0 0 0-.577.89l.328 1.539a.75.75 0 0 0 1.467-.313L19.4 15.7a.75.75 0 0 0-.89-.577M4.259 7.79a.75.75 0 0 1 .75-.75h.772a3.826 3.826 0 0 1 3.827 3.826.75.75 0 1 1-1.5 0A2.326 2.326 0 0 0 5.78 8.54H5.01a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBedSideViewOutline;
