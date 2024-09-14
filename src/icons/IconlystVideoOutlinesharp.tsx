import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoOutlinesharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 26"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M1.5 5.41h15.985v15.25H1.5zM3 6.91v12.25h12.985V6.91z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m23 5.615-6.786 4.601.842 1.242L21.5 8.444v9.126l-4.411-3.197-.88 1.215L23 20.51zM8.658 9.37h4.705v1.5H8.658z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVideoOutlinesharp;
