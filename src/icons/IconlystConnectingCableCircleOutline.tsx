import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystConnectingCableCircleOutline = ({
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
      d="m8.776 12.864-.38.381a1.764 1.764 0 1 0 2.494 2.494l.38-.38zm-1.44-.68.558-.558a1.25 1.25 0 0 1 1.765 0l2.85 2.85a1.25 1.25 0 0 1 0 1.765l-.558.559a3.264 3.264 0 0 1-4.616-4.616M12.573 9.07l.381-.381a1.764 1.764 0 1 1 2.494 2.494l-.38.38zm-.68-1.442-.558.559a1.25 1.25 0 0 0 0 1.765l2.85 2.85a1.25 1.25 0 0 0 1.765 0l.559-.558a3.264 3.264 0 1 0-4.616-4.616"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.098 13.187a.75.75 0 0 1 0-1.061l1.101-1.101a.75.75 0 1 1 1.06 1.06l-1.1 1.102a.75.75 0 0 1-1.061 0m1.854 1.854a.75.75 0 0 1 0-1.06l1.101-1.102a.75.75 0 0 1 1.06 1.06l-1.1 1.102a.75.75 0 0 1-1.061 0M8.394 15.743a.75.75 0 0 1 0 1.06l-2.301 2.302a.75.75 0 1 1-1.06-1.061l2.3-2.3a.75.75 0 0 1 1.06 0M18.808 5.329a.75.75 0 0 1 0 1.06l-2.296 2.297a.75.75 0 0 1-1.06-1.06l2.296-2.297a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.834 6.471A8.25 8.25 0 1 0 6.166 18.138 8.25 8.25 0 0 0 17.834 6.471M5.106 5.411c3.807-3.808 9.98-3.808 13.788 0s3.808 9.98 0 13.788-9.98 3.808-13.788 0-3.808-9.981 0-13.789"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystConnectingCableCircleOutline;
