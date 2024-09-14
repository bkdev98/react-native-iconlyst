import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTickSquareBoldsharp = ({
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
      d="m12.72 15.843-.216.38h-.84l-.253-.335c-.015-.023-1.502-2.245-3.424-3.461l-.635-.4.802-1.268.633.4c1.385.875 2.535 2.153 3.213 3.006 1.065-1.605 3.56-4.948 7.384-7.66-1.787-2.261-4.548-3.72-7.647-3.72-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75a9.7 9.7 0 0 0-1.26-4.78c-4.834 3.447-7.479 8.037-7.508 8.088"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTickSquareBoldsharp;
