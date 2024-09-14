import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOldTvAntennaErrorLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.972 20.794H7.029A4.03 4.03 0 0 1 3 16.764v-5.456A4.03 4.03 0 0 1 7.03 7.28h9.942A4.03 4.03 0 0 1 21 11.31v5.456a4.03 4.03 0 0 1-4.028 4.029M12 16.918v.01M12 11.102v3.212M16.496 3.205 11.944 7.28 7.506 3.205"
    />
  </Svg>
);
export default IconlystOldTvAntennaErrorLight;
