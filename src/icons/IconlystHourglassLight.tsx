import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHourglassLight = ({
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
      d="M6.789 17.492c-.147 1.853.904 3.386 2.944 3.508h4.85c2.042-.122 3.092-1.655 2.945-3.509-.123-1.286-1.323-2.458-3.396-4.45Q13.13 12 14.131 10.958c2.074-1.992 3.274-3.163 3.397-4.45.147-1.853-.903-3.386-2.945-3.508h-4.85c-2.04.122-3.091 1.655-2.944 3.509.123 1.286 1.322 2.457 3.397 4.449q1 1.041 0 2.083c-2.075 1.992-3.274 3.164-3.397 4.45"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.158 14.611c.246.89 1.242 1.505 1.916 2.295.614.582.202 1.617-.645 1.617h-2.543c-.847 0-1.26-1.035-.644-1.617.673-.79 1.67-1.404 1.915-2.295"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHourglassLight;
