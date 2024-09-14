import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLampBulk = ({
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
      fill={props.color}
      d="M4.688 9.807c0-4.541 4.147-8.103 8.841-7.152 2.788.57 5.04 2.808 5.623 5.598a7.34 7.34 0 0 1-2.208 6.944.48.48 0 0 1-.328.125h-4.362a.75.75 0 0 0 0 1.5h2.432a.5.5 0 0 1 .5.5v.998c0 1.75-1.43 3.18-3.18 3.18s-3.18-1.43-3.18-3.18v-1.626a.52.52 0 0 0-.282-.458 7.27 7.27 0 0 1-3.856-6.429"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12.666 7.396a.75.75 0 0 0-1.318-.717L9.92 9.306a.75.75 0 0 0 .659 1.108h1.58l-.826 1.518a.75.75 0 1 0 1.317.717l1.43-2.626a.75.75 0 0 0-.658-1.109H11.84z"
    />
  </Svg>
);
export default IconlystLampBulk;
