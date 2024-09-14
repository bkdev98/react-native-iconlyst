import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInboxDownBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.672 3.744c-2.886 0-4.682 2.044-4.682 4.937v7.806c0 2.893 1.796 4.938 4.683 4.938h4.764M16.93 3.744c2.877 0 4.681 2.044 4.681 4.937v7.807c0 2.893-1.795 4.937-4.681 4.937"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.604 13.709H17.41c-.869 0-1.661.493-2.047 1.274a2.86 2.86 0 0 1-2.564 1.596 2.86 2.86 0 0 1-2.564-1.596 2.28 2.28 0 0 0-2.047-1.274H6.763M15.737 7.945l-2.747 2.659-2.746-2.659M12.99 10.6V3.364"
    />
  </Svg>
);
export default IconlystInboxDownBroken;
