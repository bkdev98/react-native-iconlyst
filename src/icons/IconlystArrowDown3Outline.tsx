import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowDown3Outline = ({
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
    <G fill="none" fillRule="evenodd">
      <Path
        fill={props.color}
        d="M11.751 3a.75.75 0 0 1 .75.75v8.2h4.252a.748.748 0 0 1 .634 1.15l-5.001 7.936a.748.748 0 0 1-1.27 0l-5-7.937a.748.748 0 0 1 .635-1.149H11v-8.2a.75.75 0 0 1 .75-.75m3.642 10.45H8.11l3.642 5.78z"
      />
    </G>
  </Svg>
);
export default IconlystArrowDown3Outline;
