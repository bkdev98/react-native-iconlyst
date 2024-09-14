import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesForwardLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.509 20.805a8.98 8.98 0 0 0 10.156-1.81c3.512-3.524 3.517-9.241 0-12.771a8.986 8.986 0 0 0-12.728 0c-2.75 2.76-3.345 6.847-1.803 10.19.198.495.352.892.352 1.278 0 1.078-1.037 2.413-.346 3.106s2.021-.347 3.09-.353c.383 0 .787.16 1.279.36"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.984 9.76 2.854 2.85-2.854 2.852M15.838 12.611H8.764"
    />
  </Svg>
);
export default IconlystMessagesForwardLight;
