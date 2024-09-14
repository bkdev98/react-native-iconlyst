import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPizzaOutline = ({
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
      d="M16.26 8.92c.414-.03.77.28.796.7l.108 1.71a.76.76 0 0 1-.7.8.756.756 0 0 1-.797-.71l-.108-1.71a.743.743 0 0 1 .701-.79M6.696 9.48a.75.75 0 0 1 .911-.54l1.455.37a.748.748 0 1 1-.37 1.45l-1.455-.37a.747.747 0 0 1-.54-.91"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.625 10.4a2.05 2.05 0 0 1-2.047 2.05 2.05 2.05 0 0 1 0-4.1c1.13 0 2.047.92 2.047 2.05m-2.047.55a.55.55 0 0 0 0-1.1.551.551 0 0 0 0 1.1"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.663 3.61c-1.846.58-2.742 2.71-1.762 4.42l2.838 4.943a.8.8 0 0 0 .13.226l2.277 3.968a.8.8 0 0 0 .126.219l1.633 2.845c1.025 1.79 3.601 1.79 4.632.01l3.16-5.467a1 1 0 0 0 .042-.074l3.854-6.67c.99-1.709.094-3.839-1.756-4.42-5.055-1.58-10.12-1.58-15.174 0M4.93 8.55l1.86 3.24q.36-.088.735-.088a3.183 3.183 0 0 1 3.172 3.18c0 .848-.332 1.62-.875 2.188l1.384 2.412c.45.79 1.581.79 2.033.01l.114-.197A3.463 3.463 0 0 1 15.3 12.96c.542 0 1.058.122 1.515.342l2.749-4.757C14.687 7.032 9.819 7.033 4.93 8.55M20.334 7.21c.426-.83-.003-1.869-.945-2.17-4.762-1.48-9.514-1.48-14.278.01-.94.291-1.37 1.322-.946 2.16 5.393-1.73 10.786-1.73 16.169 0m-4.274 7.4a2 2 0 0 0-.76-.15 1.96 1.96 0 0 0-1.973 1.96c0 .634.306 1.206.78 1.569zm-7.05 1.043a1.685 1.685 0 0 0-1.408-2.452z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPizzaOutline;
