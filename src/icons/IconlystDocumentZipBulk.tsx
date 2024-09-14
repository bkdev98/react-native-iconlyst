import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentZipBulk = ({
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
      d="M19.85 9.096h-2.963c-1.765-.01-3.223-1.472-3.223-3.255V2.7a.445.445 0 0 0-.443-.447H8.068c-2.403 0-4.352 1.979-4.352 4.396v10.505c0 2.534 2.046 4.59 4.554 4.59h7.672c2.402 0 4.342-1.958 4.342-4.375V9.534a.434.434 0 0 0-.434-.438"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.991 8.55a.75.75 0 0 1-1.5 0V7.155a.75.75 0 1 1 1.5 0zm0 4.15a.75.75 0 0 1-1.5 0v-1.397a.75.75 0 0 1 1.5 0zm0 4.15a.75.75 0 0 1-1.5 0v-1.397a.75.75 0 0 1 1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M8.491 21.746V19.6a.75.75 0 0 1 1.5 0v2.145zM9.991 2.254V4.4a.75.75 0 0 1-1.5 0V2.254z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.016 7.672c.673.007 1.608.01 2.4.007a.465.465 0 0 0 .332-.787c-.51-.534-1.218-1.28-1.93-2.027l-1.955-2.053a.46.46 0 0 0-.793.325v2.569c0 1.078.879 1.966 1.946 1.966"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocumentZipBulk;