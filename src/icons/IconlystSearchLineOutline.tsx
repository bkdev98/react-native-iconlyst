import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchLineOutline = ({
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
      fillRule="evenodd"
      d="M11.378 3.75a7.35 7.35 0 1 0 0 14.7 7.35 7.35 0 1 0 0-14.7m-8.85 7.35a8.85 8.85 0 0 1 8.85-8.85 8.85 8.85 0 0 1 8.85 8.85 8.85 8.85 0 0 1-8.85 8.85 8.85 8.85 0 0 1-8.85-8.85m5.94-.01a.75.75 0 0 1 .75-.75h4.3a.75.75 0 1 1 0 1.5h-4.3a.75.75 0 0 1-.75-.75m11.24 7.63a.766.766 0 1 0-.001 1.531.766.766 0 0 0 0-1.53m-2.267.765a2.266 2.266 0 1 1 4.532.001 2.266 2.266 0 0 1-4.532 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchLineOutline;
