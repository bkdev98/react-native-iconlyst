import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftHandOutline = ({
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
      d="M4.724 7.323c0-1.324 1.108-2.445 2.446-2.444 1.324 0 2.445 1.107 2.444 2.446a.75.75 0 1 1-1.5 0 .97.97 0 0 0-.944-.946.97.97 0 0 0-.946.944v6.962a6.026 6.026 0 0 0 12.05 0l.002-3.56a.48.48 0 0 0-.479-.48c-.774 0-1.401.627-1.401 1.401v.074a.75.75 0 0 1-1.5 0v-.074a2.9 2.9 0 0 1 2.901-2.901 1.98 1.98 0 0 1 1.98 1.98l-.002 3.57a7.526 7.526 0 0 1-15.051 0V7.324"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.22 4.47a2.445 2.445 0 0 1 4.174 1.73l-.003 7.909a.75.75 0 0 1-1.5 0l.003-7.91a.945.945 0 1 0-1.89 0 .75.75 0 1 1-1.5-.001c0-.648.258-1.27.717-1.729"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.621 2.436a2.445 2.445 0 0 1 3.38 2.26v7.15a.75.75 0 0 1-1.5 0v-7.15a.95.95 0 0 0-.583-.874.945.945 0 0 0-1.307.872l.001 7.151a.75.75 0 0 1-1.5 0v-7.15a2.45 2.45 0 0 1 1.51-2.26"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLeftHandOutline;
