import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEditSquareBoldsharp = ({
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
      d="m16.253 12.002-3.47-3.47 2.165-2.166 3.47 3.47zm-10.58 7.109-.002-3.466 6.052-6.052 3.468 3.47-6.051 6.052zM2.52 22.354h19.46v-19.5H2.52z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEditSquareBoldsharp;
