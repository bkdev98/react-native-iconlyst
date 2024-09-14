import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTopRightLayoutTwoTone = ({
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
      d="M16.717 21.766H8.282c-2.948 0-4.782-2.08-4.782-5.027V8.792c0-2.945 1.834-5.026 4.783-5.026h8.434c2.948 0 4.783 2.08 4.783 5.026v7.947c0 2.946-1.844 5.027-4.783 5.027"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.608 7.656H10.31m7.298 4.379H14.24"
    />
  </Svg>
);
export default IconlystTopRightLayoutTwoTone;
