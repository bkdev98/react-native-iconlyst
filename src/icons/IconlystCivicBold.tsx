import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCivicBold = ({
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
      d="M21.01 13.745a1.003 1.003 0 0 0-1.24.679c-.977 3.338-4.027 5.58-7.59 5.58-4.411 0-8-3.588-8-8 0-4.41 3.589-8 8-8 3.454 0 6.616 2.307 7.689 5.61a1 1 0 1 0 1.902-.62c-1.338-4.114-5.281-6.99-9.591-6.99-5.514 0-10 4.487-10 10 0 5.514 4.486 10 10 10 4.459 0 8.28-2.82 9.51-7.018a1 1 0 0 0-.68-1.241"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.19 15.625h2.16a.25.25 0 0 0 .25-.25v-2.776c.62-.442.987-1.14.987-1.894a2.33 2.33 0 0 0-2.322-2.33 2.33 2.33 0 0 0-2.322 2.33c0 .765.37 1.463.998 1.896v2.774c0 .138.112.25.25.25"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCivicBold;
