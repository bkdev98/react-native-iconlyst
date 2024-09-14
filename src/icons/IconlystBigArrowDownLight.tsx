import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBigArrowDownLight = ({
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
      d="M10.197 2.75c-.76 0-1.377.617-1.377 1.377v7.628a.53.53 0 0 1-.53.53H5.806c-1.233 0-1.848 1.5-.973 2.37 2.07 2.059 4.127 4.133 6.195 6.195a1.373 1.373 0 0 0 1.94-.002c2.069-2.066 4.13-4.138 6.201-6.2.873-.87.258-2.364-.973-2.364h-2.49a.53.53 0 0 1-.53-.53V4.128c0-.76-.616-1.377-1.377-1.377z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBigArrowDownLight;
