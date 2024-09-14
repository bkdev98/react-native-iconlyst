import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageRefreshLight = ({
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
      d="M21.567 12.773V7.886C21.567 5.022 19.784 3 16.918 3h-8.2C5.861 3 4.07 5.022 4.07 7.886v7.725c0 2.864 1.783 4.887 4.65 4.887h1.7"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.944 16.083h-1.878v-1.867"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.195 19.364a3.392 3.392 0 1 0-.129-3.28M7.321 6.45h-.053m2.47 0h-.054m2.471 0h-.054M21.568 9.31H4.07"
    />
  </Svg>
);
export default IconlystWebPageRefreshLight;
