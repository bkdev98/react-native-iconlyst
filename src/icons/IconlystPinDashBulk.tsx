import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinDashBulk = ({
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
      d="M12 10.14a1.184 1.184 0 1 1 0 2.37c-.65 0-1.19-.53-1.19-1.18 0-.66.54-1.19 1.19-1.19m0 6.41c.84 0 3.88-2.59 3.88-5.21 0-2.14-1.74-3.89-3.88-3.89S8.12 9.2 8.12 11.34c0 2.62 3.04 5.21 3.88 5.21"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M18.512 4.963a9.55 9.55 0 0 0-6.894-2.55.75.75 0 0 0-.719.779c.016.415.386.749.778.72a8.02 8.02 0 0 1 5.816 2.152 8.05 8.05 0 0 1 2.592 5.633 8.03 8.03 0 0 1-1.21 4.55.751.751 0 0 0 1.275.79 9.53 9.53 0 0 0 1.433-5.397 9.54 9.54 0 0 0-3.07-6.677M4.902 7.478c.23 0 .46-.107.607-.308.37-.506.808-.976 1.304-1.395a.75.75 0 1 0-.967-1.146 9.5 9.5 0 0 0-1.55 1.657.75.75 0 0 0 .606 1.192M17.001 18.373a8.06 8.06 0 0 1-4.386 1.698 8 8 0 0 1-2.38-.175.755.755 0 0 0-.895.57.75.75 0 0 0 .57.894 9.6 9.6 0 0 0 2.817.207 9.57 9.57 0 0 0 5.2-2.013.75.75 0 1 0-.926-1.18M4.561 15.218a.75.75 0 1 0-1.373.604 9.6 9.6 0 0 0 3.324 4.031.751.751 0 0 0 .854-1.234 8.1 8.1 0 0 1-2.805-3.4M3.24 13.32a.75.75 0 0 0 .692-.805A8.1 8.1 0 0 1 4.2 9.786a.75.75 0 0 0-1.447-.392 9.6 9.6 0 0 0-.318 3.233.75.75 0 0 0 .747.694q.028 0 .057-.002" />
    </G>
  </Svg>
);
export default IconlystPinDashBulk;
