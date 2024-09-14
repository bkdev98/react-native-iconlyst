import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystToilet3Outline = ({
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
      fillRule="evenodd"
      d="M6.161 4.723c-.56.603-.905 1.49-.905 2.602v9.35c0 1.111.346 1.999.908 2.601.556.597 1.378.974 2.458.974h7.257c1.083 0 1.905-.377 2.46-.973.56-.603.906-1.49.906-2.602v-9.35c0-1.112-.345-2-.906-2.602-.555-.596-1.378-.973-2.461-.973H8.622c-1.084 0-1.906.377-2.46.973M5.063 3.701c.869-.933 2.104-1.451 3.559-1.451h7.256c1.454 0 2.69.518 3.559 1.451.863.927 1.308 2.202 1.308 3.624v9.35c0 1.422-.445 2.697-1.308 3.624-.869.933-2.104 1.451-3.558 1.451H8.622c-1.451 0-2.686-.519-3.556-1.45-.863-.927-1.31-2.202-1.31-3.625v-9.35c0-1.422.444-2.697 1.307-3.624"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.88 10.473a4.412 4.412 0 1 1 8.742 0l-.657 4.82a3.75 3.75 0 0 1-7.43 0m0 0-.656-4.82m4.371-3.507a2.912 2.912 0 0 0-2.885 3.305l.657 4.819a2.25 2.25 0 0 0 4.457 0l.657-4.82a2.912 2.912 0 0 0-2.886-3.304"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.102 9.6a1.15 1.15 0 1 1 2.3 0 1.15 1.15 0 0 1-2.3 0M6.504 9.062a.75.75 0 0 1 .75.75v3.834a.75.75 0 0 1-1.5 0V9.812a.75.75 0 0 1 .75-.75M17.988 9.062a.75.75 0 0 1 .75.75v3.834a.75.75 0 0 1-1.5 0V9.812a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystToilet3Outline;
