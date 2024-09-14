import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeOffBulksharp = ({
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
      d="M7.578 7.564H2.885v.5q-.005 3.936 0 7.874v.498h4.693l4.126 3.576h1.462V3.988h-1.462z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m21.618 10.267-1.06-1.06-1.734 1.733-1.733-1.734-1.06 1.061 1.733 1.734-1.733 1.732 1.061 1.061 1.732-1.733 1.732 1.733 1.061-1.06L19.885 12z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVolumeOffBulksharp;
