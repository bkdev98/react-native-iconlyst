import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGraterOutline = ({
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
      fill={props.color}
      d="M15.051 10.03c.342.23.431.7.198 1.04l-.904 1.33c-.233.34-.699.43-1.042.2a.75.75 0 0 1-.198-1.04l.904-1.33a.755.755 0 0 1 1.042-.2M10.952 10.03c.342.23.431.7.198 1.04l-.904 1.33a.748.748 0 1 1-1.24-.84l.904-1.33c.233-.34.7-.43 1.042-.2M15.051 14.59c.342.23.431.7.198 1.04l-.904 1.33a.748.748 0 1 1-1.24-.84l.904-1.33a.755.755 0 0 1 1.042-.2M10.952 14.59c.342.23.431.7.198 1.04l-.904 1.33a.748.748 0 1 1-1.24-.84l.904-1.33c.233-.34.7-.43 1.042-.2"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.189 5.723a3.06 3.06 0 0 1 2.59 2.687l1.077 9.69a3.063 3.063 0 0 1-3.043 3.4H7.187a3.064 3.064 0 0 1-3.043-3.4L5.22 8.41a3.06 3.06 0 0 1 2.592-2.687l.174-1.403C8.152 2.83 9.428 2 10.763 2h2.474c1.334 0 2.61.83 2.778 2.32zM9.327 5.69h5.346l-.148-1.19-.001-.01c-.064-.57-.537-.99-1.287-.99h-2.474c-.75 0-1.224.42-1.288.99v.01zm-1.063 1.5c-.797 0-1.465.6-1.553 1.39l-1.076 9.69A1.56 1.56 0 0 0 7.187 20h9.626a1.56 1.56 0 0 0 1.552-1.73l-1.077-9.69a1.56 1.56 0 0 0-1.552-1.39z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGraterOutline;
