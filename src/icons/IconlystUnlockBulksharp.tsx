import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUnlockBulksharp = ({
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
    <Path fill={props.color} d="M4.14 9.567h16.22V22.48H4.14z" opacity={0.4} />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.36 17.904h1.5v-3.721h-1.5zM8.44 9.607V8.014A3.77 3.77 0 0 1 9.565 5.33a3.78 3.78 0 0 1 2.678-1.101c1.075-.034 2.059.422 2.79 1.2l.513.548 1.095-1.026-.514-.547a5.32 5.32 0 0 0-3.864-1.675c-1.41-.03-2.748.539-3.754 1.536a5.28 5.28 0 0 0-1.57 3.765v1.576z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUnlockBulksharp;
