import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystJavascriptBroken = ({
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.955 9.329v7.364a1.842 1.842 0 0 1-2.797 1.584l-1.014-.587a3.26 3.26 0 0 1-1.623-2.817V9.125c0-1.161.62-2.233 1.624-2.814l4.981-2.875a3.25 3.25 0 0 1 3.249 0l2.49 1.437M10.685 20.31l.441.255a3.25 3.25 0 0 0 3.25 0l4.98-2.875a3.25 3.25 0 0 0 1.624-2.814V9.124a3.25 3.25 0 0 0-1.624-2.813"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.737 10.529c-.203-.696-.828-1.199-1.517-1.199h-1.072c-.933 0-1.585.746-1.585 1.585 0 .585.293 1.06.718 1.332M12.615 14.494a1.56 1.56 0 0 0 1.533 1.175h1.072c.839 0 1.585-.652 1.585-1.585a1.59 1.59 0 0 0-.706-1.326"
    />
  </Svg>
);
export default IconlystJavascriptBroken;
