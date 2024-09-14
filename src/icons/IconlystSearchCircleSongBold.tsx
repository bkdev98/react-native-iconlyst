import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchCircleSongBold = ({
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
      d="M9.99 12.012a1.354 1.354 0 0 0-1.226 2.179 1.355 1.355 0 0 0 2.407-.675c.09-.74-.44-1.415-1.182-1.504"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.23 10a3.3 3.3 0 0 1-1.055-.58l-.515 4.275q-.002.006-.003.011a2.857 2.857 0 0 1-3.17 2.481 2.83 2.83 0 0 1-1.904-1.071 2.84 2.84 0 0 1-.588-2.103 2.86 2.86 0 0 1 3.173-2.491c.49.059.926.249 1.301.517l.457-3.789a.75.75 0 0 1 1.471-.094c.011.039.304 1.089 1.305 1.42A.75.75 0 0 1 14.23 10m3.831 3.181c.99 0 1.899.315 2.657.837.182.124.44.04.486-.175a9.3 9.3 0 0 0 .207-1.926c0-5.238-4.262-9.5-9.5-9.5s-9.5 4.262-9.5 9.5 4.262 9.5 9.5 9.5c.73 0 1.438-.088 2.119-.246.214-.05.293-.31.165-.489a4.7 4.7 0 0 1-.894-2.741 4.766 4.766 0 0 1 4.76-4.76"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.061 19.451a1.511 1.511 0 1 1 1.51-1.51c0 .832-.677 1.51-1.51 1.51m3.307.851-.76-.758a3 3 0 0 0 .463-1.603c0-1.66-1.35-3.01-3.01-3.01s-3.01 1.35-3.01 3.01a3.014 3.014 0 0 0 4.467 2.634l.791.79a.747.747 0 0 0 1.061-.002.75.75 0 0 0-.002-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchCircleSongBold;
