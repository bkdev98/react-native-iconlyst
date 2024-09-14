import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWindDirectionOutline = ({
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
      d="M12.558 4.139a1 1 0 0 0-.749.335.75.75 0 1 1-1.118-1 2.505 2.505 0 0 1 4.373 1.669c0 1.364-1.03 2.506-2.506 2.506H8.471a.75.75 0 0 1 0-1.5h4.087c.607 0 1.005-.43 1.005-1.006 0-.554-.45-1.004-1.005-1.004M9.227 15.275a.75.75 0 0 1 .75-.75h7.978c1.657 0 2.797 1.275 2.797 2.797a2.796 2.796 0 0 1-5.116 1.565.75.75 0 0 1 1.243-.84 1.296 1.296 0 0 0 2.373-.724c0-.74-.512-1.298-1.297-1.298H9.977a.75.75 0 0 1-.75-.75M2.864 11.47a.75.75 0 0 1 .75-.75h8.778a.75.75 0 0 1 0 1.5H3.614a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.098 8.987a.75.75 0 0 1 0 1.06L4.675 11.47l1.423 1.424a.75.75 0 0 1-1.06 1.06l-1.954-1.953a.75.75 0 0 1 0-1.06l1.954-1.954a.75.75 0 0 1 1.06 0M19.29 7.32c-.485 0-.921.203-1.232.529a.75.75 0 0 1-1.086-1.035 3.2 3.2 0 0 1 5.517 2.207c0 .843-.282 1.642-.85 2.24-.572.601-1.384.944-2.337.96h-4.313a.75.75 0 1 1 0-1.5h4.294c.595-.011 1.006-.217 1.27-.494.268-.283.436-.696.436-1.206a1.7 1.7 0 0 0-1.7-1.7M4.097 18.553a.75.75 0 0 1 .75-.75h5.13a.75.75 0 1 1 0 1.5h-5.13a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWindDirectionOutline;
