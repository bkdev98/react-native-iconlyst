import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLampshadeLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.539 3.137h4.032c.885 0 1.663.587 1.903 1.439l2.088 7.387a1.323 1.323 0 0 1-1.28 1.683l-9.434-.042a1.325 1.325 0 0 1-1.269-1.681L8.635 4.58a1.98 1.98 0 0 1 1.904-1.444"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.395 21.137h8.363M16.441 16.116v-2.46M12.576 13.688v7.414"
    />
  </Svg>
);
export default IconlystLampshadeLight;
