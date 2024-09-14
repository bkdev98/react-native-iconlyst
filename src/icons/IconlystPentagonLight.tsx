import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPentagonLight = ({
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
      d="M10.482 3.808 4.065 8.47a2.58 2.58 0 0 0-.938 2.887l2.45 7.545a2.58 2.58 0 0 0 2.456 1.784h7.933c1.119 0 2.11-.72 2.456-1.784l2.452-7.545a2.58 2.58 0 0 0-.938-2.887l-6.419-4.662a2.58 2.58 0 0 0-3.035 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPentagonLight;
