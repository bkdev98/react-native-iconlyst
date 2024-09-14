import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudySnowyMoon1Light = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.919 15.815a3 3 0 0 1-1.094-.223 2.72 2.72 0 0 1-1.601-2.48c0-1.707 1.205-2.708 2.697-2.722 0-1.073.841-3.22 3.218-3.22s3.22 2.147 3.22 3.22c1.491.014 2.696 1.015 2.696 2.721a2.72 2.72 0 0 1-1.599 2.484c-.402.162-.8.22-1.1.22"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.76 7.112c-.228-1.455-1.387-3.623-4.097-3.623-3.057 0-4.14 2.76-4.14 4.14-1.918.018-3.468 1.306-3.468 3.5 0 .777.252 1.494.68 2.074M21.046 18.711l.009.01M9.965 20.04l.009.01M15.14 18.721l-1.612.895m1.611-.895 1.611-.895m-1.61.895 1.61.895m-1.61-.895-1.612-.895m1.611.895v1.79m0-1.79v-1.79M5.453 17.72l-1.714.951m1.714-.952 1.713-.952m-1.713.952 1.713.952m-1.713-.952-1.714-.952m1.714.952v1.904m0-1.904v-1.904"
    />
  </Svg>
);
export default IconlystCloudySnowyMoon1Light;
