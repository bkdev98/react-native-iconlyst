import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserInformationBroken = ({
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
      d="M14.214 5.394h2.684c2.547 0 4.15 1.804 4.15 4.36v6.893c0 2.548-1.594 4.353-4.15 4.353h-5.42M10.59 5.395H7.896c-2.556 0-4.142 1.804-4.142 4.36v6.893c0 2.548 1.586 4.353 4.15 4.353M15.147 10.646h2.656m-2.656 3.246 2.656.043m-1.66 3.29h1.66"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.106 17.444c0-.9.71-2.021 2.757-2.021s2.757 1.113 2.757 2.013M11.624 11.714a1.76 1.76 0 1 1-1.76-1.76"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.805 7.571-1.241.624c-.1.05-.218.05-.32 0l-1.249-.624a.71.71 0 0 1-.392-.634V4.002c0-.553.449-1.002 1.003-1.002h1.587c.554 0 1.003.449 1.003 1.002v2.936a.71.71 0 0 1-.39.633"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserInformationBroken;
