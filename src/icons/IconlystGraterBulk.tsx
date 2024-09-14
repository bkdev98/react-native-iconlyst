import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGraterBulk = ({
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
      d="m16.22 6.23-.206-1.66c-.17-1.495-1.444-2.32-2.777-2.32h-2.474c-1.333 0-2.608.825-2.778 2.32L7.78 6.23a2.81 2.81 0 0 0-2.31 2.458l-1.076 9.69A2.81 2.81 0 0 0 7.187 21.5h9.626a2.81 2.81 0 0 0 2.794-3.122l-1.077-9.69a2.81 2.81 0 0 0-2.31-2.459m-5.457-2.48c-.75 0-1.224.418-1.288.991v.01l-.18 1.437h5.409l-.18-1.447c-.064-.572-.537-.991-1.287-.991z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M10.286 8.67a.75.75 0 1 0 0 1.5h.05a.75.75 0 1 0 0-1.5zM13.606 8.67a.75.75 0 0 0 0 1.5h.067a.75.75 0 1 0 0-1.5zM8.638 10.882a.75.75 0 0 0 0 1.5h.05a.75.75 0 0 0 0-1.5zM11.948 10.882a.75.75 0 0 0 0 1.5H12a.75.75 0 1 0 0-1.5zM15.26 10.882a.75.75 0 0 0 0 1.5h.05a.75.75 0 0 0 0-1.5zM10.286 13.095a.75.75 0 1 0 0 1.5h.05a.75.75 0 1 0 0-1.5zM13.606 13.095a.75.75 0 0 0 0 1.5h.067a.75.75 0 1 0 0-1.5zM8.638 15.307a.75.75 0 0 0 0 1.5h.05a.75.75 0 1 0 0-1.5zM11.948 15.307a.75.75 0 0 0 0 1.5H12a.75.75 0 1 0 0-1.5zM15.26 15.307a.75.75 0 0 0 0 1.5h.05a.75.75 0 1 0 0-1.5zM10.286 17.519a.75.75 0 1 0 0 1.5h.05a.75.75 0 1 0 0-1.5zM13.606 17.519a.75.75 0 0 0 0 1.5h.067a.75.75 0 0 0 0-1.5z"
    />
  </Svg>
);
export default IconlystGraterBulk;
