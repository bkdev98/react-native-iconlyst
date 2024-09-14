import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystForwardCircleBold = ({
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
      d="M9.282 9.886a.9.9 0 0 0-.312-.067.4.4 0 0 0-.199.047c-.14.083-.185.275-.198.382a16.6 16.6 0 0 0 .001 3.516c.015.115.064.284.207.365.126.072.303.068.487-.011a8.4 8.4 0 0 0 2.52-1.593c.126-.116.273-.298.274-.521.001-.226-.15-.414-.277-.532a8.5 8.5 0 0 0-2.503-1.586"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.375 13.721c-.773.915-2.537 2.078-2.611 2.126a.75.75 0 0 1-.824-1.253c.459-.302 1.765-1.22 2.292-1.845.383-.446.381-1.049 0-1.501-.498-.581-1.828-1.531-2.299-1.848a.751.751 0 0 1 .838-1.244c.19.128 1.882 1.276 2.604 2.121.863 1.023.861 2.438 0 3.444m-6.527 1.781a2.2 2.2 0 0 1-.857.178c-.337 0-.665-.083-.956-.25-.527-.302-.865-.83-.95-1.486a18 18 0 0 1-.002-3.866c.084-.671.411-1.199.924-1.503.528-.312 1.178-.342 1.831-.082l.006.002a10 10 0 0 1 2.958 1.874c.495.46.763 1.041.76 1.642-.002.597-.272 1.172-.759 1.618a9.9 9.9 0 0 1-2.955 1.873M12 2.5c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.261 9.5-9.5-4.261-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystForwardCircleBold;
