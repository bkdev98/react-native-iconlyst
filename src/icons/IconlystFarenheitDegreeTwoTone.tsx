import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFarenheitDegreeTwoTone = ({
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
      d="M10.316 7.661c0-.764.62-1.384 1.385-1.384h7.387a1.384 1.384 0 1 1 0 2.769h-6.003v3.714h5.11a1.384 1.384 0 1 1 0 2.768h-5.11v4.088a1.384 1.384 0 1 1-2.769 0z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.403 6.294a1.647 1.647 0 1 0 0-3.295 1.647 1.647 0 0 0 0 3.295"
    />
  </Svg>
);
export default IconlystFarenheitDegreeTwoTone;
