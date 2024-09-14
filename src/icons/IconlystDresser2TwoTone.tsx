import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDresser2TwoTone = ({
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
      d="M8.4 3h8.198c1.693 0 2.748 1.196 2.748 2.888v12.221c0 1.692-1.055 2.887-2.749 2.887H8.4c-1.694 0-2.747-1.195-2.747-2.887V5.888C5.653 4.196 6.712 3 8.4 3M14.804 10.97v2.056m-4.607-2.056v2.056"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.496 21V3.002"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDresser2TwoTone;
