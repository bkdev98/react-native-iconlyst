import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystForecastTwoTone = ({
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
      d="M8.768 14.083c1.644 2.273 2.045 4.79.895 5.62-1.149.832-3.413-.336-5.057-2.609s-2.045-4.79-.895-5.62c1.149-.832 3.413.336 5.057 2.61"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.462 16.725c1.271-.92 1.058-3.385-.476-5.506C12.62 9.33 10.667 8.35 9.358 8.807M19 11.648c.49-.77.256-2.173-.635-3.404-.98-1.355-2.405-2.02-3.289-1.575"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.657 11.502c.554-.539 2.865-1.95 7.682-3.289 3.083-.857 5.076-2.26 6.234-3.466.717-.745 2.022-1.005 2.8-.326.937.817.718 1.933.453 3-.87 3.5-3.77 8.7-11.045 12.235"
    />
  </Svg>
);
export default IconlystForecastTwoTone;
