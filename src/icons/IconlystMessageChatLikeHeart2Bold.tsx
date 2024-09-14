import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessageChatLikeHeart2Bold = ({
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
      d="M14.067 9.808a1.24 1.24 0 0 0-1.137.185.75.75 0 0 1-.902 0 1.25 1.25 0 0 0-1.136-.187 1.11 1.11 0 0 0-.68.565c-.185.357-.213.833-.073 1.273.336 1.034 1.586 2.01 2.339 2.494.758-.488 2.015-1.47 2.339-2.491.14-.441.111-.916-.074-1.274a1.11 1.11 0 0 0-.677-.565"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.246 12.1c-.63 1.998-3.125 3.415-3.407 3.569a.75.75 0 0 1-.719 0c-.112-.06-2.747-1.514-3.41-3.566v-.004c-.262-.823-.2-1.705.171-2.42a2.6 2.6 0 0 1 1.555-1.303 2.78 2.78 0 0 1 2.042.143 2.76 2.76 0 0 1 2.043-.141 2.63 2.63 0 0 1 1.553 1.305c.371.713.433 1.595.172 2.417m2.95-6.821c-3.704-3.701-9.73-3.701-13.435 0-2.808 2.808-3.573 7.118-1.913 10.7.184.457.315.8.315 1.084 0 .335-.142.75-.279 1.152-.264.778-.564 1.658.08 2.3.644.645 1.526.342 2.302.076.4-.137.811-.278 1.14-.278.291 0 .658.147 1.082.318a9.542 9.542 0 0 0 10.708-1.916c3.703-3.702 3.703-9.73 0-13.436"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessageChatLikeHeart2Bold;
