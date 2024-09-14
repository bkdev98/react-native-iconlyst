import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKnifeAndForkBroken = ({
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
      d="M18.337 11.583c0 3.319-.002 6.71-.003 8.093-.001.749-.47 1.286-1.127 1.322-.761.041-1.342-.532-1.298-1.32.087-1.562.177-2.177.307-3.736.056-.66-.094-1.154-.662-1.546-.58-.4-.917-.924-.976-1.702-.364-7.493 2.752-9.58 3.016-9.664.42-.134.739.197.74.72l.002 4.595M11.73 3c.066 1.487.139 2.972.198 4.46.038.96-.29 1.79-1.013 2.428-.985.872-1.228 1.948-1.095 3.222.246 2.35.426 3.745.594 6.103.067.946-.784 1.728-1.647 1.728s-1.713-.782-1.646-1.728c.072-1.014.146-1.85.227-2.66M7.714 13.11c.133-1.274-.109-2.35-1.096-3.222-.72-.639-1.05-1.468-1.011-2.429.058-1.487.13-2.972.197-4.459M8.762 6.605l.01-3.527"
    />
  </Svg>
);
export default IconlystKnifeAndForkBroken;
