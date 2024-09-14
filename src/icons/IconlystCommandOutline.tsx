import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCommandOutline = ({
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
      d="M6.536 4.75a1.536 1.536 0 1 0 0 3.071h1.536V6.285c0-.847-.688-1.535-1.536-1.535m3.036 3.071V6.285a3.036 3.036 0 1 0-3.036 3.036h1.536v5.358H6.536a3.036 3.036 0 1 0 3.036 3.035v-1.535h5.357v1.535a3.037 3.037 0 1 0 3.036-3.035h-1.536V9.32h1.536a3.035 3.035 0 1 0-3.036-3.036v1.536zm0 1.5v5.358h5.357V9.32zm6.857-1.5h1.536a1.535 1.535 0 1 0-1.536-1.536zm0 8.358v1.535a1.537 1.537 0 1 0 1.536-1.535zm-8.357 0H6.536a1.536 1.536 0 1 0 1.536 1.535z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCommandOutline;
