import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWhiteboardGraphBroken = ({
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
      d="M20.9 8.38a3.76 3.76 0 0 0-3.76-3.76H7.86A3.76 3.76 0 0 0 4.1 8.38v5.093a3.76 3.76 0 0 0 3.76 3.76h9.28a3.76 3.76 0 0 0 3.76-3.76v-1.552M12.5 3v1.63"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.537 12.807 2.705-2.703 2.082 2.082 3.14-3.14M16.173 21.002l-3.672-3.74-3.673 3.74"
    />
  </Svg>
);
export default IconlystWhiteboardGraphBroken;
