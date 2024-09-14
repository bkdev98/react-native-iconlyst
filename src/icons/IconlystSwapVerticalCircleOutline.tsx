import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwapVerticalCircleOutline = ({
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
      d="M9.308 7.762c.2 0 .391.08.532.22l1.742 1.752a.75.75 0 0 1-1.064 1.058l-.46-.463v4.974a.75.75 0 1 1-1.5 0V10.33l-.46.46a.75.75 0 1 1-1.063-1.057l1.741-1.751a.75.75 0 0 1 .532-.221M14.692 7.95a.75.75 0 0 1 .75.75v4.972l.46-.463a.75.75 0 0 1 1.064 1.058l-1.741 1.751a.75.75 0 0 1-1.076-.012l-1.73-1.74a.75.75 0 1 1 1.064-1.057l.459.462V8.699a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12c0 5.384-4.365 9.75-9.75 9.75S2.25 17.384 2.25 12M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSwapVerticalCircleOutline;
