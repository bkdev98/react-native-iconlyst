import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst4GCircleBold = ({
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
      d="M17.667 13.4c0 1.208-.838 1.93-2.241 1.93-.864 0-1.66-.334-2.243-.942-.629-.656-.967-1.596-.926-2.58a3.43 3.43 0 0 1 1.109-2.379 3.1 3.1 0 0 1 2.232-.818c.479.025.926.143 1.33.352a.75.75 0 0 1-.688 1.333 1.8 1.8 0 0 0-.721-.187 1.63 1.63 0 0 0-1.142.429 1.92 1.92 0 0 0-.621 1.332c-.024.578.162 1.117.51 1.48.3.314.702.48 1.16.48.741 0 .741-.229.741-.43v-.681h-.741a.75.75 0 0 1 0-1.5h1.491a.75.75 0 0 1 .75.75zm-6.673.739h-.259v.441a.75.75 0 0 1-1.5 0v-.441H7.082a.748.748 0 0 1-.609-1.187l2.903-4.04a.751.751 0 0 1 1.359.437v3.29h.259a.75.75 0 0 1 0 1.5M12 2.5c-5.238 0-9.5 4.261-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.235 12.64v-.962l-.69.961z"
      clipRule="evenodd"
    />
  </Svg>
);
export default Iconlyst4GCircleBold;
