import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCollapsarLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M13.028 12.696c.515-.37.85-.96.85-1.624 0-1.12-1.228-2.127-2.4-2.127-2.428 0-4.104 1.646-4.104 4.189s2.273 4.572 4.932 4.572c4.256 0 7.157-2.754 7.157-6.825 0-4.072-3.45-7.372-7.707-7.372-1.373-.079-4.377.248-6.216 2.057"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M11.122 11.304c-.515.37-.849.96-.849 1.624 0 1.12 1.227 2.127 2.399 2.127 2.428 0 4.105-1.646 4.105-4.189s-2.274-4.572-4.933-4.572c-4.256 0-7.157 2.754-7.157 6.825 0 4.072 3.45 7.372 7.707 7.372 1.35.077 4.28-.238 6.126-1.97"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.37 7.552v-.058m-.008-.169a.25.25 0 1 0 .003.497.25.25 0 0 0-.003-.497M20.872 16.444v-.057m-.008-.17a.25.25 0 1 0 .003.497.25.25 0 0 0-.003-.497"
    />
  </Svg>
);
export default IconlystCollapsarLight;
