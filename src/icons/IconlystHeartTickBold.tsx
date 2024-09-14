import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartTickBold = ({
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
      d="m15.225 9.549-3.635 3.64a.75.75 0 0 1-1.062 0l-1.765-1.771a.75.75 0 0 1 1.063-1.058l1.234 1.238 3.104-3.11a.75.75 0 1 1 1.061 1.06m5.76-2.573c-.682-1.68-1.993-2.906-3.696-3.452a6.16 6.16 0 0 0-2.91-.207c-.892.149-1.702.684-2.382 1.18-.657-.475-1.487-1.02-2.382-1.171a6.3 6.3 0 0 0-2.909.198C2.976 4.73 1.827 8.813 2.87 12.058c1.624 5.21 8.62 8.525 8.916 8.664a.5.5 0 0 0 .422 0c.293-.136 7.184-3.391 8.906-8.66.551-1.714.505-3.521-.129-5.086"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHeartTickBold;
