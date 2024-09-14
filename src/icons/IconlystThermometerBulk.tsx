import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThermometerBulk = ({
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
      d="M21.5 7.17c0 1.24-.48 2.41-1.37 3.29l-.29.29-1.06 1.07-2.72 2.72-1.67 1.66-1.06 1.06-.77.78c-.41.4-.95.67-1.53.74l-1.9.22c-.35.05-.69.21-.94.46L6.9 20.75c-.5.5-1.16.75-1.82.75s-1.32-.25-1.82-.75a2.57 2.57 0 0 1 0-3.65l1.29-1.29c.25-.25.41-.59.45-.94l.23-1.89c.07-.58.32-1.11.74-1.54l7.58-7.57c.87-.88 2.04-1.37 3.29-1.37 1.24 0 2.42.49 3.3 1.37s1.36 2.05 1.36 3.3"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m14.39 16.2-1.06 1.06-2-1.99a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0zM17.12 13.48l-1.06 1.06-2-1.99c-.3-.29-.3-.77 0-1.06.29-.3.76-.3 1.06-.01zM19.84 10.75l-1.06 1.07-1.96-1.96c-.3-.3-.3-.77-.01-1.06.3-.3.77-.3 1.06-.01z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystThermometerBulk;
