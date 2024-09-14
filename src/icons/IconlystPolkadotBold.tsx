import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPolkadotBold = ({
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
      d="M12 2.145c-4.169 0-7.56 3.39-7.56 7.56 0 .726.104 1.448.31 2.143a1 1 0 0 0 1.918-.568A5.566 5.566 0 0 1 12 4.145a5.566 5.566 0 0 1 5.56 5.56c0 1.478-.592 2.878-1.666 3.944-1.052 1.043-2.414 1.617-3.839 1.617q-.058-.003-.112-.002c-.784 0-1.45.13-2.016.341l1.268-5.785A1 1 0 0 0 9.24 9.39L6.784 20.6a1 1 0 0 0 1.954.428l.443-2.023c.015-.038.038-.07.048-.11.041-.169.465-1.633 2.713-1.633q.057 0 .112.002c1.956 0 3.818-.779 5.247-2.197 1.456-1.444 2.258-3.348 2.258-5.363 0-4.17-3.392-7.56-7.56-7.56"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.98 19.214a1.32 1.32 0 0 0 0 2.64c.724 0 1.314-.592 1.314-1.32s-.59-1.32-1.315-1.32"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPolkadotBold;
