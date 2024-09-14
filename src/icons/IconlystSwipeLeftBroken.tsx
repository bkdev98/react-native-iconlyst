import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwipeLeftBroken = ({
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
      d="M13.937 20.85c-2.504.431-5.455-.056-6.722-1.631-1.242-1.545-2.208-3.421-2.817-5.101-.326-.901.153-1.872 1.048-2.215a1.836 1.836 0 0 1 2.17.672l1.203 1.744V4.68a1.68 1.68 0 0 1 3.36-.026l.067 4.348c2.352.224 5.757.103 6.708 2.67.957 2.583.015 6.002-1.662 7.679M16.478 3.324 14.932 4.87l1.545 1.546M14.932 4.848h4.772"
    />
  </Svg>
);
export default IconlystSwipeLeftBroken;
