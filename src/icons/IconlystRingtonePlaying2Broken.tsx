import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtonePlaying2Broken = ({
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
      d="m7.25 7.989-.352 1.304a5.4 5.4 0 0 1-1.096 2.098l-.724.857c-1.108 1.31-.475 3.325 1.18 3.769l10.832 2.902c1.656.444 3.21-.986 2.907-2.673l-.198-1.104a5.4 5.4 0 0 1 .098-2.365l.35-1.306A6.73 6.73 0 0 0 9.25 4.725M15.9 18.646a3.176 3.176 0 0 1-5.83.742"
    />
  </Svg>
);
export default IconlystRingtonePlaying2Broken;
