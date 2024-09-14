import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpload2Outlinesharp = ({
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
      d="M2.25 10.59h6.125v1.5H3.75v9.023h17V12.09h-4.625v-1.5h6.125v12.024h-20z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.501 1.664v15.44h1.5V1.663z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.001 2.414c0 2.945-2.585 5.346-5.346 5.346h-.75v-1.5h.75c1.965 0 3.846-1.76 3.846-3.846v-.75h1.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.501 2.414c0 2.945 2.585 5.346 5.345 5.346h.75v-1.5h-.75c-1.964 0-3.845-1.76-3.845-3.846v-.75h-1.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUpload2Outlinesharp;
