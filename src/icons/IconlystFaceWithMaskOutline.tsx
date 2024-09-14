import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFaceWithMaskOutline = ({
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
      d="M15.487 9.7a.975.975 0 1 1 0-1.95.975.975 0 0 1 0 1.95M8.987 9.7a.975.975 0 1 1 0-1.95.975.975 0 0 1 0 1.95"
    />
    <Path
      fill={props.color}
      d="M16.48 21.748H8.049c-3.308 0-5.531-2.321-5.531-5.775V8.029c0-3.454 2.223-5.775 5.53-5.775h8.433c3.308 0 5.53 2.32 5.53 5.775v7.944c0 3.454-2.223 5.775-5.531 5.775M8.049 3.754c-2.45 0-4.031 1.678-4.031 4.275v7.944c0 2.6 1.582 4.275 4.03 4.275h8.432c2.449 0 4.032-1.678 4.032-4.275V8.029c0-2.6-1.582-4.275-4.031-4.275z"
    />
    <Path
      fill={props.color}
      d="M7.522 21.663a.75.75 0 0 1-.743-.653l-.789-6.084-3.13-1.945a.75.75 0 1 1 .792-1.273l3.43 2.132a.75.75 0 0 1 .347.54l.834 6.436a.75.75 0 0 1-.74.847M16.987 21.665a.752.752 0 0 1-.726-.558.8.8 0 0 1-.018-.292l.866-6.436a.75.75 0 0 1 .345-.536l3.41-2.13a.75.75 0 0 1 1.14.51.75.75 0 0 1-.34.761l-3.11 1.944-.819 6.087a.75.75 0 0 1-.748.65"
    />
    <Path
      fill={props.color}
      d="M17.851 15.227a.8.8 0 0 1-.2-.027 29.6 29.6 0 0 1-4.182-1.546 2.77 2.77 0 0 0-2.226 0c-1.409.64-2.87 1.157-4.368 1.547a.75.75 0 0 1-.914-.539.75.75 0 0 1 .54-.914 25.6 25.6 0 0 0 4.133-1.465 4.28 4.28 0 0 1 3.443 0q1.93.883 3.968 1.47a.75.75 0 0 1-.2 1.474z"
    />
  </Svg>
);
export default IconlystFaceWithMaskOutline;
