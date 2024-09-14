import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReelsLikeBulk = ({
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
      d="M21.05 7.78v8.45c0 3.15-2.03 5.27-5.04 5.27H8c-3.02 0-5.05-2.12-5.05-5.27V7.78c0-.36.03-.71.08-1.05.4-2.54 2.26-4.2 4.89-4.23h8.16c2.63.03 4.49 1.68 4.89 4.23.05.34.08.69.08 1.05"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.92 2.5v4.23H3.03c-.05.34-.08.69-.08 1.05v.45h18.1v-.45c0-.36-.03-.71-.08-1.05h-4.89V2.5h-1.5v4.23H9.42V2.5zM12.361 18.308c.266-.146 2.617-1.484 3.211-3.375.492-1.529-.23-3.085-1.646-3.542a2.62 2.62 0 0 0-1.793.071.34.34 0 0 1-.26 0 2.63 2.63 0 0 0-1.805-.07c-1.413.455-2.134 2.011-1.642 3.541.616 1.917 2.951 3.232 3.215 3.377a.75.75 0 0 0 .72-.002m.087-5.315a1.13 1.13 0 0 1 1.019-.175c.712.23.881 1.024.676 1.66-.273.867-1.275 1.705-1.984 2.189a.29.29 0 0 1-.323 0c-.703-.479-1.698-1.313-1.981-2.194-.204-.63-.036-1.426.672-1.655q.174-.053.35-.054c.24 0 .476.077.668.224a.75.75 0 0 0 .903.005"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReelsLikeBulk;
