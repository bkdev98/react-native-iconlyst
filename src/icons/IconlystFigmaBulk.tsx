import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFigmaBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M11.175 2.5H8.696a2.895 2.895 0 0 0-2.892 2.891 2.896 2.896 0 0 0 2.892 2.892h2.478a.413.413 0 0 0 .413-.413l.001-4.957a.42.42 0 0 0-.12-.293.42.42 0 0 0-.293-.12M11.174 15.718H8.696a2.895 2.895 0 0 0-2.892 2.89A2.896 2.896 0 0 0 8.696 21.5a2.895 2.895 0 0 0 2.891-2.892v-2.477a.413.413 0 0 0-.413-.414M15.305 9.109c-1.587 0-2.883 1.292-2.89 2.904a2.897 2.897 0 0 0 2.89 2.879A2.895 2.895 0 0 0 18.195 12a2.894 2.894 0 0 0-2.89-2.891" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.827 8.283h2.476a2.895 2.895 0 0 0 2.892-2.891A2.895 2.895 0 0 0 15.303 2.5h-2.476a.413.413 0 0 0-.413.413V7.87c0 .228.185.413.413.413M11.175 9.11H8.696A2.895 2.895 0 0 0 5.804 12a2.896 2.896 0 0 0 2.892 2.892h2.48a.413.413 0 0 0 .412-.413V9.522a.413.413 0 0 0-.413-.413"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFigmaBulk;
