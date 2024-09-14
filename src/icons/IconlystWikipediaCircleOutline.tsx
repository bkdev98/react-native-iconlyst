import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWikipediaCircleOutline = ({
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
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.942 8.444a.75.75 0 0 1 .433.968l-2.658 6.976-.701-.267.7.267c-.37.97-1.755.994-2.134.003-.58-1.518-1.723-4.51-2.476-6.497h-.07a.75.75 0 1 1 0-1.5h.588a.75.75 0 0 1 .702.485c.622 1.648 1.641 4.318 2.322 6.1l2.326-6.102a.75.75 0 0 1 .968-.433"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.179 9.145a.75.75 0 0 1 .75-.75H17.5a.75.75 0 1 1 0 1.5H15.93a.75.75 0 0 1-.75-.75M7.058 8.444a.75.75 0 0 1 .968.433l2.324 6.099 2.325-6.099a.75.75 0 0 1 .7-.483h.59a.75.75 0 0 1 0 1.5h-.073l-2.474 6.492c-.374.98-1.762.98-2.136 0L6.625 9.412a.75.75 0 0 1 .433-.968"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.75 9.145a.75.75 0 0 1 .75-.75h1.571a.75.75 0 0 1 0 1.5H6.5a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWikipediaCircleOutline;
