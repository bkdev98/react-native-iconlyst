import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleHeart1Broken = ({
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
      d="M21.341 14.894c.459-1.431-.076-3.067-1.579-3.55a2.56 2.56 0 0 0-2.32.39 2.58 2.58 0 0 0-2.314-.39c-1.502.483-2.041 2.119-1.583 3.55.713 2.267 3.898 4.015 3.898 4.015s1.1-.6 2.154-1.562"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.825 11.228c.51-2.544-.571-5.238-3.195-6.1a4.9 4.9 0 0 0-2.294-.15c-.76.13-1.492.65-2.113 1.122-.62-.471-1.352-1.002-2.113-1.132a4.9 4.9 0 0 0-2.294.16c-1.832.596-2.91 2.093-3.221 3.81M14.798 16.857c-1.833 1.432-3.575 2.243-3.575 2.243s-5.98-2.784-7.422-7.17"
    />
  </Svg>
);
export default IconlystDoubleHeart1Broken;
