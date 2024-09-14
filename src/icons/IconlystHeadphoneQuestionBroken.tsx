import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeadphoneQuestionBroken = ({
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
      d="M12.215 14.952v.015M12.215 12.947c-.008-.635.569-.904.999-1.15.523-.289.879-.748.879-1.386 0-.945-.765-1.704-1.704-1.704-.945 0-1.703.76-1.703 1.704M8.682 17.25a1.883 1.883 0 1 1-3.263 1.882c-.84-1.26-1.428-2.456-1.77-3.567-.194-.623.091-1.294.656-1.621l.222-.127a1.883 1.883 0 0 1 2.572.69M15.825 17.25a1.883 1.883 0 1 0 3.263 1.882c.838-1.26 1.427-2.456 1.77-3.567.193-.623-.092-1.294-.657-1.621l-.221-.127a1.883 1.883 0 0 0-2.573.69"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.247 3.926c-4.962 0-8.997 4.027-8.997 8.996 0 1.128.208 2.211.588 3.2M20.477 16.571a8.996 8.996 0 0 0-4.15-11.669"
    />
  </Svg>
);
export default IconlystHeadphoneQuestionBroken;
