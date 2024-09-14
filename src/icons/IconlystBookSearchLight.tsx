import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBookSearchLight = ({
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
      d="M3.772 18.513V5.591A2.59 2.59 0 0 1 6.363 3h11.091a1.2 1.2 0 0 1 1.199 1.199v.43"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.861 11.458 1.368 1.366M17.01 6.746a2.719 2.719 0 1 1 .001 5.438 2.719 2.719 0 0 1 0-5.438M18.654 14.98v1.045m0 0H6.26a2.486 2.486 0 1 0 0 4.974h11.202c.66 0 1.197-.534 1.198-1.195zM7.576 16.026V3.094"
    />
  </Svg>
);
export default IconlystBookSearchLight;
