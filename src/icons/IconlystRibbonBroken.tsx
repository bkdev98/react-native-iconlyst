import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRibbonBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.25 9.027c0 2.691-.801 6.658-7.281 1.512M2.75 9.027c0-2.69.853-6.657 7.74-1.512"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.49 7.326a1 1 0 0 1 1-1h1.48a1 1 0 0 1 1 1v3.403a1 1 0 0 1-1 1h-1.48a1 1 0 0 1-1-1zM9.35 11.383c.054 1.217-.868 3.992-4.265 5.001l1.76.995-.642 2.836c2.686-1.389 3.963-3.32 4.509-5.112"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.466 11.608c-.291 2.09.097 6.18 4.792 8.607l-.643-2.835 1.761-.996c-1.548-.46-2.582-1.287-3.244-2.165M13.97 9.248c.46.027 1.785-.024 3.409-.447M10.49 9.248c-.459.027-1.784-.024-3.408-.447M13.969 7.515c3.953-3.139 5.793-2.887 6.626-1.602M10.49 10.54c-4.815 3.597-6.68 2.74-7.367.98"
    />
  </Svg>
);
export default IconlystRibbonBroken;
