import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOldTvAntennaErrorTwoTone = ({
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
      d="M17.472 20.794H7.529a4.03 4.03 0 0 1-4.029-4.03v-5.456A4.03 4.03 0 0 1 7.53 7.28h9.942a4.03 4.03 0 0 1 4.028 4.03v5.456a4.03 4.03 0 0 1-4.028 4.029"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 16.918v.01M12.5 11.102v3.212M16.996 3.205 12.444 7.28 8.006 3.205"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystOldTvAntennaErrorTwoTone;
