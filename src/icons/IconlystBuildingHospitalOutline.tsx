import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBuildingHospitalOutline = ({
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
      d="M5.25 10.95a.42.42 0 0 0-.422.42v8.88h15.786v-8.88a.42.42 0 0 0-.42-.42h-1.71a.75.75 0 0 1 0-1.5h1.71c1.06 0 1.92.86 1.92 1.92V21a.75.75 0 0 1-.75.75H4.078a.75.75 0 0 1-.75-.75v-9.63c0-1.061.86-1.92 1.922-1.92h1.708a.75.75 0 1 1 0 1.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.209 7.27a2.374 2.374 0 0 1 2.374-2.375h8.278a2.375 2.375 0 0 1 2.375 2.374V21a.75.75 0 0 1-1.5 0V7.269a.875.875 0 0 0-.875-.874H8.583a.874.874 0 0 0-.874.874V21a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.673 16.352a.15.15 0 0 0-.15.15v4.5a.75.75 0 0 1-1.5 0v-4.5c0-.91.738-1.65 1.65-1.65h2.096c.912 0 1.651.74 1.651 1.65v4.5a.75.75 0 1 1-1.5 0v-4.5a.15.15 0 0 0-.15-.15zM12.72 8.36a.75.75 0 0 1 .75.75v.769h.77a.75.75 0 0 1 0 1.5h-.77v.769a.75.75 0 1 1-1.5 0v-.77h-.768a.75.75 0 0 1 0-1.5h.768V9.11a.75.75 0 0 1 .75-.75M10.237 3a.75.75 0 0 1 .75-.75h3.469a.75.75 0 0 1 0 1.5h-3.469a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBuildingHospitalOutline;
