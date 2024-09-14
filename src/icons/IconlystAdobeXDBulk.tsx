import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAdobeXDBulk = ({
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
      d="M16.217 2.5H7.782C4.623 2.5 2.5 4.722 2.5 8.03v7.939c0 3.308 2.123 5.531 5.282 5.531h8.434c3.161 0 5.284-2.223 5.284-5.531V8.03c0-3.308-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M11.5 15.923a.75.75 0 0 0 .21-1.04l-1.8-2.71 1.8-2.71a.75.75 0 0 0-1.25-.83l-1.45 2.184-1.45-2.184a.75.75 0 0 0-1.25.83l1.8 2.71-1.8 2.71a.75.75 0 0 0 1.25.83l1.45-2.183 1.45 2.183a.75.75 0 0 0 1.04.21"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.815 15.148a.75.75 0 0 1-.571.73 7 7 0 0 1-1.55.177c-.758 0-1.646-.139-2.312-.663-.43-.336-.94-.973-.94-2.103 0-1.135.512-1.783.94-2.125.863-.69 2.094-.747 2.933-.686V8.7a.75.75 0 0 1 1.5 0zm-3.873-1.86c0-.582.214-.822.377-.951.358-.29.95-.373 1.49-.373.178 0 .35.009.505.022v2.529c-.634.074-1.531.072-2.008-.303-.156-.123-.363-.353-.363-.923"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAdobeXDBulk;
