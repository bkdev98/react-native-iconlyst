import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLogout2Outlinesharp = ({
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
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.8 2.639v6.125h-1.5V4.139H3.274v17H12.3v-4.625h1.5v6.125H1.775v-20z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M22.725 11.89H7.285v1.5h15.44z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.974 13.39c-2.945 0-5.345-2.585-5.345-5.346v-.75h1.5v.75c0 1.964 1.76 3.846 3.845 3.846h.75v1.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.974 11.89c-2.945 0-5.345 2.585-5.345 5.345v.75h1.5v-.75c0-1.964 1.76-3.845 3.845-3.845h.75v-1.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLogout2Outlinesharp;
