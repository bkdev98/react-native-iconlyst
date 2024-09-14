import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldDoneBrokencurved = ({
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
      d="M15.588 20.422c2.173-1.224 4.334-3.646 4.334-7.722 0-6.403.278-6.904-.337-7.52-.616-.616-3.826-2.607-7.335-2.607S5.53 4.563 4.916 5.18c-.616.616-.338 1.117-.338 7.52 0 6.406 5.338 8.728 7.672 8.728"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.652 11.697 1.892 1.895 3.898-3.9"
    />
  </Svg>
);
export default IconlystShieldDoneBrokencurved;
