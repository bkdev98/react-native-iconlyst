import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallSendingBold = ({
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
      d="M19.857 14.898q-.365-.343-.78-.756c-1.285-1.284-2.347-.868-3.283-.501-1.065.419-2.072.813-3.909-1.02-1.837-1.837-1.443-2.846-1.026-3.914.367-.94.783-2.002-.499-3.285a43 43 0 0 1-.769-.794c-.94-.99-1.62-1.704-2.577-1.716-.86 0-1.697.515-2.992 1.81-.013.013-.078.077-.089.09-.287.28-1.05 1.025-1.058 2.482-.013 2.273 1.82 5.262 5.445 8.885 3.613 3.615 6.595 5.447 8.864 5.447h.023c1.454-.008 2.198-.77 2.48-1.057l.091-.09c1.294-1.292 1.817-2.158 1.807-2.988-.012-.961-.732-1.646-1.728-2.593M22.07 2.844za.75.75 0 0 0-.412-.411.7.7 0 0 0-.24-.048c-.015-.001-.028-.009-.043-.009h-.002l-4.219.01a.75.75 0 0 0 .002 1.5h.002l2.401-.005-3.957 3.955a.75.75 0 1 0 1.061 1.061l3.958-3.958-.005 2.405a.75.75 0 0 0 .748.752h.002a.75.75 0 0 0 .75-.748l.01-4.22a.8.8 0 0 0-.057-.283"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCallSendingBold;
