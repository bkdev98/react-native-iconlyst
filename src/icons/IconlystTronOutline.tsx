import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTronOutline = ({
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
      d="M12.25 21.75A9.75 9.75 0 1 1 22 12a9.76 9.76 0 0 1-9.75 9.75m0-18A8.25 8.25 0 1 0 20.5 12a8.26 8.26 0 0 0-8.25-8.25"
    />
    <Path
      fill={props.color}
      d="M12.12 17.966q-.079 0-.157-.01a1.14 1.14 0 0 1-.906-.692L7.513 8.897a1.151 1.151 0 0 1 1.268-1.581l6.016.779c.392.052.755.233 1.033.514l1.612 1.636a1.146 1.146 0 0 1 .1 1.532l-4.52 5.749a1.14 1.14 0 0 1-.902.44m-2.989-9.09 3.076 7.262 3.964-5.043-1.409-1.43a.28.28 0 0 0-.159-.078zm7.245 2.427.024.024zm-7.827-2.5h.022z"
    />
    <Path
      fill={props.color}
      d="M12.14 17.963h-.069a.75.75 0 0 1-.678-.815l.43-4.741-4.045-3.592a.751.751 0 1 1 1-1.12l4.328 3.842a.75.75 0 0 1 .25.627l-.466 5.12a.75.75 0 0 1-.75.678"
    />
    <Path
      fill={props.color}
      d="M12.606 12.842a.75.75 0 0 1-.6-1.2l2.38-3.127a.75.75 0 0 1 1.194.908l-1.1 1.453 2.386-.574a.75.75 0 0 1 .35 1.459l-4.433 1.065a.8.8 0 0 1-.178.016"
    />
  </Svg>
);
export default IconlystTronOutline;
