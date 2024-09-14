import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScale3Bold = ({
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
      d="M7.771 6.705a.9.9 0 0 0 .898.898h2.13a.3.3 0 0 0 .276-.18l.751-1.728a.75.75 0 0 1 1.375.598l-.509 1.17a.1.1 0 0 0 .092.14h2.547a.9.9 0 0 0 .897-.898l-.01-3.908a.296.296 0 0 0-.298-.297l-7.85.001a.3.3 0 0 0-.299.3z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.162 17.541H7.84a.75.75 0 0 1 0-1.5h8.322a.75.75 0 0 1 0 1.5M18.1 2.824a.284.284 0 0 0-.372.277v3.604a2.4 2.4 0 0 1-2.397 2.398H8.67a2.4 2.4 0 0 1-2.399-2.398V3.101a.284.284 0 0 0-.372-.277C3.814 3.534 2.5 5.437 2.5 8.026v7.948c0 3.306 2.123 5.526 5.282 5.526h8.434c3.16 0 5.284-2.22 5.284-5.526V8.026c0-2.588-1.314-4.492-3.4-5.202"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScale3Bold;
