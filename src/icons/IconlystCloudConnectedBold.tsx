import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudConnectedBold = ({
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
      d="M21.319 18.054c-.05-.118-.202-.144-.304-.067a3.02 3.02 0 0 1-1.835.625h-4.9a3.03 3.03 0 0 1-1.836-.625c-.102-.077-.252-.05-.297.07l-.061.177h-1.732c-.744 0-1.35-.606-1.35-1.35v-.92h3.067a2.32 2.32 0 0 0 2.209 1.645h4.9c1.279 0 2.32-1.04 2.32-2.32a2.32 2.32 0 0 0-2.32-2.32h-4.9a2.305 2.305 0 0 0-2.165 1.496H9.004V12.08h2.792c.403 0 .846-.088 1.266-.257a3.13 3.13 0 0 0 1.834-2.848c0-1.665-1.061-2.88-2.634-3.09-.212-1.403-1.36-3.132-3.563-3.132S5.347 4.483 5.135 5.887C3.562 6.097 2.5 7.312 2.5 8.976c0 1.224.721 2.34 1.855 2.853.401.163.841.252 1.241.252h1.908v4.803a2.853 2.853 0 0 0 2.85 2.85h1.758a2.32 2.32 0 0 0 2.168 1.516h4.9c1.28 0 2.32-1.041 2.32-2.32 0-.312-.067-.606-.181-.876"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudConnectedBold;
