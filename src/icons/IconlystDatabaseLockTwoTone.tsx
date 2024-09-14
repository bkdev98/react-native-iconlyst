import * as React from 'react';
import Svg, { Path, Ellipse } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseLockTwoTone = ({
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
      d="M15.681 20.967h3.146c.863 0 1.562-.7 1.562-1.562V17.64c0-.862-.7-1.562-1.562-1.562h-3.146c-.862 0-1.562.7-1.562 1.562v1.766c0 .862.7 1.562 1.562 1.562"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.133 16.108v-1.162a1.879 1.879 0 0 0-3.756-.009v1.171M3.578 11.759s0 2.92 7.376 2.92"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.33 9.729v-3.81M3.578 6.014v11.585s0 2.92 7.376 2.92"
    />
    <Ellipse
      cx={10.954}
      cy={5.938}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      rx={7.376}
      ry={2.938}
    />
  </Svg>
);
export default IconlystDatabaseLockTwoTone;
