import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareDashBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M7.188 20.136c-1.759-.203-2.914-1.37-3.17-3.205a1 1 0 1 0-1.98.277c.38 2.725 2.265 4.61 4.921 4.914q.06.007.116.007a1 1 0 0 0 .113-1.993M21.068 16.08a1 1 0 0 0-1.13.852c-.256 1.835-1.407 3.002-3.16 3.205a1 1 0 1 0 .229 1.986c2.65-.306 4.531-2.19 4.912-4.914a1 1 0 0 0-.852-1.13M6.959 2.177c-2.655.307-4.541 2.198-4.922 4.936a1 1 0 0 0 1.981.275c.256-1.846 1.413-3.021 3.171-3.225a1 1 0 0 0 .878-1.108.996.996 0 0 0-1.108-.878M16.778 4.163c1.752.203 2.904 1.378 3.16 3.225a1 1 0 1 0 1.982-.276c-.382-2.738-2.264-4.63-4.913-4.935a1 1 0 0 0-.23 1.986" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.982 20.15h-3.964a1 1 0 1 0 0 2h3.964a1 1 0 1 0 0-2M21 9.17a1 1 0 0 0-1 1v3.96a1 1 0 1 0 2 0v-3.96a1 1 0 0 0-1-1M13.982 2.15H10.02a1 1 0 1 0 0 2h3.963a1 1 0 1 0 0-2M3 15.13a1 1 0 0 0 1-1v-3.96a1 1 0 1 0-2 0v3.96a1 1 0 0 0 1 1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSquareDashBulk;
