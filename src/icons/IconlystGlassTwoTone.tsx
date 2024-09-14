import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGlassTwoTone = ({
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
      d="M19.685 4.934 18.5 18.017a2.55 2.55 0 0 1-1.553 2.136c-1.079.458-2.67.847-4.446.847s-3.367-.39-4.446-.847a2.55 2.55 0 0 1-1.554-2.136L5.321 5.004"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.685 4.934c0 1.068-3.217 1.935-7.185 1.935-3.969 0-7.186-.867-7.186-1.935S8.531 3 12.5 3c3.969 0 7.185.866 7.185 1.934"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGlassTwoTone;
