import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOldTvAntennaErrorBroken = ({
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
      d="M12.5 20.794h4.972a4.03 4.03 0 0 0 4.028-4.03v-5.456a4.03 4.03 0 0 0-4.028-4.029H7.529A4.03 4.03 0 0 0 3.5 11.31v5.456a4.03 4.03 0 0 0 4.03 4.029h1.275M12.5 16.918v.01M12.5 11.102v3.212"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.996 3.205 12.444 7.28 8.006 3.205"
    />
  </Svg>
);
export default IconlystOldTvAntennaErrorBroken;
