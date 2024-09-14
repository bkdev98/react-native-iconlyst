import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRotationOutline = ({
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
      d="M12.399 9.714a.21.21 0 0 0-.298 0L9.966 11.85a.21.21 0 0 0 0 .3l2.135 2.134a.21.21 0 0 0 .298 0l2.136-2.134M13.46 8.654a1.71 1.71 0 0 0-2.42 0l-2.134 2.134a1.71 1.71 0 0 0 0 2.421l2.134 2.135a1.71 1.71 0 0 0 2.42 0l2.136-2.135a1.71 1.71 0 0 0 0-2.42zM12.4 9.714l2.136 2.135zM17.904 5.546a.75.75 0 0 1 .9-.562l2.615.606a.75.75 0 1 1-.338 1.46l-1.885-.435-.433 1.87a.75.75 0 0 1-1.461-.338z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.082 5.34a.75.75 0 0 1 1.06.018 9.64 9.64 0 0 1-8.64 16.185.75.75 0 1 1 .265-1.476A8.14 8.14 0 0 0 18.064 6.4a.75.75 0 0 1 .018-1.06M6.579 15.124a.75.75 0 0 1 .588.882l-.522 2.619a.75.75 0 0 1-.882.588l-2.633-.525a.75.75 0 1 1 .293-1.471l1.898.379.375-1.883a.75.75 0 0 1 .883-.589"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.339 3.893a8.14 8.14 0 0 0-6.88 13.881.75.75 0 0 1-1.047 1.075c-3.748-3.65-3.904-9.644-.317-13.484a9.63 9.63 0 0 1 8.463-2.956.75.75 0 0 1-.22 1.484"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRotationOutline;
