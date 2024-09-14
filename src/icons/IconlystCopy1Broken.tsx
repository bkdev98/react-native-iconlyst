import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCopy1Broken = ({
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
      d="M6.415 15.86c-1.55-.192-2.495-1.41-2.495-3.064V9.448M14.957 5.473C14.728 3.997 13.665 3 12.063 3H6.866C5.056 3 3.92 4.285 3.92 6.1M20.081 17.904c0 1.815-1.13 3.096-2.947 3.096H11.94c-1.816 0-2.946-1.281-2.946-3.096V11.21c0-1.814 1.136-3.096 2.946-3.096h5.195c1.817 0 2.946 1.282 2.946 3.096v3.348"
    />
  </Svg>
);
export default IconlystCopy1Broken;
