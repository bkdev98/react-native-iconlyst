import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAdobeXDBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.319 12.846c-.162.13-.376.37-.376.952 0 .57.207.8.363.923.477.375 1.374.377 2.009.303v-2.529a6 6 0 0 0-.506-.022c-.54 0-1.131.084-1.49.373"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.815 15.658a.75.75 0 0 1-.571.729 7 7 0 0 1-1.55.178c-.758 0-1.646-.14-2.312-.663-.429-.336-.939-.973-.939-2.103 0-1.135.511-1.783.94-2.125.862-.69 2.093-.747 2.932-.686v-1.78a.75.75 0 0 1 1.5 0zm-6.105-.265a.75.75 0 0 1-1.25.83L9.01 14.04l-1.449 2.183a.75.75 0 0 1-1.25-.83l1.799-2.71-1.799-2.71a.75.75 0 0 1 1.25-.83l1.449 2.184 1.45-2.184a.75.75 0 0 1 1.25.83l-1.799 2.71zm4.507-12.384H7.782C4.623 3.009 2.5 5.23 2.5 8.539v7.939c0 3.308 2.123 5.53 5.282 5.53h8.434c3.161 0 5.284-2.222 5.284-5.53v-7.94c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAdobeXDBold;
