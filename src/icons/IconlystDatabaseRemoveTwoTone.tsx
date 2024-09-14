import * as React from 'react';
import Svg, { Path, Ellipse } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseRemoveTwoTone = ({
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
      d="m18.195 19.28-1.621 1.624m1.621-1.623 1.622-1.623m-1.622 1.623 1.622 1.621m-1.622-1.621-1.622-1.624M4.15 11.86s0 2.954 7.461 2.954c1.953 0 3.394-.203 4.459-.501"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.072 11.86V5.953M4.15 5.979v11.788s0 2.955 7.461 2.955"
    />
    <Ellipse
      cx={11.611}
      cy={5.972}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      rx={7.462}
      ry={2.972}
    />
  </Svg>
);
export default IconlystDatabaseRemoveTwoTone;
