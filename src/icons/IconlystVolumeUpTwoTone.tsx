import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeUpTwoTone = ({
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
    <G
      fill="none"
      fillRule="evenodd"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <Path d="M2.502 12c-.003 1.23-.058 2.907.703 3.534.71.585 1.209.434 2.504.53 1.297.095 4.033 3.906 6.142 2.7 1.088-.855 1.17-2.649 1.17-6.764s-.082-5.909-1.17-6.764C9.742 4.029 7.006 7.84 5.71 7.937c-1.295.095-1.794-.055-2.504.53-.76.626-.706 2.303-.703 3.533" />
      <Path
        d="M19.584 5.904a10.66 10.66 0 0 1 0 12.192M17.081 8.314a7.4 7.4 0 0 1 0 7.372"
        opacity={0.4}
      />
    </G>
  </Svg>
);
export default IconlystVolumeUpTwoTone;
