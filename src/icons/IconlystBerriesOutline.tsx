import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBerriesOutline = ({
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
      d="M7.66 14.781a.745.745 0 0 1-.68-1.07c1.05-2.25 6.15-8.5 10.83-9.91.39-.12.81.1.93.5s-.1.81-.5.93c-4.01 1.21-8.91 6.99-9.91 9.11-.13.27-.4.43-.68.43z"
    />
    <Path
      fill={props.color}
      d="M16.05 16.321c-.27 0-.53-.15-.67-.41-.65-1.26-2.62-5.76-.45-10.47a.754.754 0 0 1 1.37.63c-1.89 4.09-.16 8.04.42 9.15.19.37.05.82-.32 1.01-.11.06-.23.08-.34.08z"
    />
    <Path
      fill={props.color}
      d="M16.89 21.751c-2.41 0-4.36-1.96-4.36-4.36s1.96-4.36 4.36-4.36 4.36 1.96 4.36 4.36-1.96 4.36-4.36 4.36m0-7.23c-1.58 0-2.86 1.29-2.86 2.86s1.28 2.86 2.86 2.86a2.86 2.86 0 1 0 0-5.72M6.94 19.921c-2.31 0-4.19-1.88-4.19-4.19s1.88-4.19 4.19-4.19 4.19 1.88 4.19 4.19-1.88 4.19-4.19 4.19m0-6.87c-1.48 0-2.69 1.21-2.69 2.69s1.21 2.69 2.69 2.69 2.69-1.21 2.69-2.69-1.21-2.69-2.69-2.69M9.86 6.841q-.66 0-1.26-.21c-1.79-.61-2.53-2.37-2.56-2.44a.75.75 0 0 1 .25-.89c.08-.06 1.99-1.45 4.01-.94 1.19.3 2.13 1.18 2.8 2.61.16.35.03.77-.3.96-1.04.6-2.02.91-2.93.91zm-2.1-2.66c.27.37.71.83 1.34 1.04.66.22 1.43.14 2.29-.25-.41-.62-.9-1.01-1.46-1.15-.8-.2-1.64.09-2.17.36"
    />
  </Svg>
);
export default IconlystBerriesOutline;
