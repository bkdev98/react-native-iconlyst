import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallSendingBulk = ({
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
      d="M19.857 14.898c-.242-.23-.504-.479-.78-.756-1.285-1.284-2.347-.868-3.283-.5-1.065.418-2.072.812-3.91-1.02-1.836-1.838-1.442-2.847-1.025-3.915.367-.939.783-2.002-.5-3.285-.281-.282-.534-.548-.768-.794C8.65 3.64 7.97 2.924 7.014 2.912c-.86 0-1.697.515-2.992 1.81-.013.013-.078.077-.09.091-.286.28-1.05 1.024-1.057 2.481-.013 2.273 1.819 5.262 5.445 8.885 3.613 3.615 6.595 5.447 8.864 5.447h.023c1.454-.008 2.198-.77 2.479-1.057l.092-.09c1.294-1.292 1.817-2.158 1.807-2.988-.012-.96-.732-1.646-1.728-2.593"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M22.07 2.844za.75.75 0 0 0-.412-.411.7.7 0 0 0-.24-.048c-.015-.001-.028-.009-.043-.009h-.002l-4.219.01a.75.75 0 0 0 .002 1.5h.002l2.401-.005-3.957 3.955a.75.75 0 1 0 1.061 1.061l3.958-3.958-.005 2.405a.75.75 0 0 0 .748.752h.002a.75.75 0 0 0 .75-.748l.01-4.22a.8.8 0 0 0-.057-.283"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCallSendingBulk;
