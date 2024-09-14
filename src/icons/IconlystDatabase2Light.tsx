import * as React from 'react';
import Svg, { Path, Ellipse } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabase2Light = ({
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
      d="M4.422 6v6s0 3 7.579 3 7.578-3 7.578-3V6"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.422 12v6s0 3 7.579 3 7.578-3 7.578-3v-6"
    />
    <Ellipse
      cx={12.001}
      cy={6.019}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      rx={7.579}
      ry={3.019}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.974 17.636v-.02m0-.104a.103.103 0 1 0 0 .205.103.103 0 0 0 0-.205M7.974 11.478v-.02m0-.104a.103.103 0 1 0 0 .206.103.103 0 0 0 0-.206"
    />
  </Svg>
);
export default IconlystDatabase2Light;
