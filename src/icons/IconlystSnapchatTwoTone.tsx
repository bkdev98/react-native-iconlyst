import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSnapchatTwoTone = ({
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
      d="M17.131 12.684a.62.62 0 0 1 .232-.82l1.327-.813a1.124 1.124 0 0 0-1.01-1.984l-.906.313V7.774a4.774 4.774 0 1 0-9.548 0V9.38l-.906-.313a1.124 1.124 0 0 0-1.01 1.984l1.327.814a.62.62 0 0 1 .232.819"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.131 12.684q.445.722 1.002 1.361c1.284 1.571 2.461 1.368 2.461 2.147 0 .395-.309.641-.693.823-1.134.608-1.811.857-2.397 2.064a1.06 1.06 0 0 1-.852.605C14.474 19.859 13.609 21 12 21s-2.474-1.14-4.652-1.316a1.06 1.06 0 0 1-.851-.605c-.586-1.207-1.263-1.456-2.397-2.064-.385-.182-.694-.428-.694-.823 0-.779 1.177-.576 2.461-2.147q.557-.639 1.002-1.361"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSnapchatTwoTone;
