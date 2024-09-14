import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeOffBoldsharp = ({
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
      d="M7.577 7.563H2.884v.5q-.005 3.938 0 7.874v.5h4.693l4.126 3.575h1.462V3.988h-1.462zM21.618 10.267l-1.06-1.06-1.734 1.733-1.733-1.734-1.06 1.061 1.733 1.734-1.733 1.732 1.061 1.061 1.732-1.733 1.732 1.733 1.061-1.06L19.885 12z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVolumeOffBoldsharp;
