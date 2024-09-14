import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrademarkOutline = ({
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
      fill={props.color}
      d="M7.2 16.157a.75.75 0 0 1-.75-.75V8.843H4a.75.75 0 0 1 0-1.5h6.4a.75.75 0 0 1 0 1.5H7.95v6.564a.75.75 0 0 1-.75.75M13.6 16.157a.75.75 0 0 1-.75-.75V8.093a.75.75 0 0 1 1.28-.53l2.67 2.67 2.67-2.67a.75.75 0 0 1 1.28.53v7.314a.75.75 0 0 1-1.5 0V9.903l-1.92 1.92a.75.75 0 0 1-1.06 0l-1.92-1.92v5.504a.75.75 0 0 1-.75.75"
    />
  </Svg>
);
export default IconlystTrademarkOutline;
