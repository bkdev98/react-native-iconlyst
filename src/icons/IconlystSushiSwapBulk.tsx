import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSushiSwapBulk = ({
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
      d="M15.793 13.902A15 15 0 0 1 12.5 12.21c-2.54-1.68-4.41-3.87-4.75-5.57-.11-.49-.06-.89.12-1.19l.01-.01q.001-.007.005-.01.005-.003.005-.01c.3-.45.95-.69 1.86-.69.29 0 .61.03.96.08 1.61.24 3.47 1.02 5.24 2.19 3.424 2.274 5.128 5.081 4.746 6.473.466.253.905.55 1.285.836 1.061-2.236-1.094-5.833-5.201-8.559-1.95-1.29-4.03-2.15-5.85-2.43-2.01-.3-3.53.14-4.27 1.25l-.04.05L3.2 9.38c-.911 1.38-.412 3.382 1.142 5.388.604-.454 1.954-1.381 2.398-1.607 1.34-.67 2.8-.39 3.8.72.173.19.34.413.51.643l.11.147c.6.82.99 1.32 1.66 1.26.57-.06 1.11-.48 1.62-.96 0 0 .57-.533 1.353-1.07m-4.46-6.16c.579-.862 2.268-.29 3.692.656.934.615 1.993 1.573 2.162 2.414.068.34-.026.578-.12.718-.194.296-.524.422-.931.422-.771 0-1.82-.454-2.756-1.07-1.423-.947-2.606-2.285-2.046-3.14"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.68 14.49c.9 0 1.57-.24 1.87-.69q.096-.147.146-.328c.466.254.905.552 1.285.838a3 3 0 0 1-.181.32q-.001.007-.005.01-.005.004-.005.01l-3.45 4.8c-.6.9-1.7 1.34-3.1 1.34-1.96 0-4.49-.86-7.02-2.53-1.624-1.075-2.943-2.284-3.878-3.492.604-.454 1.954-1.381 2.398-1.607 1.34-.67 2.8-.39 3.8.72.173.19.34.413.51.643l.11.147c.6.82.99 1.32 1.66 1.26.57-.06 1.11-.48 1.62-.96 0 0 .57-.533 1.353-1.07l.137.05c.08.03.17.06.26.09.93.3 1.78.45 2.49.45"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSushiSwapBulk;
