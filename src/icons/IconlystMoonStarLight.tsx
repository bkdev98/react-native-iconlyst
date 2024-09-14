import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoonStarLight = ({
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
      d="M3.713 14.676a.056.056 0 0 0-.081.063c1.033 3.615 4.363 6.26 8.297 6.26 4.77 0 8.632-3.87 8.632-8.631a8.624 8.624 0 0 0-6.253-8.296c-.046-.014-.086.037-.063.08a7.79 7.79 0 0 1-1.38 9.152 7.78 7.78 0 0 1-9.152 1.372"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.862 3.045A4.86 4.86 0 0 1 3.63 6.278 4.86 4.86 0 0 1 6.862 9.51a4.86 4.86 0 0 1 3.232-3.232 4.86 4.86 0 0 1-3.232-3.233"
    />
  </Svg>
);
export default IconlystMoonStarLight;
