import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalkLight = ({
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
      d="M12.224 6.93a1.964 1.964 0 1 0 0-3.928 1.964 1.964 0 0 0 0 3.928"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.023 13.64c.121-1.41.698-3.103 1.881-3.977 1.052-.776 2.473-.764 3.621-.21 1.268.61 1.795 1.806 2.614 2.865.477.616 1.067 1.13 1.838 1.322"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.571 9.217-.794 3.239a4.28 4.28 0 0 0 .773 3.674L15.332 21M9.507 18.315 7.497 21"
    />
  </Svg>
);
export default IconlystWalkLight;
