import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTransferLeftRightOutline = ({
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
      d="M14.368 4.328a.75.75 0 0 1 .787.076l6.3 4.813a.75.75 0 0 1 0 1.191l-6.3 4.813a.75.75 0 0 1-1.205-.596V12.75H9.3a.75.75 0 0 1-.75-.75v-1.108l-4.315 3.296 4.315 3.295v-1.108a.75.75 0 0 1 .75-.75h3.6a.75.75 0 0 1 0 1.5h-2.85V19a.75.75 0 0 1-1.205.596l-6.3-4.812a.75.75 0 0 1 0-1.193l6.3-4.812a.75.75 0 0 1 1.205.596v1.875h4.65a.75.75 0 0 1 .75.75v1.108l4.315-3.295-4.315-3.296v1.108a.75.75 0 0 1-.75.75h-3.6a.75.75 0 0 1 0-1.5h2.85V5a.75.75 0 0 1 .418-.672"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTransferLeftRightOutline;
