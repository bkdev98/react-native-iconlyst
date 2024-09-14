import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirbnbOutline = ({
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
      d="M7.098 21.75c-.98 0-2.08-.33-3.11-1.31-.92-.87-2.23-2.81-.64-5.99.43-.87 4.99-9.69 5.18-10.06.68-1.32 2.01-2.14 3.47-2.14s2.79.82 3.47 2.14c.19.37 4.75 9.19 5.17 10.03 1.61 3.21.3 5.15-.62 6.02-2.4 2.28-5.12 1.04-6.04.32-.71-.42-1.45-1.09-1.98-1.6-.53.52-1.27 1.18-1.98 1.6-.52.41-1.63.99-2.93.99zm4.91-18c-.9 0-1.72.51-2.14 1.32-.05.09-4.75 9.19-5.16 10.01-.9 1.8-.79 3.22.31 4.26 2 1.9 4.08.23 4.1.22a.4.4 0 0 1 .1-.07c.6-.35 1.27-.95 1.74-1.41-1.11-1.16-2.44-2.59-2.44-4.49s1.56-3.48 3.49-3.48 3.49 1.56 3.49 3.48-1.32 3.34-2.44 4.49c.47.46 1.14 1.06 1.74 1.41.03.02.07.04.1.07.02.02 2.1 1.69 4.1-.21 1.1-1.04 1.21-2.46.33-4.23-.43-.86-5.13-9.95-5.18-10.05a2.4 2.4 0 0 0-2.14-1.32m0 7.86c-1.1 0-1.99.89-1.99 1.98 0 1.3.99 2.38 1.99 3.42 1-1.04 1.99-2.12 1.99-3.42 0-1.09-.89-1.98-1.99-1.98"
    />
  </Svg>
);
export default IconlystAirbnbOutline;
