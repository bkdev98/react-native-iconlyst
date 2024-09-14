import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudErrorBold = ({
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
      d="M17.516 9.135a.21.21 0 0 1-.183-.18c-.295-2.108-2.01-4.74-5.331-4.74-3.572 0-5.04 2.91-5.325 4.742a.21.21 0 0 1-.183.177c-2.36.289-3.957 2.097-3.957 4.583a4.64 4.64 0 0 0 2.74 4.222 5 5 0 0 0 1.844.375h2.41a.21.21 0 0 0 .196-.142q.1-.28.259-.527a.22.22 0 0 0-.002-.243 2.47 2.47 0 0 1-.42-1.372v-4.107a2.5 2.5 0 1 1 5 0v4.107c0 .495-.148.954-.398 1.342a.22.22 0 0 0 0 .242q.166.256.264.552a.21.21 0 0 0 .198.148h2.246c.347 0 1.049-.048 1.875-.378a4.64 4.64 0 0 0 2.715-4.22c0-2.482-1.594-4.29-3.948-4.581"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.065 18.237c-.414 0-.75.381-.75.795a.75.75 0 0 0 1.5 0v-.09c0-.414-.336-.705-.75-.705M12.065 11.173a.75.75 0 0 0-.75.75v4.107a.75.75 0 0 0 1.5 0v-4.107a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudErrorBold;
