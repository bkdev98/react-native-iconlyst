import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMopedFrontLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.348 19.273h.619c1.089 0 1.972-.884 1.972-1.973v-4.71a3.944 3.944 0 0 0-3.944-3.945h-1.493a3.944 3.944 0 0 0-3.944 3.944V17.3c0 1.09.883 1.973 1.972 1.973h.62"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.195 15.986a2.054 2.054 0 0 1 4.108 0v3.845a2.054 2.054 0 1 1-4.108 0zM19.494 4.532h-1.778c-.426 0-.84.138-1.18.392L14.99 6.078M5.006 4.532h1.778c.426 0 .84.138 1.18.392L9.51 6.078"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.178 7.073c-.04-1.106-.585-2.22-1.555-2.79-.93-.544-1.863-.524-2.784.02-.97.574-1.437 1.658-1.513 2.742-.15 2.109 5.928 2.148 5.852.027"
    />
  </Svg>
);
export default IconlystMopedFrontLight;
