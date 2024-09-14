import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseServerBold = ({
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
      d="M12 14.355c-5.565 0-5.847-1.85-5.85-1.85v-1.341c1.048.649 2.821 1.191 5.85 1.191s4.803-.542 5.851-1.191v1.306c-.002.019-.262 1.885-5.851 1.885m0 6.144a.83.83 0 0 1-.85-.85.83.83 0 0 1 .85-.85.83.83 0 0 1 .85.85.83.83 0 0 1-.85.85m5.851-13.876V8.35c-.002.019-.262 1.885-5.851 1.885-5.565 0-5.847-1.85-5.85-1.85V6.61c1.336.704 3.461 1.161 5.862 1.161 2.387 0 4.501-.452 5.839-1.148m1.464-1.912C19.085 3.199 15.908 2 12.012 2c-3.753 0-6.841 1.111-7.27 2.544a.74.74 0 0 0-.092.341v7.964c0 .33.21 3.122 6.6 3.33v1.249a2.29 2.29 0 0 0-1.471 1.471H5.8a.75.75 0 0 0 0 1.5h3.979a2.31 2.31 0 0 0 2.221 1.6 2.31 2.31 0 0 0 2.221-1.6H18.2a.75.75 0 0 0 0-1.5h-3.979a2.29 2.29 0 0 0-1.471-1.471v-1.249c6.39-.208 6.6-3 6.6-3.33V4.885c0-.061-.021-.117-.035-.174"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDatabaseServerBold;
