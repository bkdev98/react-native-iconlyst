import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChangingBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.068 9.7h3.813c.7 0 1.33-.36 1.681-.967a1.93 1.93 0 0 0 .01-1.943L8.677 3.466a1.92 1.92 0 0 0-1.685-.982h-.006c-.704 0-1.333.363-1.685.973L3.383 6.781a1.93 1.93 0 0 0 0 1.946c.352.61.981.973 1.685.973M17.684 13.584a3.954 3.954 0 0 0-3.95 3.95 3.955 3.955 0 0 0 3.95 3.95 3.955 3.955 0 0 0 3.95-3.95 3.954 3.954 0 0 0-3.95-3.95M10.713 20.032a6.734 6.734 0 0 1-6.726-6.726.75.75 0 0 0-1.5 0c0 4.536 3.69 8.226 8.226 8.226a.75.75 0 0 0 0-1.5M13.658 2.541a.75.75 0 0 0 0 1.5 6.734 6.734 0 0 1 6.726 6.725.75.75 0 0 0 1.5 0c0-4.535-3.69-8.225-8.226-8.225"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChangingBold;
