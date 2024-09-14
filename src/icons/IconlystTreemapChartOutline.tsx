import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTreemapChartOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M20.5 2.369c.966 0 1.75.783 1.75 1.75v16a1.75 1.75 0 0 1-1.75 1.75h-16a1.75 1.75 0 0 1-1.75-1.75v-16c0-.967.784-1.75 1.75-1.75zm.25 1.75a.25.25 0 0 0-.25-.25h-16a.25.25 0 0 0-.25.25v16c0 .138.112.25.25.25h16a.25.25 0 0 0 .25-.25z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.5 8.369a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-1.5 0v-12a.75.75 0 0 1 .75-.75M18.448 2.369a.75.75 0 0 1 .75.75v6a.75.75 0 1 1-1.5 0v-6a.75.75 0 0 1 .75-.75M12.5 2.369a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75M10.405 14.369a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75M7.664 8.369a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.25 15.119a.75.75 0 0 1-.75.75h-12a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 .75.75M22.147 17.119a.75.75 0 0 1-.75.75H15.5a.75.75 0 0 1 0-1.5h5.897a.75.75 0 0 1 .75.75M22.25 9.119a.75.75 0 0 1-.75.75h-18a.75.75 0 0 1 0-1.5h18a.75.75 0 0 1 .75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTreemapChartOutline;
