import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarSettingLight = ({
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
      d="M17.413 17.314v.017m.044-.192a.216.216 0 0 1 .21.258.216.216 0 1 1-.21-.258"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.982 15.898-.002-.004a.8.8 0 0 1-.112-.399l.008-.46a.73.73 0 0 0-.297-.601 3.6 3.6 0 0 0-.657-.378.73.73 0 0 0-.669.043l-.394.236a.77.77 0 0 1-.402.103h-.005a.8.8 0 0 1-.4-.103l-.395-.236a.73.73 0 0 0-.67-.043q-.347.155-.656.379a.73.73 0 0 0-.296.601l.008.459a.8.8 0 0 1-.113.4l-.002.005a.8.8 0 0 1-.29.294l-.401.224a.74.74 0 0 0-.375.574 3.6 3.6 0 0 0 .001.727c.024.24.163.456.375.574l.4.222c.124.069.22.174.29.297l.003.003c.07.123.114.259.112.4l-.008.459a.73.73 0 0 0 .298.602q.307.224.656.378a.73.73 0 0 0 .669-.043l.393-.236a.77.77 0 0 1 .402-.103h.005c.142 0 .28.03.401.103l.394.236a.73.73 0 0 0 .67.043q.349-.155.657-.378a.73.73 0 0 0 .296-.602l-.008-.459a.77.77 0 0 1 .113-.4l.002-.005a.8.8 0 0 1 .29-.295l.401-.222a.74.74 0 0 0 .375-.575 3.6 3.6 0 0 0-.001-.727.74.74 0 0 0-.375-.573l-.4-.223a.8.8 0 0 1-.291-.297M14.32 11.331h1.573M6.551 11.331h1.573M3.356 7.668c5.215.74 10.509.74 15.724 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.097 11.094c-.001-.71-.227-1.4-.646-1.972l-1.02-1.369a1.6 1.6 0 0 1-.196-.373l-.918-2.55a1.96 1.96 0 0 0-1.513-1.267 23 23 0 0 0-7.148 0A1.96 1.96 0 0 0 6.152 4.83l-.918 2.55a1.5 1.5 0 0 1-.195.357L4.002 9.164a3.3 3.3 0 0 0-.63 1.947l-.014 4.554a.875.875 0 0 0 .875.877h1.734a.875.875 0 0 0 .874-.875v-.358c0-.483.392-.875.875-.875h4.308"
    />
  </Svg>
);
export default IconlystCarSettingLight;
