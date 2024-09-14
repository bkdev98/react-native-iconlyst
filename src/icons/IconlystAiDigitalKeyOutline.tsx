import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiDigitalKeyOutline = ({
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
      d="M11.731 4.66a.75.75 0 0 1 .75-.75h3.898c.706 0 1.278.573 1.278 1.279v5.236a.75.75 0 0 1-1.5 0V5.41h-3.676a.75.75 0 0 1-.75-.75M13.892 20.25a.91.91 0 1 0 0-1.82.91.91 0 0 0 0 1.82m2.41-.91a2.41 2.41 0 1 1-4.82 0 2.41 2.41 0 0 1 4.82 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.82 3.75a.91.91 0 1 0 0 1.82.91.91 0 0 0 0-1.82m-2.41.91a2.41 2.41 0 1 1 4.82 0 2.41 2.41 0 0 1-4.82 0M7.807 14.945a.75.75 0 0 1 .75.75v2.895h3.676a.75.75 0 0 1 0 1.5H8.335a1.28 1.28 0 0 1-1.278-1.279v-3.116a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.71 9.076a2.912 2.912 0 1 0 2.668 4.083.75.75 0 0 1 .687-.449h2.434l.913-.702a.75.75 0 0 1 .87-.031l.865.57.745-.548a.75.75 0 0 1 .902.01l.597.459.495-.485-.747-.747-7.09-.001a.75.75 0 0 1-.683-.442A2.91 2.91 0 0 0 7.71 9.076m-4.413 2.912a4.412 4.412 0 0 1 8.206-2.253l6.947.001c.199 0 .39.079.53.22l1.503 1.502a.75.75 0 0 1-.006 1.066l-1.502 1.472a.75.75 0 0 1-.983.058l-.666-.513-.712.523a.75.75 0 0 1-.856.022l-.855-.563-.693.532a.75.75 0 0 1-.457.155h-2.23a4.412 4.412 0 0 1-8.226-2.222"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.956 11.92a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAiDigitalKeyOutline;
