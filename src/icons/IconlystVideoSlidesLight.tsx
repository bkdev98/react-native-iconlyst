import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoSlidesLight = ({
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
      d="M15.78 20.003H9.84a3.1 3.1 0 0 1-3.102-3.101V7.1C6.738 5.388 8.127 4 9.84 4h5.94c1.713 0 3.101 1.388 3.101 3.1v9.802c0 1.712-1.388 3.1-3.1 3.1M3.834 7.465v9.068M21.834 7.465v9.068"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.81 12.871a7.6 7.6 0 0 1-2.232 1.4c-.72.285-1.324-.07-1.412-.78a14 14 0 0 1 0-2.983c.097-.738.761-1.05 1.412-.777a7.5 7.5 0 0 1 2.231 1.4c.556.504.569 1.218 0 1.74"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVideoSlidesLight;
