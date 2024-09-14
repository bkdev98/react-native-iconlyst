import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrendDownGraphOutline = ({
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
      d="M19.798 17.521a.75.75 0 0 0-.75.75v2.848a.75.75 0 0 0 1.5 0V18.27a.75.75 0 0 0-.75-.75M14.667 16.165a.75.75 0 0 0-.75.75v4.204a.75.75 0 0 0 1.5 0v-4.204a.75.75 0 0 0-.75-.75M9.536 13.453a.75.75 0 0 0-.75.75v6.916a.75.75 0 0 0 1.5 0v-6.916a.75.75 0 0 0-.75-.75M4.404 9.52a.75.75 0 0 0-.75.75V21.12a.75.75 0 0 0 1.5 0V10.27a.75.75 0 0 0-.75-.75M18.496 9.688a.75.75 0 0 1 1.056.097l2.021 2.434a.75.75 0 0 1-.107 1.064l-2.207 1.772a.75.75 0 1 1-.94-1.17l1.613-1.294-1.534-1.847a.75.75 0 0 1 .098-1.056"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.449 3.083v.002l.008.014.037.064q.051.089.16.263c.147.23.373.566.683.973a18.6 18.6 0 0 0 2.904 3.005c2.65 2.196 6.792 4.432 12.77 4.545a.75.75 0 0 1-.029 1.5c-6.37-.12-10.83-2.514-13.698-4.89a20 20 0 0 1-3.14-3.25A15 15 0 0 1 3.39 4.23a10 10 0 0 1-.24-.398l-.014-.025L3.13 3.8l-.002-.003v-.001l.66-.356-.66.355a.75.75 0 0 1 1.32-.712"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTrendDownGraphOutline;
