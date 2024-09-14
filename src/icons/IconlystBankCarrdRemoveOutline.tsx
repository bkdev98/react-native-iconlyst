import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCarrdRemoveOutline = ({
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
      d="M7.922 14.954a.75.75 0 0 1 0 1.06L3.78 20.157a.75.75 0 0 1-1.06-1.06l4.14-4.142a.75.75 0 0 1 1.062 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.72 14.954a.75.75 0 0 1 1.06 0l4.142 4.141a.75.75 0 0 1-1.061 1.061L2.72 16.015a.75.75 0 0 1 0-1.061M4.911 6.05c-.532.573-.861 1.417-.861 2.48v3.285a.75.75 0 1 1-1.5 0V8.53c0-1.372.429-2.605 1.264-3.502.84-.902 2.035-1.403 3.44-1.403h10.043c1.4 0 2.595.5 3.436 1.403C21.57 5.924 22 7.157 22 8.53v6.57c0 1.372-.428 2.605-1.263 3.501-.84.903-2.036 1.404-3.44 1.404h-5.398a.75.75 0 0 1 0-1.5h5.398c1.033 0 1.815-.36 2.342-.926.532-.572.861-1.417.861-2.48V8.53c0-1.06-.33-1.906-.864-2.478-.528-.567-1.31-.926-2.34-.926H7.254c-1.033 0-1.815.36-2.342.926"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.55 9.656a.75.75 0 0 1 .75-.75h17.95a.75.75 0 0 1 0 1.5H3.3a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBankCarrdRemoveOutline;
