import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSettingAiAlt3Light = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.604 3.374a2.8 2.8 0 0 1 2.793 0l5.375 3.104a2.79 2.79 0 0 1 1.397 2.417v6.209c0 .997-.533 1.919-1.397 2.418l-5.375 3.104c-.864.499-1.929.499-2.793 0l-5.377-3.104a2.79 2.79 0 0 1-1.395-2.418V8.895"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.423 11.182a2.767 2.767 0 1 1-5.335.249M6.428 8.199l-.101-.273A3.76 3.76 0 0 0 4.105 5.7L3.832 5.6l.273-.102a3.76 3.76 0 0 0 2.222-2.225l.1-.273.102.273A3.76 3.76 0 0 0 8.75 5.498l.273.101-.273.102A3.76 3.76 0 0 0 6.53 7.926zM11.738 9.441a1.77 1.77 0 0 0-1.176-1.178 1.77 1.77 0 0 0 1.176-1.179 1.77 1.77 0 0 0 1.177 1.179 1.77 1.77 0 0 0-1.177 1.178"
    />
  </Svg>
);
export default IconlystSettingAiAlt3Light;
