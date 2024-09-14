import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatWarningDashboardTwoTone = ({
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
      d="m13.977 7.653 3.018 5.365a1.982 1.982 0 0 1-1.727 2.954H9.233a1.982 1.982 0 0 1-1.728-2.954l3.019-5.365a1.982 1.982 0 0 1 3.453 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.614 18.383a8.98 8.98 0 0 1-10.156 1.81c-.492-.199-.896-.36-1.28-.36-1.068.007-2.398 1.047-3.088.353-.691-.693.345-2.027.345-3.105 0-.386-.154-.783-.351-1.278-1.543-3.343-.947-7.43 1.803-10.19a8.986 8.986 0 0 1 12.727 0c3.517 3.53 3.512 9.247 0 12.77"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 11.466v-1.61M12.25 13.602v-.01"
    />
  </Svg>
);
export default IconlystChatWarningDashboardTwoTone;
