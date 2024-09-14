import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDisallowOutline = ({
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
      fillRule="evenodd"
      d="M5.024 7.323c0-1.324 1.107-2.445 2.446-2.444 1.324 0 2.444 1.107 2.444 2.446a.75.75 0 1 1-1.5 0 .97.97 0 0 0-.945-.946.97.97 0 0 0-.945.944v6.962q.005.564.114 1.11a.75.75 0 1 1-1.471.292 7.5 7.5 0 0 1-.143-1.391V7.323M12.521 4.47a2.445 2.445 0 0 1 4.108 1.168.75.75 0 1 1-1.46.344.945.945 0 0 0-1.864.216.75.75 0 1 1-1.5 0c0-.648.258-1.27.716-1.729"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.922 2.436a2.445 2.445 0 0 1 3.38 2.26V8a.75.75 0 0 1-1.5 0V4.695a.95.95 0 0 0-.945-.945.945.945 0 0 0-.945.944v6.151a.75.75 0 0 1-1.5 0v-6.15a2.45 2.45 0 0 1 1.51-2.26M18.096 10.246c-.774 0-1.401.628-1.401 1.402v.074a.75.75 0 1 1-1.5 0v-.074a2.9 2.9 0 0 1 2.901-2.902 1.98 1.98 0 0 1 1.98 1.98l-.002 3.57a7.526 7.526 0 0 1-13.775 4.122.75.75 0 0 1 1.246-.836 6.02 6.02 0 0 0 5.003 2.668 6.026 6.026 0 0 0 6.026-5.964l.002-3.56a.48.48 0 0 0-.48-.48"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.352 4.47a.75.75 0 0 1 0 1.06L5.082 20.801a.75.75 0 0 1-1.062-1.06L19.291 4.47a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.941 8.25a.75.75 0 0 1 .75.75v5.107a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDisallowOutline;
