import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHideBulkcurved = ({
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
      d="M8.34 12.518a3.91 3.91 0 0 1 3.91-3.91c.76 0 1.48.22 2.08.61l-1.1 1.1a2.411 2.411 0 0 0-3.18 3.18l-1.11 1.11a3.9 3.9 0 0 1-.6-2.09m2.72 2.1 3.29-3.28 1.08-1.09 3.3-3.29-.01-.01 1.7-1.7c.3-.29.3-.77 0-1.06a.754.754 0 0 0-1.06 0l-1.92 1.92c-1.5-.85-3.28-1.39-5.19-1.39-5.4 0-9.75 4.27-9.75 7.8 0 1.85 1.19 3.9 3.1 5.43l-2.01 2.01c-.3.3-.3.77 0 1.06.14.15.34.22.53.22s.38-.07.53-.22l1.07-1.06 1.13-1.14h.01z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m19.85 7.958-3.77 3.77a3.916 3.916 0 0 1-4.62 4.62h-.01l-3.18 3.18c1.21.49 2.56.79 3.98.79 5.4 0 9.75-4.26 9.75-7.8 0-1.52-.81-3.17-2.15-4.56"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystHideBulkcurved;
