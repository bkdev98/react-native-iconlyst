import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRetryOutline = ({
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
      d="M12.982 14.91a.75.75 0 0 1 .75.75v.04a.75.75 0 0 1-1.5 0v-.04a.75.75 0 0 1 .75-.75M12.977 7.592a.75.75 0 0 1 .75.75v4.26a.75.75 0 1 1-1.5 0v-4.26a.75.75 0 0 1 .75-.75M18.715 5.394a.75.75 0 0 1 .9-.562l2.534.586a.75.75 0 0 1-.338 1.461l-1.803-.417-.414 1.789a.75.75 0 0 1-1.461-.339z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.919 5.29a.75.75 0 0 1 1.06.019c3.652 3.777 3.627 9.8-.092 13.547a9.67 9.67 0 0 1-8.585 2.71.75.75 0 1 1 .264-1.476A8.183 8.183 0 0 0 18.9 6.352a.75.75 0 0 1 .018-1.061M7.277 18.606a.75.75 0 0 1-.9.562l-2.533-.585a.75.75 0 0 1 .338-1.462l1.802.417.414-1.789a.75.75 0 0 1 1.461.338z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.073 18.71a.75.75 0 0 1-1.06-.019c-3.651-3.777-3.626-9.8.092-13.547a9.67 9.67 0 0 1 8.586-2.71.75.75 0 1 1-.265 1.476 8.183 8.183 0 0 0-7.335 13.738.75.75 0 0 1-.018 1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRetryOutline;
