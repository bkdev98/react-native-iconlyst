import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNextCircleBold = ({
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
      d="M9.993 9.884a.8.8 0 0 0-.307-.066.4.4 0 0 0-.201.048c-.14.083-.184.274-.197.381a16.6 16.6 0 0 0 0 3.516c.016.115.066.284.208.365.124.071.302.068.487-.01a8.4 8.4 0 0 0 2.518-1.593c.128-.117.274-.298.276-.52 0-.226-.148-.413-.275-.53a8.5 8.5 0 0 0-2.51-1.59"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.305 14.99a.75.75 0 0 1-1.5 0V9.01a.75.75 0 0 1 1.5 0zm-2.789-1.36a9.9 9.9 0 0 1-2.954 1.872 2.2 2.2 0 0 1-.856.178c-.338 0-.665-.083-.956-.25-.528-.302-.865-.83-.95-1.486a18 18 0 0 1-.003-3.865c.083-.672.411-1.2.924-1.504.528-.312 1.18-.341 1.831-.082a10 10 0 0 1 2.964 1.876l.004.004c.491.455.759 1.036.757 1.637-.003.598-.273 1.173-.761 1.62M12 2.5c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.261 9.5-9.5-4.261-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNextCircleBold;
