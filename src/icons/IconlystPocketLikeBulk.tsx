import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPocketLikeBulk = ({
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
      d="M18.007 7.025a.3.3 0 0 0-.087-.01L7.153 7.47l-.028.001a.651.651 0 0 1-.027-1.3l10.54-.443a.3.3 0 0 0 .288-.3v-.795c0-.69-.307-1.32-.842-1.729A2.15 2.15 0 0 0 15.2 2.55L6.47 4.857c-.877.293-1.442 1.03-1.442 1.875v12.2c0 1.434 1.166 2.6 2.6 2.6h9.7c1.433 0 2.6-1.166 2.6-2.6v-9.4a2.605 2.605 0 0 0-1.92-2.507"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.706 12.325a2.11 2.11 0 0 0-1.328-1.241 2.2 2.2 0 0 0-1.046-.074c-.321.053-.612.245-.857.424-.235-.17-.533-.366-.856-.42a2.26 2.26 0 0 0-1.045.07c-1.341.434-1.754 1.901-1.38 3.068.584 1.873 3.099 3.064 3.206 3.114a.18.18 0 0 0 .152 0c.105-.049 2.582-1.22 3.2-3.112h.001a2.7 2.7 0 0 0-.047-1.83"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPocketLikeBulk;
