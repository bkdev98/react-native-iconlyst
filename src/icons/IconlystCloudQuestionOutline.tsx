import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudQuestionOutline = ({
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
      d="M7.847 6.318c.898-1.186 2.334-2.134 4.403-2.134 2.07 0 3.505.948 4.403 2.134a6.35 6.35 0 0 1 1.187 2.808c1.04.13 1.993.556 2.73 1.262.902.865 1.43 2.101 1.43 3.585a4.89 4.89 0 0 1-2.878 4.457.75.75 0 1 1-.617-1.367 3.39 3.39 0 0 0 1.995-3.09c0-1.113-.387-1.946-.968-2.502-.586-.561-1.419-.888-2.385-.889a.75.75 0 0 1-.75-.75c0-.658-.27-1.723-.94-2.609-.647-.855-1.66-1.54-3.207-1.54s-2.56.685-3.207 1.54c-.67.886-.94 1.95-.94 2.61a.75.75 0 0 1-.744.75c-.97.008-1.804.336-2.39.896C4.387 12.033 4 12.86 4 13.973c0 1.374.817 2.558 1.995 3.09a.75.75 0 0 1-.617 1.367A4.89 4.89 0 0 1 2.5 13.973c0-1.484.529-2.717 1.433-3.58.736-.702 1.689-1.128 2.726-1.263a6.35 6.35 0 0 1 1.188-2.812"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.047 18.309a.75.75 0 0 1 .75.75v.005a.75.75 0 0 1-1.5 0v-.005a.75.75 0 0 1 .75-.75M9.516 13.898a2.73 2.73 0 0 1 2.733-2.734 2.73 2.73 0 0 1 2.733 2.734c0 1.077-.62 1.832-1.405 2.268l-.134.076c-.222.124-.378.212-.505.326-.116.105-.143.175-.142.273a.75.75 0 0 1-1.5.02c-.008-.642.296-1.099.639-1.407.264-.238.591-.42.808-.54l.096-.054.008-.004c.43-.238.635-.55.635-.958 0-.685-.552-1.234-1.232-1.234-.687 0-1.234.548-1.234 1.234a.75.75 0 0 1-1.5 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudQuestionOutline;
