import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMouseCursorAddBold = ({
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
      d="m15.667 13.303-8.26-4.926a2.15 2.15 0 0 0-2.432.058 2.15 2.15 0 0 0-.878 2.26l1.858 9.227c.197.878.87 1.521 1.758 1.677q.2.035.395.035a2.15 2.15 0 0 0 1.828-1.01l1.597-2.555 3.452-.774a2.15 2.15 0 0 0 1.678-1.762 2.16 2.16 0 0 0-.996-2.23M19.58 5.2h-2.07V3.134a.75.75 0 0 0-1.5 0V5.2h-2.07a.75.75 0 0 0 0 1.5h2.07V8.77a.75.75 0 0 0 1.5 0V6.7h2.07a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMouseCursorAddBold;
