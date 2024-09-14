import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowUpSquareLightcurved = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 7.914v8.172M8.248 11.678S10.776 7.914 12 7.914s3.748 3.764 3.748 3.764"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.25 12c0-6.937-2.313-9.25-9.25-9.25S2.75 5.063 2.75 12s2.313 9.25 9.25 9.25 9.25-2.313 9.25-9.25"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowUpSquareLightcurved;
