import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBag3Bulksharp = ({
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
      d="M2.5 6.952v5.44c0 5.38 4.37 9.75 9.75 9.75s9.75-4.37 9.75-9.75v-5.44z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.48 6.875a4.76 4.76 0 0 1 4.781-4.74 4.76 4.76 0 0 1 4.758 4.761v3.974h-1.5V6.896a3.26 3.26 0 0 0-3.26-3.26h-.003A3.26 3.26 0 0 0 8.98 6.88v3.99h-1.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBag3Bulksharp;
