import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShare5Outline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M10.941 3.75a1.19 1.19 0 1 0 0 2.382 1.19 1.19 0 0 0 0-2.382M8.25 4.941a2.69 2.69 0 1 1 5.382 0 2.69 2.69 0 0 1-5.382 0M18.865 15.01a1.19 1.19 0 1 0 0 2.382 1.19 1.19 0 0 0 0-2.382M16.174 16.2a2.69 2.69 0 1 1 5.382 0 2.69 2.69 0 0 1-5.382 0m-11.04.449a1.19 1.19 0 1 0 0 2.382 1.19 1.19 0 0 0 0-2.382m-2.69 1.191a2.69 2.69 0 1 1 5.381 0 2.69 2.69 0 0 1-5.382 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.755 5.31a.75.75 0 0 1-.46.956 7.22 7.22 0 0 0-4.553 4.862.75.75 0 1 1-1.445-.402A8.72 8.72 0 0 1 8.8 4.851a.75.75 0 0 1 .956.46M5.989 18.65a.75.75 0 0 1 1.056-.091 7.22 7.22 0 0 0 6.26 1.507.75.75 0 0 1 .34 1.461 8.72 8.72 0 0 1-7.565-1.82.75.75 0 0 1-.091-1.057M16.381 6.568a.75.75 0 0 1 1.06-.065 8.72 8.72 0 0 1 2.806 7.972.75.75 0 1 1-1.48-.251 7.22 7.22 0 0 0-2.32-6.598.75.75 0 0 1-.066-1.058M10.343 10.538a1.61 1.61 0 0 1 2.793.007l1.577 2.768a1.61 1.61 0 0 1-1.399 2.407H10.14a1.61 1.61 0 0 1-1.394-2.414zm1.3.75-1.598 2.767a.11.11 0 0 0 .095.165h3.174a.11.11 0 0 0 .096-.164l-1.577-2.768a.11.11 0 0 0-.19 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShare5Outline;
