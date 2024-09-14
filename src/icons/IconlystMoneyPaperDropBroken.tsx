import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperDropBroken = ({
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
      d="M12 21h5.604c1.894 0 3.074-1.337 3.074-3.23v-5.358c0-1.892-1.185-3.23-3.074-3.23H6.397c-1.895 0-3.075 1.338-3.075 3.23v5.358c0 1.893 1.18 3.23 3.076 3.23h1.61M6.422 11.842h1.352M17.577 18.342h-1.352"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.999 12.887a2.206 2.206 0 1 0 2.206 2.206M8.117 6.337V4.846M15.88 6.337V4.846M11.998 6.338V3"
    />
  </Svg>
);
export default IconlystMoneyPaperDropBroken;
