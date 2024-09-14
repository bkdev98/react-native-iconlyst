import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMovieReel2Outline = ({
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
      fill={props.color}
      d="M12.737 20.895a9.1 9.1 0 1 1 9.1-9.1 9.107 9.107 0 0 1-9.1 9.1m0-16.7a7.6 7.6 0 1 0 7.6 7.6 7.607 7.607 0 0 0-7.6-7.59z"
    />
    <Path
      fill={props.color}
      d="M12.735 9.978a2.122 2.122 0 1 1 0-4.243 2.122 2.122 0 0 1 0 4.243m0-2.745a.622.622 0 1 0 0 1.245.622.622 0 0 0 0-1.245M12.735 17.853a2.122 2.122 0 1 1 0-4.244 2.122 2.122 0 0 1 0 4.244m0-2.744a.623.623 0 1 0 0 1.245.623.623 0 0 0 0-1.245M8.798 13.916a2.123 2.123 0 1 1 0-4.245 2.123 2.123 0 0 1 0 4.245m0-2.744a.622.622 0 1 0 0 1.245.622.622 0 0 0 0-1.245M16.677 13.916a2.122 2.122 0 1 1 0-4.245 2.122 2.122 0 0 1 0 4.245m0-2.744a.623.623 0 1 0 0 1.245.623.623 0 0 0 0-1.245M7.398 21.31a3.17 3.17 0 0 1-1.979-.718 1.56 1.56 0 0 0-.683-.35 1.74 1.74 0 0 0-1.162.39.75.75 0 1 1-.984-1.133 3.2 3.2 0 0 1 2.34-.745 2.93 2.93 0 0 1 1.358.615c.306.275.7.432 1.11.44a2.45 2.45 0 0 0 1.614-.75.75.75 0 0 1 1.124.992 3.94 3.94 0 0 1-2.738 1.259"
    />
  </Svg>
);
export default IconlystMovieReel2Outline;
