import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldWifiOutline = ({
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
      d="M13.51 14.127a1.95 1.95 0 0 0-2.512.002.75.75 0 0 1-.974-1.14 3.45 3.45 0 0 1 4.452-.008.75.75 0 1 1-.967 1.146"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.198 12.031a4.73 4.73 0 0 0-5.9 0 .75.75 0 0 1-.938-1.17 6.23 6.23 0 0 1 7.776 0 .75.75 0 0 1-.938 1.17M12.249 14.87a.75.75 0 0 1 .75.75v.04a.75.75 0 1 1-1.5 0v-.04a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M12.25 22.709a.7.7 0 0 1-.217-.032c-.321-.1-7.856-2.453-7.856-9.048 0-1.835-.025-3.161-.042-4.133-.044-2.434-.054-2.941.583-3.577.755-.754 6.448-2.71 7.532-2.71 1.145 0 6.765 1.937 7.534 2.712.635.64.625 1.146.58 3.582-.016.972-.04 2.3-.04 4.126 0 6.594-7.536 8.951-7.856 9.048a.8.8 0 0 1-.218.032m0-18a30 30 0 0 0-6.485 2.283c-.16.16-.166.492-.13 2.476.017.979.042 2.314.042 4.161 0 4.912 5.41 7.121 6.573 7.538 1.163-.417 6.574-2.626 6.574-7.538 0-1.843.025-3.175.042-4.152.035-1.991.029-2.323-.146-2.5-2.064-1-4.234-1.76-6.47-2.268"
    />
  </Svg>
);
export default IconlystShieldWifiOutline;
