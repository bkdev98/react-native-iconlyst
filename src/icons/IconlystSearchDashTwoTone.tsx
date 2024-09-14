import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchDashTwoTone = ({
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
      d="M3.5 13.981v-3.963M21.5 13.981v-3.963M14.479 3h-3.963M14.479 21h-3.963M3.525 16.914c.313 2.233 1.795 3.803 4.047 4.066M17.39 20.98c2.253-.264 3.725-1.833 4.037-4.066M3.525 7.095c.313-2.233 1.795-3.812 4.047-4.076M17.39 3.019c2.253.264 3.725 1.843 4.037 4.076"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.199 8.369a3.25 3.25 0 1 1 0 6.498 3.25 3.25 0 0 1 0-6.498"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.412 13.999 1.636 1.632"
    />
  </Svg>
);
export default IconlystSearchDashTwoTone;
