import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCameraFlipBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.956 6.85a1.37 1.37 0 0 1-.942-.418c-.045-.05-.224-.272-.638-1.049a2.73 2.73 0 0 0-2.411-1.445h-3.912c-.994 0-1.91.54-2.392 1.41-.435.79-.617 1.024-.665 1.078a1.4 1.4 0 0 1-.933.43A3.567 3.567 0 0 0 2.5 10.416v5.642a4.613 4.613 0 0 0 4.607 4.607h9.787a4.61 4.61 0 0 0 4.606-4.608v-5.644c0-1.964-1.597-3.562-3.544-3.562"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M14.343 13.406a.75.75 0 0 0 1.5 0 3.85 3.85 0 0 0-3.844-3.844c-.937 0-1.84.341-2.542.96a.751.751 0 0 0 .992 1.126 2.345 2.345 0 0 1 3.894 1.758M11.999 17.25c.94 0 1.843-.343 2.543-.963a.75.75 0 1 0-.994-1.123 2.33 2.33 0 0 1-1.549.585 2.346 2.346 0 0 1-2.343-2.344.75.75 0 1 0-1.5 0 3.85 3.85 0 0 0 3.843 3.845"
    />
  </Svg>
);
export default IconlystCameraFlipBulk;
