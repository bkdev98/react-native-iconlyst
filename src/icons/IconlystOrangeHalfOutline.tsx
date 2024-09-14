import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOrangeHalfOutline = ({
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
      d="M12 3.75c-4.536 0-8.25 3.714-8.25 8.25s3.714 8.25 8.25 8.25 8.25-3.714 8.25-8.25S16.536 3.75 12 3.75M2.25 12c0-5.364 4.386-9.75 9.75-9.75s9.75 4.386 9.75 9.75-4.386 9.75-9.75 9.75S2.25 17.364 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 6.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5M5.25 12a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 5.25a.75.75 0 0 1 .75.75v4.701l4.071-2.35a.75.75 0 1 1 .75 1.299L13.5 12l4.071 2.35a.75.75 0 1 1-.75 1.3l-4.071-2.351V18a.75.75 0 0 1-1.5 0v-4.7l-4.071 2.35a.75.75 0 0 1-.75-1.3L10.5 12 6.429 9.65a.75.75 0 1 1 .75-1.3l4.071 2.35V6a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystOrangeHalfOutline;
