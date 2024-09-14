import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystQRCodeBulk = ({
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
      d="M8.75 7.899a.85.85 0 0 1-.851.851H4.85A.85.85 0 0 1 4 7.899V4.851c0-.47.382-.851.85-.851H7.9c.47 0 .85.381.85.851zM7.899 2H4.85A2.854 2.854 0 0 0 2 4.851v3.048a2.854 2.854 0 0 0 2.85 2.851H7.9a2.854 2.854 0 0 0 2.85-2.851V4.851A2.854 2.854 0 0 0 7.9 2"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.375 5.381c-.552 0-1 .454-1 1.006a1 1 0 0 0 2 0v-.012a.995.995 0 0 0-1-.994M20 19.149a.85.85 0 0 1-.852.851h-3.047a.85.85 0 0 1-.851-.851v-3.048c0-.47.382-.851.85-.851h3.048c.47 0 .852.381.852.851zm-.852-5.899h-3.047a2.854 2.854 0 0 0-2.851 2.851v3.048A2.854 2.854 0 0 0 16.1 22h3.048A2.854 2.854 0 0 0 22 19.149v-3.048a2.854 2.854 0 0 0-2.852-2.851"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.625 16.614a1 1 0 0 0-1 1v.01c0 .553.448.995 1 .995s1-.453 1-1.005a1 1 0 0 0-1-1"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M6.375 16.631c-.552 0-1 .454-1 1.006a1 1 0 0 0 2 0v-.012a.995.995 0 0 0-1-.994" />
      <Path d="M8.75 19.149a.85.85 0 0 1-.851.851H4.85A.85.85 0 0 1 4 19.149v-3.048c0-.47.382-.851.85-.851H7.9c.47 0 .85.381.85.851zm-.851-5.899H4.85A2.854 2.854 0 0 0 2 16.101v3.048A2.854 2.854 0 0 0 4.85 22H7.9a2.854 2.854 0 0 0 2.85-2.851v-3.048A2.854 2.854 0 0 0 7.9 13.25M14.25 4.012a1 1 0 0 0 1-1V3a.995.995 0 0 0-1-.994c-.552 0-1 .454-1 1.006a1 1 0 0 0 1 1M19.53 2h-1.905a1 1 0 1 0 0 2h1.905a.47.47 0 0 1 .47.471v1.904a1 1 0 1 0 2 0V4.471a2.473 2.473 0 0 0-2.47-2.47M21 8.75h-3.375a1 1 0 0 0 0 2H21a1 1 0 0 0 0-2M14.25 10.75a1 1 0 0 0 1-1V7.845a.47.47 0 0 1 .471-.47h1.904a1 1 0 0 0 0-2h-1.904a2.473 2.473 0 0 0-2.471 2.47V9.75a1 1 0 0 0 1 1" />
    </G>
  </Svg>
);
export default IconlystQRCodeBulk;
