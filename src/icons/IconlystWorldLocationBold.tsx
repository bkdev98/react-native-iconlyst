import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWorldLocationBold = ({
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
      d="M14.02 10.73c-.136-4.364-1.498-7.114-2.453-7.114s-2.316 2.75-2.452 7.114zM9.114 12.151c.14 4.37 1.5 7.11 2.45 7.11.21 0 .43-.13.65-.37-.48-1-.77-2-.77-2.81 0-1.51.58-2.89 1.53-3.93zM15.433 10.531c.58-.2 1.21-.31 1.87-.31.85 0 1.66.18 2.38.51h.86c-.34-4.29-3.68-7.74-7.92-8.23 1.72 1 2.67 4.43 2.81 8.03M10.512 2.498a9.016 9.016 0 0 0-7.919 8.232h5.098c.11-3.669 1.071-7.208 2.821-8.232M7.692 12.153h-5.1a9.02 9.02 0 0 0 7.92 8.232c-1.75-1.024-2.71-4.563-2.82-8.232M17.3 19.963c-.688-.365-2.608-2.149-2.608-3.884a2.61 2.61 0 0 1 2.607-2.608 2.61 2.61 0 0 1 2.608 2.608c0 1.735-1.92 3.52-2.608 3.884m0-7.992a4.113 4.113 0 0 0-4.108 4.108c0 2.665 3.05 5.422 4.107 5.422s4.108-2.757 4.108-5.422a4.113 4.113 0 0 0-4.108-4.108"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.322 14.994h-.046c-.553 0-.977.447-.977 1s.47 1 1.023 1a.999.999 0 1 0 0-2"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWorldLocationBold;
