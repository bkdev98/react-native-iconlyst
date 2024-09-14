import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInfoSquareBrokencurved = ({
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
      d="M15.277 21.594c4.601-.682 6.223-3.248 6.223-9.057 0-6.937-2.313-9.25-9.25-9.25S3 5.6 3 12.537c0 6.75 2.19 9.122 8.7 9.245M12.25 16.432v-3.895M12.255 9.037h-.009"
    />
  </Svg>
);
export default IconlystInfoSquareBrokencurved;
