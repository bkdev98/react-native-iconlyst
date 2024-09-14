import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunCircleLowOutline = ({
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
      d="M18.388 6.166A8.25 8.25 0 1 0 6.721 17.834 8.25 8.25 0 0 0 18.388 6.166M5.66 5.106c3.808-3.808 9.981-3.808 13.789 0s3.808 9.98 0 13.788-9.981 3.808-13.789 0-3.807-9.98 0-13.788"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.555 5.75a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0V6.5a.75.75 0 0 1 .75-.75m4.42 1.83a.75.75 0 0 1 0 1.061l-.009.008a.75.75 0 0 1-1.06-1.06l.008-.008a.75.75 0 0 1 1.06 0m-8.84 0a.75.75 0 0 1 1.061 0l.008.008a.75.75 0 1 1-1.061 1.06l-.008-.007a.75.75 0 0 1 0-1.06m9.16 4.42a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75m-10.99 0a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75m9.6 3.351a.75.75 0 0 1 1.062 0l.007.008a.75.75 0 1 1-1.06 1.06l-.008-.007a.75.75 0 0 1 0-1.06m-6.701 0a.75.75 0 0 1 0 1.06l-.008.008a.75.75 0 0 1-1.06-1.06l.007-.008a.75.75 0 0 1 1.06 0m3.351 1.388a.75.75 0 0 1 .75.75v.011a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75M12.555 9.953a2.047 2.047 0 1 0 0 4.094 2.047 2.047 0 0 0 0-4.094M9.008 12a3.547 3.547 0 1 1 7.094 0 3.547 3.547 0 0 1-7.094 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSunCircleLowOutline;
