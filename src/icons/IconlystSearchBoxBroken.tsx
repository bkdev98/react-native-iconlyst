import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchBoxBroken = ({
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
      d="M12.482 3a8.418 8.418 0 1 1-4.569 1.347M18.21 17.583 21.637 21"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.111 10.127v2.832c0 .366-.196.704-.512.887l-2.453 1.416a1.02 1.02 0 0 1-1.023 0L9.67 13.846a1.02 1.02 0 0 1-.512-.886v-2.833c0-.366.195-.703.512-.886l2.453-1.417a1.02 1.02 0 0 1 1.023 0L15.6 9.241c.316.183.512.52.512.886"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.3 9.603 3.331 1.926 3.33-1.926M12.635 12.79v-1.263"
    />
  </Svg>
);
export default IconlystSearchBoxBroken;
