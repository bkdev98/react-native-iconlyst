import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTelegramCircle3Light = ({
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
      d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.2 13.267c-.465.44.065.937.602 1.336.937.67 1.867 1.35 2.803 2.021.35.247.928.462 1.1-.096l1.647-7.306c.072-.306.123-.638-.162-.855-.159-.123-.446-.29-.975-.105l-8.812 3.452c-.536.235-.386.787-.138.879.609.232 1.433.578 2.043.806.624.216 1.364.205 1.893-.132m0 0 2.786-1.841"
    />
  </Svg>
);
export default IconlystTelegramCircle3Light;
