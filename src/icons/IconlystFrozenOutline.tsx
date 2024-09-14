import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFrozenOutline = ({
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
      d="M12.614 21.75c-.49 0-.93-.27-1.15-.72l-2-3.99h-4.37c-.49 0-.94-.27-1.15-.71-.22-.44-.17-.95.13-1.34L6.304 12l-2.24-2.99c-.29-.38-.34-.9-.12-1.34s.66-.71 1.15-.71h4.37l2-4c.22-.44.66-.71 1.15-.71s.93.27 1.15.71l2 4h4.37c.49 0 .94.27 1.15.71.22.44.17.95-.13 1.34L18.924 12l2.24 2.99c.29.38.34.9.12 1.34s-.66.71-1.15.71h-4.37l-2 4c-.22.44-.66.71-1.15.71m-7.08-6.2h4.07c.48 0 .93.28 1.15.71l1.87 3.73 1.86-3.73c.22-.44.67-.71 1.15-.71h4.07l-2.07-2.77a1.29 1.29 0 0 1 0-1.54l2.07-2.77h-4.07c-.49 0-.93-.27-1.15-.71l-1.87-3.73-1.86 3.73c-.22.44-.67.71-1.15.71h-4.07l2.07 2.77c.34.45.34 1.09 0 1.54z"
    />
    <Path
      fill={props.color}
      d="M9.924 17.04a.83.83 0 0 1-.4-.11.747.747 0 0 1-.24-1.03l1.97-3.14h-4.02c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.02l-1.97-3.14a.747.747 0 1 1 1.27-.79l2.05 3.27 2.05-3.27a.747.747 0 1 1 1.27.79l-1.97 3.14h4.01c.41 0 .75.34.75.75s-.34.75-.75.75h-4.01l1.97 3.14a.747.747 0 1 1-1.27.79l-2.05-3.27-2.05 3.27c-.14.23-.39.35-.64.35z"
    />
  </Svg>
);
export default IconlystFrozenOutline;
