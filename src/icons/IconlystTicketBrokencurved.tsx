import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTicketBrokencurved = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.609 3.6v2.655M13.609 17.544v2.22M13.609 14.544V9.255M8.421 3.632c-5.67.48-5.67 2.315-5.67 6.317 2.69 0 2.69 4.102 0 4.102 0 3.978 0 5.815 5.571 6.308M12.25 20.5c9.5 0 9.5-1.696 9.5-6.449-2.691 0-2.691-4.102 0-4.102 0-4.753 0-6.449-9.5-6.449"
    />
  </Svg>
);
export default IconlystTicketBrokencurved;
