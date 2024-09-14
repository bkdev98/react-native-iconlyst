import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPocketTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3.5 9.879 1.192-4.291a.844.844 0 0 1 .813-.618h13.99c.38 0 .712.253.813.618l1.192 4.29"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.385 4.977 3.033 4.578c.24.367.656.589 1.1.589h5.96c.444 0 .86-.222 1.102-.589l3.033-4.578"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.622 4.977 17.682 17.9a1.34 1.34 0 0 1-.426.791c-.241.213-.55.338-.888.338H8.437c-.328 0-.637-.125-.869-.329a1.36 1.36 0 0 1-.445-.82L5.375 4.977"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.568 18.701 5.245-5.824m4.443 5.815-6.53-8.548"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPocketTwoTone;
