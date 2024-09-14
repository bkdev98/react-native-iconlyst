import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudsPlanetOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.009 11.413a.75.75 0 0 0-.79.707 8.8 8.8 0 0 0 12.355 8.54.75.75 0 1 0-.61-1.371 7.3 7.3 0 0 1-10.248-7.086.75.75 0 0 0-.707-.79M13.006 5.313a7.3 7.3 0 0 1 6.925 9.618.75.75 0 0 0 1.422.476A8.8 8.8 0 0 0 8.861 4.847.75.75 0 1 0 9.57 6.17a7.27 7.27 0 0 1 3.437-.857"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.487 5.952a3.123 3.123 0 1 0 0 6.246h4.665a1.825 1.825 0 1 0-.673-3.522.75.75 0 0 1-.996-.485 3.125 3.125 0 0 0-2.996-2.24M2.864 9.075a4.623 4.623 0 0 1 8.797-1.99q.24-.037.491-.037a3.325 3.325 0 1 1 0 6.65H7.487a4.623 4.623 0 0 1-4.623-4.623M18.99 15.41a1.874 1.874 0 0 1 0 3.748h-3.16a.994.994 0 1 1 .366-1.919.75.75 0 0 0 .996-.485 1.875 1.875 0 0 1 1.799-1.344m3.374 1.874a3.374 3.374 0 0 0-6.34-1.607 2.494 2.494 0 1 0-.193 4.981h3.16a3.374 3.374 0 0 0 3.373-3.374"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudsPlanetOutline;
