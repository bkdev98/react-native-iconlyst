import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMapCloseLight = ({
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
      d="m18.405 18.215 2.064 2.063M18.406 18.217l-2.064-2.065M18.405 18.217l2.064-2.065M16.342 20.278l2.064-2.063M11.322 19.738l-2.164-.788a1.5 1.5 0 0 0-1.128.039l-3.564 1.582A1.043 1.043 0 0 1 3 19.617V6.955c0-.759.447-1.445 1.14-1.753l3.89-1.728c.357-.159.761-.173 1.128-.04l5.686 2.067a1.5 1.5 0 0 0 1.129-.04l3.558-1.582A1.04 1.04 0 0 1 21 4.833v7.054M15.415 5.586v6.299M8.586 18.855v-15.5"
    />
  </Svg>
);
export default IconlystMapCloseLight;
