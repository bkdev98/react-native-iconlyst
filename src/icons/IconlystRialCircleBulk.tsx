import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRialCircleBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 2.563c-5.238 0-9.5 4.26-9.5 9.5 0 5.237 4.262 9.5 9.5 9.5s9.5-4.262 9.5-9.5c0-5.24-4.261-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M15.665 16.209a3.03 3.03 0 0 0 2.013-2.826v-2.16a.75.75 0 0 0-1.5 0v2.145a1.535 1.535 0 0 1-1.019 1.429.751.751 0 0 0 .253 1.456q.127 0 .253-.044M12.268 16.253h1.241a.75.75 0 0 0 0-1.5h-1.241a.75.75 0 0 0 0 1.5M8.675 15.973a2.355 2.355 0 0 0 2.355-2.35v-5a.75.75 0 0 0-1.5 0v5c0 .469-.384.85-.855.85a.853.853 0 0 1-.854-.85v-.89a.75.75 0 0 0-1.5 0v.89a2.355 2.355 0 0 0 2.354 2.35"
    />
    <Path
      fill={props.color}
      d="M12.268 7.873a.75.75 0 0 0-.75.75v3.68c0 1.113.907 2.019 2.023 2.019h.205a2.023 2.023 0 0 0 2.024-2.019v-.981a.75.75 0 0 0-1.5 0v.981a.52.52 0 0 1-.524.519h-.205a.52.52 0 0 1-.523-.519v-3.68a.75.75 0 0 0-.75-.75"
    />
  </Svg>
);
export default IconlystRialCircleBulk;
