import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNavigationRightBroken = ({
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
      d="M5.657 18.094c-1.263 1.122-.238 3.195 1.422 2.873l4.012-.78h.633l4.013.78c1.66.322 2.684-1.75 1.421-2.873l-4.232-3.763a2.285 2.285 0 0 0-3.037 0l-2.116 1.881M16.793 8.106l2.614-2.553L16.793 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.408 5.555h-3.429s-4.57 0-4.57 4.57"
    />
  </Svg>
);
export default IconlystNavigationRightBroken;
