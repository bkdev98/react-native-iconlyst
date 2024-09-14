import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunWindyLight = ({
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
      d="M12.055 3v1.372M4.427 12H3.055m15.364-6.364-.97.97M6.66 17.394l-.97.97m.97-11.758-.97-.97M15.022 9.034a4.195 4.195 0 1 0-5.934 5.934M16.647 12.33a1.207 1.207 0 0 1 2.21.675c0 .667-.488 1.208-1.209 1.208h-5.044M13.537 20.523a1.082 1.082 0 0 0 1.981-.606c0-.598-.437-1.083-1.083-1.083h-2.807M18.777 18.943a1.321 1.321 0 0 0 2.278-.911c0-.73-.484-1.307-1.32-1.321h-5.14"
    />
  </Svg>
);
export default IconlystSunWindyLight;
