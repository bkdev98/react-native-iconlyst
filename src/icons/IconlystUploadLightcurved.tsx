import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUploadLightcurved = ({
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
      d="M12.12 2.209V14.25M9.205 5.136l2.916-2.928 2.916 2.928M7.63 7.64c-3.58.33-4.88 1.67-4.88 7 0 7.101 2.31 7.101 9.25 7.101s9.25 0 9.25-7.1c0-5.33-1.3-6.67-4.88-7"
    />
  </Svg>
);
export default IconlystUploadLightcurved;
