import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDropOutline = ({
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
      d="M11.757 21.372c-4.6-.08-8.5-3.24-9.52-7.7-.95-4.18.88-8.47 4.55-10.68.67-.4 1.51-.28 2.07.29l2.89 2.93 2.89-2.94c.55-.56 1.4-.68 2.06-.29 3.67 2.21 5.5 6.5 4.55 10.68a9.87 9.87 0 0 1-9.49 7.7zm-4.13-17.12s-.05 0-.07.02a8.39 8.39 0 0 0-3.86 9.06 8.39 8.39 0 0 0 8.05 6.54 8.366 8.366 0 0 0 8.03-6.54c.8-3.55-.75-7.19-3.86-9.06-.07-.04-.16-.02-.23.05l-3.43 3.48c-.28.29-.79.29-1.07 0l-3.42-3.48s-.1-.07-.15-.07z"
    />
    <Path
      fill={props.color}
      d="M11.77 16.948c-1.09 0-2.16-.45-2.93-1.22-1.61-1.63-1.61-4.29 0-5.93l2.4-2.4a.75.75 0 0 1 .53-.22c.2 0 .39.08.53.23l2.33 2.4c1.6 1.64 1.63 4.23.08 5.9a4.2 4.2 0 0 1-2.95 1.24zm0-7.95-1.86 1.86a2.716 2.716 0 0 0 0 3.81c.98.99 2.76.99 3.73 0 .99-1.07.97-2.75-.07-3.82l-1.8-1.86z"
    />
  </Svg>
);
export default IconlystDropOutline;
