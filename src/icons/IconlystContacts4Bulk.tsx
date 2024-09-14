import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystContacts4Bulk = ({
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
      d="M4.85 5.362c.858-.815 2.066-1.21 3.479-1.21h7.65c1.417 0 2.626.394 3.482 1.21.86.82 1.302 2.006 1.298 3.462v8.246c0 1.456-.445 2.644-1.305 3.465-.856.818-2.065 1.215-3.482 1.215H8.329c-1.416 0-2.625-.405-3.482-1.236-.86-.833-1.305-2.037-1.305-3.513V8.824c0-1.458.447-2.643 1.308-3.462"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M8.503 2.25a.95.95 0 0 0-.95.951v2.974a.951.951 0 1 0 1.902 0V3.2a.95.95 0 0 0-.952-.951M15.805 2.25a.95.95 0 0 0-.95.951v2.974a.951.951 0 0 0 1.902 0V3.2a.95.95 0 0 0-.952-.951"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m15.555 18.271-6.824.01a.4.4 0 0 1-.397-.397c0-1.442 1.178-2.897 3.809-2.897 2.63 0 3.808 1.45 3.808 2.888a.396.396 0 0 1-.396.396m-3.412-9.45a2.58 2.58 0 0 1 2.575 2.575 2.58 2.58 0 0 1-2.575 2.576 2.58 2.58 0 0 1-2.576-2.576 2.58 2.58 0 0 1 2.576-2.576"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystContacts4Bulk;
