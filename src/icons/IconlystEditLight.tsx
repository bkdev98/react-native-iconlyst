import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEditLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G
      fill="none"
      fillRule="evenodd"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <Path d="M13.747 20.443H21M12.78 3.795a2.245 2.245 0 0 1 3.116-.303l1.733 1.347a2.14 2.14 0 0 1 .72 2.984c-.034.054-9.537 11.941-9.537 11.941a1.7 1.7 0 0 1-1.31.633l-3.638.046-.82-3.47c-.115-.489 0-1.001.316-1.396zM11.021 6.001l5.452 4.187" />
    </G>
  </Svg>
);
export default IconlystEditLight;
