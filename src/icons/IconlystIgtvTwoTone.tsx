import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIgtvTwoTone = ({
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
      d="M8.282 5.648h7.435c2.6 0 4.217 1.835 4.217 4.431v6.49c0 2.596-1.618 4.43-4.218 4.43H8.282c-2.599 0-4.216-1.834-4.216-4.43v-6.49c0-2.596 1.625-4.43 4.216-4.43"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.014 13.038 4.029-1.022v2.611l3.944-1.117M14.428 3 12 5.648 9.57 3"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystIgtvTwoTone;
