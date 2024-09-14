import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEditBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.748 20.443H21M8.07 9.686l4.71-5.891a2.245 2.245 0 0 1 3.116-.303l1.733 1.347a2.14 2.14 0 0 1 .72 2.984c-.034.054-9.537 11.942-9.537 11.942a1.7 1.7 0 0 1-1.31.632l-3.638.046-.82-3.47c-.115-.489 0-1.001.316-1.396l2.355-2.945M11.021 6l2.726 2.094"
    />
  </Svg>
);
export default IconlystEditBroken;
