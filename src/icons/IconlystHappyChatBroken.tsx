import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHappyChatBroken = ({
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
      d="M18.614 5.635c-3.511-3.51-9.216-3.51-12.727 0A9.01 9.01 0 0 0 4.084 15.79c.197.493.35.89.35 1.273 0 1.075-1.035 2.405-.344 3.096.69.69 2.02-.346 3.089-.353.383.001.787.16 1.28.36 3.33 1.54 7.406.946 10.155-1.805a9 9 0 0 0 1.82-10.113"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.02 9.205v-.052M8.974 9a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45M15.48 9.205v-.052M15.475 9a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45M9.555 14.14c.656.855 1.622 1.387 2.695 1.387s2.04-.532 2.695-1.386"
    />
  </Svg>
);
export default IconlystHappyChatBroken;
