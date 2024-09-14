import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallReceiveBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M19.856 14.894a42 42 0 0 1-.78-.754c-1.282-1.283-2.344-.867-3.282-.5-1.064.418-2.072.812-3.908-1.02-1.837-1.838-1.443-2.847-1.026-3.915.367-.939.783-2.002-.5-3.285a43 43 0 0 1-.768-.794C8.65 3.637 7.97 2.922 7.015 2.91c-.828 0-1.697.515-2.992 1.81-.013.013-.078.077-.09.091-.286.28-1.048 1.024-1.057 2.48-.014 2.275 1.818 5.268 5.445 8.896 3.612 3.608 6.593 5.437 8.86 5.437h.025c1.455-.008 2.2-.77 2.48-1.056l.094-.09c1.293-1.294 1.816-2.159 1.806-2.99-.012-.96-.733-1.646-1.73-2.594"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.905 2.595a.75.75 0 0 0-1.061 0L16.887 6.55l.006-2.404a.75.75 0 0 0-1.5-.004l-.01 4.22a.74.74 0 0 0 .466.696.8.8 0 0 0 .285.057l4.22-.01a.75.75 0 0 0-.001-1.5h-.002l-2.402.005 3.956-3.955a.75.75 0 0 0 0-1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCallReceiveBulk;
