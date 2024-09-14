import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystToiletLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.048 21v-3.421c0-.869.26-1.717.743-2.44l1.25-1.864c.485-.721.743-1.57.743-2.439V4.158c0-.64-.518-1.158-1.157-1.158H16.34c-.64 0-1.158.519-1.158 1.158V11c0 .645-.523 1.167-1.168 1.167m0 0H6.015m8 0H6.178a.987.987 0 0 1-.987-.986v-.898c0-.545.442-.987.987-.987h9.003M7.48 21h12.358M15.182 5.742h5.602M9.623 21v-4.656M15.286 16.344H9.27a3.257 3.257 0 0 1-3.256-3.257v-.919"
    />
  </Svg>
);
export default IconlystToiletLight;
