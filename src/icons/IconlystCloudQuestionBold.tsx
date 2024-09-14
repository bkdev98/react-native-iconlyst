import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudQuestionBold = ({
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
      d="M17.516 9.217a.21.21 0 0 1-.183-.18c-.295-2.108-2.01-4.74-5.331-4.74-3.572 0-5.04 2.91-5.325 4.742a.21.21 0 0 1-.183.177c-2.36.29-3.957 2.098-3.957 4.583a4.64 4.64 0 0 0 2.74 4.222 5 5 0 0 0 1.844.375h2.106a.21.21 0 0 0 .2-.154q.05-.158.117-.305a.22.22 0 0 0 0-.18 2.5 2.5 0 0 1-.225-.986 4 4 0 0 1 .016-.407.22.22 0 0 0-.145-.227 2.5 2.5 0 0 1-1.651-2.352A4.49 4.49 0 0 1 12.023 9.3a4.49 4.49 0 0 1 4.482 4.484c0 1.603-.843 2.989-2.312 3.802a.1.1 0 0 0-.04.045 2 2 0 0 1-.055.125.21.21 0 0 0-.002.179q.068.148.117.306c.028.089.108.154.201.154h2.46c.347 0 1.049-.048 1.875-.378a4.64 4.64 0 0 0 2.715-4.22c0-2.482-1.593-4.29-3.948-4.581"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.82 18.199a.75.75 0 1 0 .75.753v-.007a.75.75 0 0 0-.75-.747M12.023 11.051a2.74 2.74 0 0 0-2.734 2.734.75.75 0 0 0 1.5 0 1.22 1.22 0 0 1 1.234-1.234c.679 0 1.232.554 1.232 1.234 0 .15 0 .606-.643.962l-.113.064c-.54.302-1.445.807-1.43 1.937a.75.75 0 0 0 .75.74h.01a.75.75 0 0 0 .74-.76c-.003-.2.17-.333.662-.608l.115-.065c.908-.503 1.409-1.309 1.409-2.27a2.737 2.737 0 0 0-2.732-2.734"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudQuestionBold;
