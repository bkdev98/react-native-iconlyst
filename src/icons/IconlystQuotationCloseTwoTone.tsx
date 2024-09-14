import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystQuotationCloseTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.717 21.766H8.282c-2.948 0-4.782-2.082-4.782-5.027V8.792c0-2.945 1.834-5.026 4.783-5.026h8.434c2.948 0 4.783 2.08 4.783 5.026v7.947c0 2.945-1.844 5.027-4.783 5.027"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.99 16.229a5.97 5.97 0 0 0 2.265-3.26c.249-.913.253-1.958-.292-2.73-.522-.741-1.53-1.101-2.402-.86-1.594.441-2.112 2.468-1.035 3.679.41.461 1.01.747 1.627.776M15.615 16.229a5.98 5.98 0 0 0 2.264-3.26c.249-.913.253-1.958-.292-2.73-.523-.741-1.53-1.101-2.402-.86-1.594.441-2.112 2.468-1.035 3.679.41.461 1.01.747 1.627.776"
    />
  </Svg>
);
export default IconlystQuotationCloseTwoTone;
