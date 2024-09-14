import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAdobeFuseCircleOutline = ({
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
      fill={props.color}
      d="M12 21.75c-5.38 0-9.75-4.37-9.75-9.75S6.62 2.25 12 2.25s9.75 4.37 9.75 9.75-4.37 9.75-9.75 9.75m0-18c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25"
    />
    <Path
      fill={props.color}
      d="M14.47 16.011c-.44 0-.86-.08-1.2-.22a.75.75 0 0 1-.4-.98c.16-.38.6-.56.98-.4.36.15 1.08.14 1.37-.08.06-.05.1-.09.09-.25-.01-.1-.02-.21-.41-.37l-.75-.31c-.3-.13-1.19-.5-1.32-1.58-.08-.66.16-1.24.67-1.62.78-.59 2.06-.6 2.85-.26.38.16.56.6.4.98a.75.75 0 0 1-.98.4c-.36-.15-1.08-.14-1.37.08-.06.05-.1.09-.08.25.01.09.02.21.41.37l.75.31c.3.13 1.19.51 1.32 1.58.08.66-.16 1.24-.67 1.62-.45.34-1.06.48-1.66.48M7.93 16.008c-.41 0-.75-.34-.75-.75v-6.52c0-.41.34-.75.75-.75h3.15c.41 0 .75.34.75.75s-.34.75-.75.75h-2.4v1.69h2.4c.41 0 .75.34.75.75s-.34.75-.75.75h-2.4v2.58c0 .41-.34.75-.75.75"
    />
  </Svg>
);
export default IconlystAdobeFuseCircleOutline;
