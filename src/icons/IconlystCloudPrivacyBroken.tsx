import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudPrivacyBroken = ({
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
      d="M14.88 17.194c0 2.404-2.88 3.276-2.88 3.276s-2.88-.872-2.88-3.276c0-2.304-.104-2.492.127-2.723s2.376-.979 2.753-.979 2.753.98 2.753.98M12 3.66c-3.617 0-4.897 3.265-4.897 4.898C4.833 8.578 3 10.103 3 12.7c0 1.68 1 3.125 2.436 3.774M18.563 16.473A4.14 4.14 0 0 0 21 12.699c0-2.596-1.83-4.14-4.103-4.141 0-1.07-.55-2.84-1.945-3.933"
    />
  </Svg>
);
export default IconlystCloudPrivacyBroken;
