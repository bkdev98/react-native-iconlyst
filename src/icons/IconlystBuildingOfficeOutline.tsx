import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBuildingOfficeOutline = ({
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
      d="M11.052 3.75a.58.58 0 0 0-.582.581v1.566a.75.75 0 0 1-.75.75H5.052a.58.58 0 0 0-.581.58V19.67c0 .321.26.581.58.581h9.92V4.331c0-.32-.261-.581-.582-.581zm-6 18a2.08 2.08 0 0 1-2.081-2.081V7.228c0-1.149.93-2.081 2.08-2.081h3.92V4.33c0-1.15.932-2.081 2.081-2.081h3.337c1.15 0 2.081.932 2.081 2.081v3.92h3.919c1.15 0 2.082.931 2.082 2.08v9.338c0 1.15-.933 2.081-2.082 2.081zm11.418-12h3.919c.321 0 .582.261.582.581v9.338c0 .32-.26.581-.582.581H16.47z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.575 16.213a.75.75 0 0 1 .88.593l.001.01a.75.75 0 0 1-1.472.287l-.002-.01a.75.75 0 0 1 .593-.88M7.575 8.96a.75.75 0 0 1 .88.592l.001.01a.75.75 0 1 1-1.472.287l-.002-.01a.75.75 0 0 1 .593-.88M7.575 12.627a.75.75 0 0 1 .88.593l.001.01a.75.75 0 1 1-1.472.287l-.002-.01a.75.75 0 0 1 .593-.88M11.577 16.213a.75.75 0 0 1 .879.593l.002.01a.75.75 0 0 1-1.472.287l-.002-.01a.75.75 0 0 1 .592-.88M11.577 8.96a.75.75 0 0 1 .879.592l.002.01a.75.75 0 0 1-1.472.287l-.002-.01a.75.75 0 0 1 .592-.88M11.577 12.627a.75.75 0 0 1 .879.593l.002.01a.75.75 0 0 1-1.472.287l-.002-.01a.75.75 0 0 1 .592-.88M18.572 16.213a.75.75 0 0 1 .88.593l.001.01a.75.75 0 1 1-1.472.287l-.002-.01a.75.75 0 0 1 .593-.88M18.572 12.627a.75.75 0 0 1 .88.593l.001.01a.75.75 0 1 1-1.472.287l-.002-.01a.75.75 0 0 1 .593-.88"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBuildingOfficeOutline;
