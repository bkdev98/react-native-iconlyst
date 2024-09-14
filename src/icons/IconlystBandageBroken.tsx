import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBandageBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.91 11.627.007.005m3.52 3.52.005.006m-.432-3.105.006.006m3.52 3.52.005.005M8.484 8.527l.006.006m3.094.42.005.007m3.52 3.52.006.005M9.776 15.812l3.937 3.938a4.268 4.268 0 0 0 6.037-6.036L10.286 4.25a4.267 4.267 0 1 0-6.036 6.036l3.122 3.122"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.714 4.254a4.254 4.254 0 0 1 6.032 0 4.2 4.2 0 0 1 1.25 3.016 4.24 4.24 0 0 1-1.25 3.015l-1.707 1.718M5.963 12.004 4.245 13.71a4.29 4.29 0 0 0 0 6.042 4.29 4.29 0 0 0 6.043 0l1.706-1.718"
    />
  </Svg>
);
export default IconlystBandageBroken;
