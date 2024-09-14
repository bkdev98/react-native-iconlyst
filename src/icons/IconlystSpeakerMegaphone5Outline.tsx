import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpeakerMegaphone5Outline = ({
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
      fill={props.color}
      d="M6.175 16.979a3.24 3.24 0 0 1-2.9-2.083l-.391-.863a3.12 3.12 0 0 1 .89-4.05 37 37 0 0 0 6.34-5.537 2.63 2.63 0 0 1 2.383-.865 3.7 3.7 0 0 1 2.648 2.308l2.66 5.847a2.81 2.81 0 0 1-.177 2.672 2.86 2.86 0 0 1-2.371 1.34c-2.813.06-5.61.442-8.336 1.136a3 3 0 0 1-.746.095m5.915-11.93a1.16 1.16 0 0 0-.866.407 38.5 38.5 0 0 1-6.6 5.764 1.725 1.725 0 0 0-.374 2.194l.39.861c.158.345.76 1.452 1.907 1.156a38.6 38.6 0 0 1 8.677-1.183 1.35 1.35 0 0 0 1.134-.638 1.3 1.3 0 0 0 .082-1.252L13.78 6.51a2.26 2.26 0 0 0-1.518-1.447 1 1 0 0 0-.172-.014"
    />
    <Path
      fill={props.color}
      d="M11.337 21.36a2.47 2.47 0 0 1-2.24-1.438l-1.714-3.77a.75.75 0 1 1 1.365-.621l1.715 3.77a.959.959 0 0 0 1.745-.793l-1.34-2.946a.75.75 0 1 1 1.366-.621l1.34 2.945a2.46 2.46 0 0 1-2.237 3.474M7.103 13.155a.75.75 0 0 1-.683-.44L5.094 9.798a.75.75 0 1 1 1.365-.62l1.326 2.918a.75.75 0 0 1-.682 1.06M20.66 11.576a.75.75 0 0 1-.662-1.1 4.4 4.4 0 0 0-2.976-6.355.75.75 0 0 1 .312-1.467 5.93 5.93 0 0 1 4.145 3.327 5.86 5.86 0 0 1-.154 5.2.75.75 0 0 1-.664.395"
    />
    <Path
      fill={props.color}
      d="M18.44 10.482a.75.75 0 0 1-.7-1.03A2.144 2.144 0 0 0 16.5 6.637a.751.751 0 0 1 .524-1.407 3.646 3.646 0 0 1 2.11 4.783.75.75 0 0 1-.692.469"
    />
  </Svg>
);
export default IconlystSpeakerMegaphone5Outline;
