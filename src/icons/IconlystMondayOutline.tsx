import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMondayOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M19.141 14.414a1.109 1.109 0 1 0 0 2.218 1.109 1.109 0 0 0 0-2.218m-2.609 1.109a2.609 2.609 0 1 1 5.218 0 2.609 2.609 0 0 1-5.218 0M13.798 7.073a2.609 2.609 0 1 1 4.566 2.525l-4.052 7.327A2.609 2.609 0 0 1 9.746 14.4zm2.82.292a1.11 1.11 0 0 0-1.507.434l-4.052 7.327a1.109 1.109 0 1 0 1.94 1.074l4.053-7.328a1.11 1.11 0 0 0-.434-1.507M6.628 7.073a2.609 2.609 0 1 1 4.566 2.525l-4.052 7.327A2.609 2.609 0 1 1 2.576 14.4zm2.82.292A1.11 1.11 0 0 0 7.94 7.8l-4.052 7.327a1.109 1.109 0 1 0 1.94 1.074l4.053-7.328a1.11 1.11 0 0 0-.434-1.507"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMondayOutline;
