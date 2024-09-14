import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilter2Bulk = ({
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
    <G fill={props.color} fillRule="nonzero">
      <Path d="m14.571 13.594 5.856-5.874c.366-.368.573-.871.573-1.396V4.6C21 3.52 20.142 3 19.084 3H4.916C3.858 3 3 3.52 3 4.601v1.754c0 .497.185.976.518 1.34l5.38 5.868c.1.111.242.174.392.175l4.902.014a.53.53 0 0 0 .38-.158" />
      <Path
        d="M9.056 13.686v6.604c0 .24.121.467.32.597a.68.68 0 0 0 .664.05l3.966-1.848a.71.71 0 0 0 .407-.646v-4.757z"
        opacity={0.4}
      />
    </G>
  </Svg>
);
export default IconlystFilter2Bulk;
