import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIgtvBroken = ({
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
      d="M12.46 21H9.032c-2.599 0-4.216-1.835-4.216-4.43v-6.49c0-2.596 1.625-4.431 4.216-4.431h7.435c2.599 0 4.217 1.835 4.217 4.43v6.49c0 2.596-1.618 4.43-4.218 4.43h-.568"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.764 13.04 4.029-1.022v2.61l3.944-1.116M15.178 3 12.75 5.648 10.32 3"
    />
  </Svg>
);
export default IconlystIgtvBroken;
