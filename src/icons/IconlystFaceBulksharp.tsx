import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFaceBulksharp = ({
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
      d="M12.25 2.389c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75S22 17.515 22 12.139s-4.374-9.75-9.75-9.75"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M15.896 12.063h1.5v-1.5h-1.51zM9.528 15.96h4.766v-1.5h-3.61l1.934-6.551-1.44-.425-2.22 7.529zM6.443 12.063h1.5v-1.5h-1.51z"
    />
  </Svg>
);
export default IconlystFaceBulksharp;
