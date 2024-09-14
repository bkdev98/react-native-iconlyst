import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDislike2Outline = ({
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
      fillRule="evenodd"
      d="M11.586 6.482c-.927-1.774-2.808-2.278-4.252-1.818-2.825.911-3.947 4.03-3.018 6.935.656 2.04 2.036 3.809 3.526 5.17a.75.75 0 0 1-1.013 1.108c-1.609-1.47-3.18-3.45-3.941-5.82-1.103-3.448.149-7.584 3.987-8.82l.002-.001c1.757-.561 3.957-.121 5.374 1.558 1.427-1.698 3.605-2.11 5.36-1.56l.005.002a6.15 6.15 0 0 1 2.381 1.404.75.75 0 0 1-1.036 1.085 4.65 4.65 0 0 0-1.802-1.06c-1.448-.454-3.293.017-4.245 1.82a.75.75 0 0 1-1.328-.003M20.93 7.387a.75.75 0 0 1 .894.57 7.9 7.9 0 0 1-.21 4.098c-.851 2.705-2.807 4.922-4.67 6.448a16.6 16.6 0 0 1-2.666 1.797c-.397.21-.768.378-1.094.496-.309.11-.639.2-.933.2-.385 0-.859-.154-1.315-.35a12 12 0 0 1-1.651-.888.75.75 0 1 1 .801-1.268c.548.346 1.042.607 1.441.778.428.183.663.227.724.227h.01l.025-.003q.034-.004.091-.017.117-.026.3-.09a7 7 0 0 0 .899-.41 15 15 0 0 0 2.417-1.633c1.74-1.425 3.46-3.416 4.191-5.74l.001-.003a6.4 6.4 0 0 0 .174-3.318.75.75 0 0 1 .57-.894"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.435 3.224a.75.75 0 0 1 0 1.06L6.628 19.092a.75.75 0 0 1-1.06-1.061L20.374 3.224a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDislike2Outline;
