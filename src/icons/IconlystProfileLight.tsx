import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystProfileLight = ({
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
    >
      <Path
        strokeWidth={1.5}
        d="M11.985 15.346c-3.868 0-7.17.585-7.17 2.927s3.281 2.947 7.17 2.947c3.867 0 7.17-.585 7.17-2.926s-3.282-2.948-7.17-2.948"
      />
      <Path
        strokeWidth={1.429}
        d="M11.985 12.006A4.596 4.596 0 1 0 7.389 7.41a4.58 4.58 0 0 0 4.563 4.596z"
      />
    </G>
  </Svg>
);
export default IconlystProfileLight;
