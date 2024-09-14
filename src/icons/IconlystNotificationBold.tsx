import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNotificationBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="M9.963 19.228c.5-.106 3.546-.106 4.046 0 .428.099.89.33.89.833-.025.48-.306.904-.695 1.174a3.63 3.63 0 0 1-1.713.731 3.8 3.8 0 0 1-1.008 0 3.6 3.6 0 0 1-1.714-.732c-.39-.269-.67-.694-.695-1.173 0-.504.462-.734.89-.833M12.045 2c2.08 0 4.205.987 5.467 2.625.82 1.054 1.195 2.108 1.195 3.745v.426c0 1.256.332 1.997 1.063 2.85.553.628.73 1.435.73 2.31 0 .874-.287 1.704-.863 2.378a4.54 4.54 0 0 1-2.9 1.413c-1.571.134-3.143.247-4.737.247s-3.165-.068-4.736-.247a4.53 4.53 0 0 1-2.9-1.413 3.62 3.62 0 0 1-.864-2.378c0-.875.178-1.682.73-2.31.754-.853 1.064-1.594 1.064-2.85V8.37c0-1.682.42-2.781 1.283-3.858C7.861 2.942 9.919 2 11.956 2Z"
    />
  </Svg>
);
export default IconlystNotificationBold;
