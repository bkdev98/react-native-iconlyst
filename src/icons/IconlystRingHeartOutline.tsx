import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingHeartOutline = ({
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
      d="M12.248 21.278a.75.75 0 0 1-.358-.092c-.3-.161-7.294-4.023-9.005-9.335-1.075-3.36.124-7.577 3.989-8.821a7.5 7.5 0 0 1 1.8-.306 6.46 6.46 0 0 1 3.574 1.06 6.4 6.4 0 0 1 3.54-1.061c.622.006 1.238.11 1.828.307 3.87 1.246 5.073 5.463 4 8.819-1.652 5.253-8.7 9.172-9 9.336a.74.74 0 0 1-.368.093M8.713 4.223a6 6 0 0 0-1.4.239c-3.068.989-3.842 4.31-3.005 6.93 1.32 4.1 6.515 7.423 7.935 8.269 1.427-.854 6.66-4.214 7.934-8.265.839-2.623.063-5.944-3.028-6.94a4.55 4.55 0 0 0-3.71.354 6 6 0 0 1 1.575 4.05 2.78 2.78 0 1 1-5.541 0 6.02 6.02 0 0 1 1.575-4.051 4.9 4.9 0 0 0-2.335-.586m3.536 1.5a4.54 4.54 0 0 0-1.271 3.14 1.286 1.286 0 1 0 2.54 0 4.54 4.54 0 0 0-1.27-3.141"
    />
  </Svg>
);
export default IconlystRingHeartOutline;
