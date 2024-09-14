import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeUpBulksharp = ({
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
      d="M7.079 7.564H2.385v.5q-.003 3.936 0 7.873v.5h4.694l4.126 3.576h1.463V3.987h-1.463z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m19.918 4.947-.428-.616-1.232.856.428.615c2.617 3.77 2.617 8.634 0 12.395l-.428.615 1.23.857.43-.616c2.932-4.214 2.932-9.883 0-14.106"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m17.231 7.623-.373-.651-1.3.745.371.65a7.33 7.33 0 0 1 .001 7.267l-.374.65 1.301.747.374-.65a8.84 8.84 0 0 0 0-8.758"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVolumeUpBulksharp;
