import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThreadsTwoTone = ({
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
      d="M19.808 9.615c-.315-1.189-.81-2.213-1.484-3.063-1.366-1.722-3.364-2.604-5.939-2.622h-.01c-2.569.018-4.545.904-5.872 2.632-1.18 1.538-1.79 3.679-1.81 6.361v.013c.02 2.683.63 4.823 1.81 6.361 1.327 1.729 3.303 2.614 5.872 2.633h.01"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.385 21.93c2.284-.017 3.894-.63 5.22-1.987 1.74-1.78 1.918-4.711 0-6.423-1.3-1.16-3.267-1.393-5.032-1.29-2.18.129-3.174 1.374-3.112 2.554.159 3.061 3.89 3.321 5.598 1.092 1.11-1.45 1.125-3.365.56-5.102-.953-2.92-4.422-2.894-6.158-.739"
    />
  </Svg>
);
export default IconlystThreadsTwoTone;
