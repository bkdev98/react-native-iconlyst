import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpoonAndForkLight = ({
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
      d="M15.351 11.488c.022.635-.234 1.247-.66 1.719l-.665.739a2.54 2.54 0 0 0-.66 1.718c.016 1.542.597 5.336 3.098 5.336s3.082-3.794 3.097-5.336a2.53 2.53 0 0 0-.66-1.718l-.665-.74c-.424-.471-.681-1.083-.66-1.718.066-1.935.366-4.402.534-6.76C18.179 3.78 17.327 3 16.464 3c-.864 0-1.713.78-1.646 1.728.167 2.358.467 4.825.533 6.76"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.565 3c.067 1.487.14 2.972.199 4.46.038.96-.291 1.79-1.013 2.428-.986.872-1.229 1.948-1.095 3.222.246 2.35.426 3.745.593 6.103.067.946-.783 1.728-1.646 1.728s-1.714-.782-1.647-1.728c.168-2.358.348-3.752.594-6.103.133-1.274-.109-2.35-1.096-3.222-.72-.639-1.05-1.468-1.011-2.429.058-1.487.13-2.972.197-4.459M7.598 6.605l.01-3.527"
    />
  </Svg>
);
export default IconlystSpoonAndForkLight;
