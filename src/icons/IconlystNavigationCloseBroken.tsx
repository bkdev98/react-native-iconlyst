import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNavigationCloseBroken = ({
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
      d="M17.125 12.63 13.5 5.36c-.701-1.408-2.712-1.4-3.402.014l-2.825 5.791M13.378 18.124l-.858-.356a1.9 1.9 0 0 0-1.467.006l-4.16 1.762c-1.614.684-3.213-1.002-2.444-2.578l1.413-2.895M16.66 16.102l3.59 3.59M20.25 16.102l-3.59 3.59"
    />
  </Svg>
);
export default IconlystNavigationCloseBroken;
