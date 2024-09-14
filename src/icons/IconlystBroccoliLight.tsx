import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBroccoliLight = ({
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
      d="M8.953 12.15c2.021 1.703 4.847 1.756 6.96 0M13.872 13.447c.405.582 1.518 1.76 2.733 1.821M10.995 13.447c-.405.582-1.518 1.76-2.733 1.821M14.814 14.973c-.337 1.187-.591 3.458-.591 5.007.086 1.22-3.527 1.494-3.623 0 0-1.55-.204-3.82-.548-5.007"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.734 18.137c2.082 0 3.77-1.658 3.77-3.704 0-.475-.091-.93-.257-1.347.447-.509.717-1.172.717-1.897 0-1.605-1.325-2.907-2.96-2.907 0-1.506-1.165-2.744-2.658-2.892C15.097 4.031 13.888 3 12.433 3 10.95 3 9.721 4.073 9.507 5.472a3 3 0 0 0-.579-.055c-1.634 0-2.959 1.301-2.959 2.907q0 .293.057.57c-1.708.352-2.99 1.841-2.99 3.624 0 1.801 1.309 3.302 3.043 3.635-.281.813.123 2.217 1.611 2.217"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.262 9.684a2.95 2.95 0 0 0-1.986-.766c-.457 0-.89.104-1.277.289M18.295 8.261a2.95 2.95 0 0 0-2.115.89M20.642 12.58a2.54 2.54 0 0 1-1.657 1.075M9.518 5.573c0 .806.32 1.586.891 2.069"
    />
  </Svg>
);
export default IconlystBroccoliLight;
