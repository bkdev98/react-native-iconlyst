import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongsWaveCheckCompleteBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.856 17.281 1.54 1.541 3.854-3.853M19.938 9.912v1.771M15.773 6.709v6.362M7.445 6.84v10.45M3.281 10.176v3.911M11.61 3.75V12M11.61 16.125v4.125"
    />
  </Svg>
);
export default IconlystSongsWaveCheckCompleteBroken;
