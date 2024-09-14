import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesTranslateBroken = ({
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
      d="M9.184 9.742h6.633m-3.316-1.144v1.144m-1.392 2.58c.612 1.113 1.895 2.792 4.238 3.317m-.806-5.897c.06.123-.24 4.973-5.055 6.45"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.137 6.007a8.986 8.986 0 0 1 12.727 0c3.517 3.53 3.512 9.247 0 12.77a8.98 8.98 0 0 1-10.156 1.81c-.492-.198-.896-.359-1.28-.359-1.068.006-2.398 1.046-3.088.353-.691-.693.345-2.028.345-3.106 0-.385-.154-.783-.351-1.278a9.1 9.1 0 0 1-.048-7.501"
    />
  </Svg>
);
export default IconlystMessagesTranslateBroken;
