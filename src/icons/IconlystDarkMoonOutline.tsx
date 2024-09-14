import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDarkMoonOutline = ({
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
      d="M12.604 21.75c-5.37 0-9.74-4.37-9.74-9.74 0-4.33 2.9-8.18 7.06-9.36.28-.08.65.03.84.26.21.25.24.6.09.89-1.5 2.83-.97 6.39 1.3 8.66s5.83 2.8 8.65 1.3c.26-.14.65-.11.88.08.24.19.36.56.28.85a9.78 9.78 0 0 1-9.37 7.07zM8.884 4.66a8.26 8.26 0 0 0-4.52 7.35c0 4.54 3.7 8.24 8.24 8.24 3.13 0 5.97-1.8 7.35-4.53-3.07.93-6.53.12-8.86-2.21s-3.14-5.78-2.21-8.86zm1.45-.57h-.01z"
    />
    <Path
      fill={props.color}
      d="M12.614 21.75a9.65 9.65 0 0 1-6.89-2.86c-3.8-3.8-3.8-9.99 0-13.79a9.7 9.7 0 0 1 6.89-2.86c2.6 0 5.05 1.01 6.89 2.86a9.7 9.7 0 0 1 2.86 6.89c0 2.6-1.01 5.05-2.86 6.89a9.7 9.7 0 0 1-6.89 2.86zm0-18c-2.2 0-4.28.86-5.83 2.42-3.22 3.22-3.22 8.45 0 11.67a8.2 8.2 0 0 0 5.83 2.42c2.2 0 4.28-.86 5.83-2.42a8.2 8.2 0 0 0 2.42-5.83c0-2.2-.86-4.28-2.42-5.83a8.2 8.2 0 0 0-5.83-2.42z"
    />
  </Svg>
);
export default IconlystDarkMoonOutline;
