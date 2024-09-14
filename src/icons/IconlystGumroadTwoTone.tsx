import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGumroadTwoTone = ({
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
      d="M20.762 8.6c.053.205.149.964.143 1.041h-4.441c-.567-1.483-1.18-2.73-2.843-3.185-1.872-.51-3.9.247-5.077 1.787-1.906 2.493-1.522 6.601.937 8.602 1.025.834 2.44 1.131 3.73.846 2.006-.443 3.67-2.395 3.675-4.477"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.977 12.89h7.927v7.825h-4.01v-7.824"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.887 15.893c-.552 5.116-6.589 6.117-9.844 4.203-3.636-2.14-4.589-6.903-3.558-10.744.842-3.14 3.381-5.4 6.536-6.097 4.297-.947 9.544.721 10.741 5.345"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystGumroadTwoTone;
