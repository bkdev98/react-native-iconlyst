import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStar7Outlinesharp = ({
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
      d="m12.25.323 2.622 8.069h8.484l-6.864 4.986 2.622 8.069-6.864-4.987-6.864 4.987 2.622-8.069-6.864-4.986h8.484zm0 4.854-1.532 4.715H5.761l4.01 2.913L8.24 17.52l4.01-2.914 4.01 2.914-1.531-4.715 4.01-2.913h-4.957z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStar7Outlinesharp;
