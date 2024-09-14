import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMouseCursorAddBulk = ({
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
      d="m16.167 13.795-8.26-4.926a2.15 2.15 0 0 0-2.432.058 2.15 2.15 0 0 0-.878 2.259l1.858 9.228c.197.878.87 1.52 1.758 1.677q.2.035.395.035a2.15 2.15 0 0 0 1.828-1.011l1.597-2.554 3.452-.774a2.15 2.15 0 0 0 1.678-1.762 2.16 2.16 0 0 0-.996-2.23"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.08 5.692h-2.07V3.624a.75.75 0 0 0-1.5 0v2.068h-2.07a.75.75 0 0 0 0 1.5h2.07v2.069a.75.75 0 0 0 1.5 0V7.192h2.07a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMouseCursorAddBulk;
