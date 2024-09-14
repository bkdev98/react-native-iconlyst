import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlayCircleBold = ({
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
      d="m15.042 13.694-.005.004a10.6 10.6 0 0 1-3.128 1.98 2.5 2.5 0 0 1-.913.184c-.357 0-.696-.089-.996-.267-.532-.316-.872-.864-.955-1.545a19.2 19.2 0 0 1-.001-4.094c.09-.696.44-1.245.988-1.559.555-.318 1.244-.344 1.888-.069a10.5 10.5 0 0 1 3.121 1.978c.505.463.787 1.061.79 1.684.002.624-.278 1.23-.789 1.704M12 2.5c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.34 9.711a.8.8 0 0 0-.321-.072q-.137 0-.241.06c-.168.095-.226.29-.245.436a17.7 17.7 0 0 0 .003 3.747c.013.106.063.324.229.422.139.083.347.076.585-.018a9.1 9.1 0 0 0 2.674-1.694c.14-.13.308-.34.307-.596-.001-.254-.167-.458-.305-.585a9 9 0 0 0-2.685-1.7"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlayCircleBold;
