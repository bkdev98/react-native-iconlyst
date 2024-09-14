import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCpuProcessorBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M8.031 4.031a4 4 0 0 0-4 4v7.944a4 4 0 0 0 4 4h7.934a4 4 0 0 0 4-4V8.03a4 4 0 0 0-4-4zM13.67 16.31c1.6 0 2.64-1 2.64-2.55v-3.52c0-.74-.24-1.38-.69-1.83-.47-.47-1.14-.72-1.95-.72h-3.34c-1.6 0-2.64 1-2.64 2.55v3.49c0 1.57 1.04 2.58 2.64 2.58z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M8.7 3a.75.75 0 0 0-1.5 0v1.182a6 6 0 0 1 1.395-.153h.104zM3 7.2h1.156a5.5 5.5 0 0 0-.129 1.209V8.7H3a.75.75 0 0 1 0-1.5M4.027 11.25H3a.75.75 0 0 0 0 1.5h1.027zM3 15.3h1.027v.226q0 .676.14 1.273H3a.75.75 0 0 1 0-1.5M7.2 19.817V21a.75.75 0 0 0 1.5 0v-1.027h-.105a6 6 0 0 1-1.396-.156M11.249 21v-1.027h1.5V21a.75.75 0 0 1-1.5 0M15.299 19.973V21a.75.75 0 0 0 1.5 0v-1.18a6 6 0 0 1-1.396.153zM21 16.8h-1.158q.129-.571.129-1.213V15.3h1.03a.75.75 0 0 1 0 1.5M19.971 12.75h1.03a.75.75 0 0 0 0-1.5h-1.03zM21 8.7h-1.029v-.29q.002-.64-.125-1.21H21a.75.75 0 0 1 0 1.5M16.799 4.18V3a.75.75 0 0 0-1.5 0v1.03h.111c.487 0 .953.048 1.389.15M12.749 3v1.03h-1.5V3a.75.75 0 1 1 1.5 0M10.329 9.195h3.345c.278 0 .657.048.886.278q.247.247.246.765v3.524c0 .45-.118 1.046-1.136 1.046h-3.341c-1.017 0-1.135-.614-1.135-1.076v-3.494c0-.448.118-1.043 1.135-1.043"
    />
  </Svg>
);
export default IconlystCpuProcessorBulk;
