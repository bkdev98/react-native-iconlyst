import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScale3Bulk = ({
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
      d="M18.1 2.824a.284.284 0 0 0-.372.277v3.604a2.4 2.4 0 0 1-2.397 2.398H8.67a2.4 2.4 0 0 1-2.399-2.398V3.1a.284.284 0 0 0-.372-.277C3.814 3.534 2.5 5.437 2.5 8.026v7.948c0 3.306 2.123 5.526 5.282 5.526h8.434c3.16 0 5.284-2.22 5.284-5.526V8.026c0-2.588-1.314-4.492-3.4-5.202"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.772 6.705a.9.9 0 0 0 .898.898h2.13a.3.3 0 0 0 .275-.18l.752-1.728a.75.75 0 0 1 1.375.598l-.51 1.17a.1.1 0 0 0 .092.14h2.548a.9.9 0 0 0 .897-.898l-.011-3.908a.296.296 0 0 0-.297-.297l-7.85.001a.3.3 0 0 0-.3.3z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M7.84 17.541h8.322a.75.75 0 0 0 0-1.5H7.84a.75.75 0 0 0 0 1.5"
    />
  </Svg>
);
export default IconlystScale3Bulk;
