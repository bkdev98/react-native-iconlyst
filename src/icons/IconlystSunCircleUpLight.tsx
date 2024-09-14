import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunCircleUpLight = ({
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
      d="M18.419 5.636A9 9 0 1 1 5.69 18.364 9 9 0 0 1 18.419 5.636M12.055 6v.915m0 10.17V18m6-6h-.915M6.97 12h-.915m10.242-4.243-.647.647M8.46 15.596l-.647.647m8.485 0-.647-.647M8.46 8.404l-.647-.646"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.055 9.203a2.797 2.797 0 1 1 0 5.594 2.797 2.797 0 0 1 0-5.594"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSunCircleUpLight;
