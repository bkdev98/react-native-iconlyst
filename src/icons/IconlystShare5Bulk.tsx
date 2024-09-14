import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShare5Bulk = ({
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
    <G fill={props.color} opacity={0.4}>
      <Path d="M4.022 11.552a.75.75 0 0 1-.723-.951 8.7 8.7 0 0 1 5.5-5.874.75.75 0 0 1 .498 1.415 7.2 7.2 0 0 0-4.553 4.861.75.75 0 0 1-.722.55M11.702 21.625a8.76 8.76 0 0 1-5.621-2.043.751.751 0 0 1 .965-1.148 7.25 7.25 0 0 0 6.26 1.508.749.749 0 1 1 .338 1.461 8.6 8.6 0 0 1-1.942.222M19.382 14.964a.75.75 0 0 0 .865-.613 8.76 8.76 0 0 0-2.805-7.973.75.75 0 1 0-.995 1.123 7.25 7.25 0 0 1 2.322 6.598.75.75 0 0 0 .613.865" />
    </G>
    <Path
      fill={props.color}
      d="M8.5 4.816a2.444 2.444 0 0 0 2.442 2.441 2.444 2.444 0 0 0 2.44-2.44 2.444 2.444 0 0 0-2.44-2.442A2.444 2.444 0 0 0 8.5 4.816M16.425 16.075a2.443 2.443 0 0 0 2.441 2.441 2.443 2.443 0 0 0 2.44-2.44 2.443 2.443 0 0 0-2.44-2.442 2.443 2.443 0 0 0-2.44 2.441M2.694 17.716a2.444 2.444 0 0 0 2.442 2.44 2.444 2.444 0 0 0 2.44-2.44 2.444 2.444 0 0 0-2.44-2.442 2.444 2.444 0 0 0-2.442 2.441M10.141 15.346h3.174c.49 0 .93-.254 1.176-.677s.247-.931.005-1.356l-1.576-2.769a1.35 1.35 0 0 0-1.179-.687h-.003c-.492 0-.932.255-1.178.682l-1.596 2.768a1.35 1.35 0 0 0 0 1.36c.245.425.685.678 1.177.678"
    />
  </Svg>
);
export default IconlystShare5Bulk;
