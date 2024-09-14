import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeDownBulksharp = ({
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
      d="M8.94 7.564H4.247v.5q-.005 3.936 0 7.873v.5H8.94l4.126 3.576h1.462V3.987h-1.462z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m19.093 7.622-.373-.65-1.301.745.372.651a7.33 7.33 0 0 1 .001 7.265l-.374.65 1.3.747.375-.65a8.83 8.83 0 0 0 0-8.758"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVolumeDownBulksharp;
