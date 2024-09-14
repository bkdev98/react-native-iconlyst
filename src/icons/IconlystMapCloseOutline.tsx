import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMapCloseOutline = ({
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
      d="M18.125 17.685a.75.75 0 0 1 1.06 0l2.064 2.063a.75.75 0 1 1-1.06 1.06l-2.064-2.063a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.061 15.622a.75.75 0 0 1 1.061 0l2.064 2.064a.75.75 0 0 1-1.06 1.061l-2.065-2.064a.75.75 0 0 1 0-1.061"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.249 15.622a.75.75 0 0 1 0 1.06l-2.063 2.065a.75.75 0 0 1-1.061-1.06l2.063-2.065a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.187 17.685a.75.75 0 0 1 0 1.06l-2.065 2.064a.75.75 0 1 1-1.06-1.061l2.064-2.064a.75.75 0 0 1 1.06 0M8.585 4.159 4.694 5.888A1.17 1.17 0 0 0 4 6.955v12.662c0 .213.218.354.412.268l3.564-1.582a2.26 2.26 0 0 1 1.688-.058l2.164.788a.75.75 0 0 1-.513 1.41l-2.163-.788a.76.76 0 0 0-.567.02m0 0L5.02 21.255A1.793 1.793 0 0 1 2.5 19.617V6.955c0-1.055.62-2.01 1.585-2.438l3.89-1.729a2.26 2.26 0 0 1 1.69-.058l5.685 2.066a.76.76 0 0 0 .568-.02l3.555-1.58.002-.002C20.665 2.66 22 3.534 22 4.833v7.054a.75.75 0 0 1-1.5 0V4.833a.29.29 0 0 0-.41-.27l-.004.002-3.559 1.581a2.26 2.26 0 0 1-1.69.06L9.153 4.14a.76.76 0 0 0-.567.019"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.665 4.836a.75.75 0 0 1 .75.75v6.299a.75.75 0 1 1-1.5 0v-6.3a.75.75 0 0 1 .75-.75M8.836 2.605a.75.75 0 0 1 .75.75v15.5a.75.75 0 0 1-1.5 0v-15.5a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMapCloseOutline;
