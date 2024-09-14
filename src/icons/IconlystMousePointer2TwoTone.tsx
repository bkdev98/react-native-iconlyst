import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMousePointer2TwoTone = ({
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
      d="m5.576 6.438 4.297 10.899c.352.892 1.617.885 1.958-.011l1.486-3.901c.107-.28.328-.501.608-.607l3.901-1.487c.896-.341.903-1.606.011-1.957l-10.9-4.298c-.853-.336-1.698.508-1.361 1.362"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.618 13.117 19.5 19"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMousePointer2TwoTone;
