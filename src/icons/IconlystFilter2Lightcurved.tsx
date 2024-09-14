import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilter2Lightcurved = ({
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
      d="M12.004 21c-2.012 0-2.02-2.006-2.02-5.4S3 9.827 3 6.1C3 2.954 5.79 3 12 3s9-.047 9 3.1c0 3.727-6.983 6.105-6.983 9.5s-.003 5.4-2.013 5.4"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFilter2Lightcurved;
