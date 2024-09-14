import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMapJuggleSearchBold = ({
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
      d="M16.325 6.411a.75.75 0 0 0 1.06 0l.441-.44.442.44a.75.75 0 0 0 1.06 0 .75.75 0 0 0 0-1.06l-.44-.442.44-.442a.749.749 0 1 0-1.06-1.06l-.442.441-.44-.44a.75.75 0 0 0-1.061 1.06l.44.441-.44.441a.75.75 0 0 0 0 1.061M5.474 9.262l-.44-.442.44-.441a.75.75 0 1 0-1.06-1.061l-.442.442-.442-.442a.749.749 0 1 0-1.06 1.06l.441.442-.44.442a.75.75 0 0 0 1.06 1.06l.441-.441.441.442a.751.751 0 0 0 1.061-1.061M8.957 10.037a2.2 2.2 0 0 1 2.41-1.96c.583.06 1.108.343 1.478.797.37.455.541 1.027.481 1.61a2.18 2.18 0 0 1-.845 1.518q-.016.012-.033.025a2.199 2.199 0 0 1-3.49-1.99m1.807 3.9a3.7 3.7 0 0 0 1.983-.345l.912 1.118a.749.749 0 1 0 1.162-.95l-.883-1.081a3.66 3.66 0 0 0 .88-2.041 3.67 3.67 0 0 0-.81-2.71 3.67 3.67 0 0 0-2.489-1.344 3.7 3.7 0 0 0-4.054 3.3 3.7 3.7 0 0 0 3.3 4.054"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m21.608 13.269-1.767-2.458a.753.753 0 0 0-1.175-.053l-1.902 2.189a.75.75 0 0 0 .511 1.24l1.048.076c-.553 2.489-2.574 4.53-5.217 4.962a6.4 6.4 0 0 1-3.003-.248 2.28 2.28 0 0 0-.89-2.29 2.26 2.26 0 0 0-1.697-.406 2.27 2.27 0 0 0-1.488.913 2.282 2.282 0 0 0 2.203 3.59 2.26 2.26 0 0 0 1.075-.49 7.94 7.94 0 0 0 4.038.412c3.34-.544 5.872-3.167 6.486-6.333l1.114.082H21a.748.748 0 0 0 .609-1.187"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMapJuggleSearchBold;
