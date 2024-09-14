import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSkullBroken = ({
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
      d="M19.116 13.889c-.033 1.68-.982 2.882-2.618 3.266 0 2.812-.778 3.2-2.073 3.599-.796.245-1.647.247-2.425.246-.778 0-1.63-.001-2.426-.246-1.294-.398-2.073-.787-2.073-3.599-1.635-.385-2.585-1.588-2.617-3.266a3.4 3.4 0 0 0-.219-1.152c-.804-2.043-.736-5.117 1.059-7.25M7.68 3.949C9.056 3.252 10.506 2.99 12 3c1.494-.009 2.945.252 4.319.949 2.87 1.457 3.73 4.447 3.461 6.932M12.068 18.951v2.034m2.27-2.034v1.83m-4.541-1.83V20.8"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.051 14.652-.5-.99a.6.6 0 0 0-1.063-.015l-.537.99a.6.6 0 0 0 .527.886M16.659 10.142c-.216-.686-.725-1.304-1.46-1.44-1.234-.225-2.276.93-1.949 2.131.23.848 1.093 1.465 1.968 1.511.4.02.8-.07 1.1-.35M7.336 10.142c.216-.686.725-1.304 1.461-1.44 1.232-.225 2.274.93 1.947 2.131-.23.848-1.093 1.465-1.967 1.511-.4.02-.801-.07-1.1-.35"
    />
  </Svg>
);
export default IconlystSkullBroken;
