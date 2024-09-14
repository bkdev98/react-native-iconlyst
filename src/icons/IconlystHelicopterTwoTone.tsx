import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHelicopterTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.623 17.117c-.45-.028-1.994-.068-4.571 0-3.51.093-4.624-2.857-3.547-5.35.987-2.029 2.303-2.459 4.42-2.459 6.372 0 9.31 7.81 3.698 7.81"
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="m13.276 17.104-.856 3.073m3.635-3.073.857 3.073M14.38 7.06h6.87M14.38 9.268V5.593M11.968 7.06H7.06M10.315 20.177h8.276a2.15 2.15 0 0 0 2.071-1.578" />
    </G>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3.25 11.232.646 1.589c.23.567.822.944 1.482.944H8.98M14.392 9.329v1.384c0 1.134.919 2.053 2.053 2.053h3.441"
    />
  </Svg>
);
export default IconlystHelicopterTwoTone;
