import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrobeOutline = ({
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
      d="M12.25 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.5 12c0-5.384 4.365-9.75 9.75-9.75S22 6.616 22 12a9.75 9.75 0 0 1-9.75 9.75A9.75 9.75 0 0 1 2.5 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.325 12.57a.75.75 0 0 1 1.061.003l.706.713a.75.75 0 0 1-1.065 1.056l-.706-.712a.75.75 0 0 1 .004-1.06M14.045 15.965a.75.75 0 0 1 .294 1.019 2.763 2.763 0 0 1-3.754 1.084.75.75 0 1 1 .725-1.313c.61.336 1.379.114 1.716-.496a.75.75 0 0 1 1.019-.294M17.81 14.059a.75.75 0 0 1 .22 1.038l-.548.84a.75.75 0 1 1-1.257-.818l.547-.84a.75.75 0 0 1 1.037-.22M13.273 5.176a.75.75 0 0 1 1.038.22l.547.842a.75.75 0 0 1-1.258.817l-.547-.842a.75.75 0 0 1 .22-1.037M15.607 9.676a.902.902 0 1 0 0 1.804.902.902 0 0 0 0-1.804m-2.402.902a2.402 2.402 0 1 1 4.804 0 2.402 2.402 0 0 1-4.804 0M11.26 6.632a.75.75 0 0 1-.477.947 1.26 1.26 0 0 0-.802 1.596.75.75 0 0 1-1.424.471 2.76 2.76 0 0 1 1.755-3.49.75.75 0 0 1 .947.476M6.657 11.31a.75.75 0 0 1 1.06 0 2.763 2.763 0 0 1 0 3.907.75.75 0 1 1-1.06-1.06 1.263 1.263 0 0 0 0-1.787.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMicrobeOutline;
