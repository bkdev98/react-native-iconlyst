import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWaterfallChartOutline = ({
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
      d="M4.5 3.37a.75.75 0 0 1 .75.75v14c0 .69.56 1.25 1.25 1.25h14a.75.75 0 0 1 0 1.5h-14a2.75 2.75 0 0 1-2.75-2.75v-14a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.296 11.37a.75.75 0 0 1 .75.75v7.792a.75.75 0 0 1-1.5 0v-7.793a.75.75 0 0 1 .75-.75M11.632 4.022a.75.75 0 0 1 .75.75v8.216a.75.75 0 0 1-1.5 0V4.772a.75.75 0 0 1 .75-.75M14.968 4.022a.75.75 0 0 1 .75.75v15.14a.75.75 0 0 1-1.5 0V4.772a.75.75 0 0 1 .75-.75M18.304 13.643a.75.75 0 0 1 .75.75v5.519a.75.75 0 0 1-1.5 0v-5.52a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWaterfallChartOutline;
