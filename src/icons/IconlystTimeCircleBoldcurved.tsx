import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTimeCircleBoldcurved = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M16.441 13.517h-.013l-4.529-.073a.75.75 0 0 1-.738-.75V7.846a.75.75 0 0 1 1.5 0v4.109l3.792.062a.751.751 0 0 1-.012 1.5M12.25 2.25C6.874 2.25 2.5 6.624 2.5 12s4.374 9.75 9.75 9.75S22 17.376 22 12s-4.374-9.75-9.75-9.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTimeCircleBoldcurved;
