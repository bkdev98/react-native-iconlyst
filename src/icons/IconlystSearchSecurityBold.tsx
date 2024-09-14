import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchSecurityBold = ({
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
      d="M11.254 9.108c.28.03 1.43.43 1.82.6-.01.08-.01.18-.01.32-.01.31-.02.75-.02 1.41 0 1.19-1.24 1.84-1.76 2.05-.51-.21-1.75-.85-1.75-2.05 0-.65-.01-1.1-.02-1.41v-.31c.45-.21 1.53-.58 1.74-.61"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.564 10.058c-.01.3-.02.74-.02 1.38 0 2.61-2.91 3.53-3.04 3.57a.76.76 0 0 1-.43 0c-.12-.04-3.04-.94-3.04-3.57 0-.64-.01-1.07-.02-1.38-.01-.74-.02-1.02.35-1.38.39-.38 2.45-1.07 2.93-1.07.47 0 2.54.69 2.92 1.07.37.36.36.64.35 1.38m-3.43-7.56a8.42 8.42 0 1 0 0 16.84 8.42 8.42 0 0 0 0-16.84M20.992 19.794l-1.983-1.979a1 1 0 0 0-1.413 1.417l1.984 1.978a1 1 0 1 0 1.412-1.416"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchSecurityBold;
