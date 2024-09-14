import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRippleBulk = ({
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
      fillRule="evenodd"
      d="M12.5 2.5C7.262 2.5 3 6.762 3 12s4.262 9.5 9.5 9.5S22 17.238 22 12s-4.261-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12.924 15.108a2.263 2.263 0 0 0 2.261 2.26 2.263 2.263 0 0 0 2.261-2.26c0-1.246-1.015-2.26-2.242-2.26-.622-.042-.869-.481-.892-.845-.022-.349.153-.796.731-.909a2.25 2.25 0 0 0 1.405-1.011 2.25 2.25 0 0 0 .28-1.708 2.27 2.27 0 0 0-2.717-1.685 2.24 2.24 0 0 0-1.405 1.009 2.25 2.25 0 0 0-.281 1.709l.004.014c.165.576-.023 1.256-.429 1.548-.326.235-.741.192-1.183-.112a2.25 2.25 0 0 0-1.659-.487 2.263 2.263 0 0 0 .476 4.498 2.22 2.22 0 0 0 1.497-.802c.397-.387.802-.496 1.171-.318.444.215.775.824.722 1.359"
    />
  </Svg>
);
export default IconlystRippleBulk;
