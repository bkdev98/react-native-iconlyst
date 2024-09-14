import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlipForwardOutline = ({
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
      d="M15.98 5.491a.75.75 0 0 1 1.06 0l3.49 3.49a.75.75 0 0 1 0 1.06l-3.49 3.492a.75.75 0 0 1-1.06-1.061l2.96-2.96-2.96-2.96a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.25 13.744a4.983 4.983 0 0 1 4.983-4.983H20a.75.75 0 0 1 0 1.5H8.233a3.483 3.483 0 1 0 0 6.967h3.484a.75.75 0 0 1 0 1.5H8.233a4.984 4.984 0 0 1-4.983-4.984"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlipForwardOutline;
