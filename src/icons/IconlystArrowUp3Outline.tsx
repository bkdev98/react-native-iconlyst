import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowUp3Outline = ({
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
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.751 22a.75.75 0 0 0 .75-.75v-8.2h4.252a.748.748 0 0 0 .634-1.15l-5.001-7.936a.748.748 0 0 0-1.27 0l-5 7.937a.748.748 0 0 0 .635 1.149H11v8.2c0 .414.336.75.75.75m3.642-10.45H8.11l3.642-5.78z"
    />
  </Svg>
);
export default IconlystArrowUp3Outline;
