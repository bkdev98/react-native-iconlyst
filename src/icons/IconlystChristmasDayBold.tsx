import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasDayBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.54 17.12a.746.746 0 0 1-1.06.05.76.76 0 0 1-.055-1.065.745.745 0 0 1 1.054-.055l.011.01a.75.75 0 0 1 .05 1.06m-2.247-5.939a.75.75 0 0 1 0-1.06l.694-.694a.75.75 0 0 1 1.061 1.062l-.695.693a.747.747 0 0 1-1.06 0m-10.71.67-.577.577a.75.75 0 0 1-1.06-1.062l.576-.577a.751.751 0 0 1 1.061 1.062m13.621-6.15c-.625-.627-1.46-1.035-2.446-1.222a.288.288 0 0 0-.339.288v2.071a.75.75 0 0 1-.75.75.73.73 0 0 1-.379-.118.74.74 0 0 0 .372-.632V3.615a.75.75 0 0 0-1.5 0v.737H9.894a.3.3 0 0 0-.3.3v2.186a.75.75 0 0 1-.75.75.73.73 0 0 1-.379-.118.74.74 0 0 0 .372-.632V3.615a.75.75 0 0 0-1.5 0v.751c-2.988.077-4.842 1.931-4.842 4.898v8.113c0 3.076 1.926 4.988 5.026 4.988h3.427a.3.3 0 0 0 .3-.3v-3.75H8.38a.75.75 0 0 1-.549-1.26q.68-.733 1.243-1.64h-.137a.749.749 0 0 1-.57-1.238c1.051-1.234 2.021-2.747 2.964-4.624a.75.75 0 0 1 1.341 0c.941 1.878 1.91 3.391 2.962 4.624a.75.75 0 0 1-.57 1.237h-.137q.563.908 1.244 1.64a.75.75 0 0 1-.55 1.26h-2.872v3.75a.3.3 0 0 0 .3.3h3.43c3.101 0 5.027-1.886 5.027-4.92V9.265c.004-1.476-.446-2.708-1.3-3.565"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChristmasDayBold;
