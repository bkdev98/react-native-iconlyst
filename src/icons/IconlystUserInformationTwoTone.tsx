import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserInformationTwoTone = ({
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
      d="M14.461 5.395h2.695c2.556 0 4.142 1.804 4.142 4.36v6.893c0 2.548-1.586 4.353-4.151 4.353H8.154c-2.556 0-4.15-1.805-4.15-4.353V9.755c0-2.556 1.602-4.36 4.15-4.36h2.683"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.397 10.645h2.656m-2.657 3.246 2.657.043m-1.66 3.29h1.66M7.356 17.443c0-.9.71-2.021 2.757-2.021s2.757 1.113 2.757 2.013"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.874 11.714a1.76 1.76 0 1 1-3.522.001 1.76 1.76 0 0 1 3.522 0M14.056 7.571l-1.242.624c-.1.05-.218.05-.32 0l-1.248-.624a.71.71 0 0 1-.393-.634V4.002c0-.553.45-1.002 1.004-1.002h1.587c.553 0 1.003.449 1.003 1.002v2.936a.71.71 0 0 1-.391.633"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserInformationTwoTone;
