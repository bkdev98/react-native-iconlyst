import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSubtractDashTwoTone = ({
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
      d="M6.922 8.121h6.035c2.11 0 3.422 1.489 3.422 3.596v5.687c0 2.108-1.312 3.596-3.423 3.596H6.922C4.812 21 3.5 19.512 3.5 17.404v-5.687c0-2.107 1.32-3.596 3.422-3.596"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.5 10.453V8.367M18.629 15.894c1.623-.048 2.688-1.115 2.871-2.665M14.018 3h2.086M11.492 3c-1.623.048-2.688 1.114-2.87 2.665M18.629 3c1.623.048 2.688 1.114 2.871 2.665M8.621 8.12v4.164c0 2.107 1.313 3.596 3.422 3.596h4.337"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSubtractDashTwoTone;
