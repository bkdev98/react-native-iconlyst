import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystToilet1Outline = ({
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
      d="M6.16 4.723c-.56.603-.905 1.49-.905 2.602v9.35c0 1.111.346 1.999.908 2.601.556.597 1.378.974 2.458.974h7.257c1.083 0 1.905-.377 2.46-.973.56-.603.906-1.49.906-2.602v-9.35c0-1.112-.345-2-.906-2.602-.555-.596-1.378-.973-2.461-.973H8.621c-1.084 0-1.906.377-2.46.973M5.062 3.701c.869-.933 2.105-1.451 3.559-1.451h7.256c1.454 0 2.69.518 3.559 1.451.863.927 1.308 2.202 1.308 3.624v9.35c0 1.422-.445 2.697-1.308 3.624-.869.933-2.104 1.451-3.558 1.451H8.621c-1.451 0-2.686-.519-3.556-1.45-.863-.927-1.31-2.202-1.31-3.625v-9.35c0-1.422.444-2.697 1.307-3.624"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.611 9.487a4.639 4.639 0 1 1 9.278 0v5.026a4.64 4.64 0 0 1-9.278 0zm4.64-3.14a3.14 3.14 0 0 0-3.14 3.14v5.026a3.14 3.14 0 0 0 6.278 0V9.487a3.14 3.14 0 0 0-3.139-3.14"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.1 9.174a1.15 1.15 0 1 1 2.3.001 1.15 1.15 0 0 1-2.3-.001M3.756 14.998a.75.75 0 0 1 .75-.75h3.901a.75.75 0 1 1 0 1.5H4.506a.75.75 0 0 1-.75-.75m11.58 0a.75.75 0 0 1 .75-.75h3.909a.75.75 0 1 1 0 1.5h-3.91a.75.75 0 0 1-.75-.75M3.756 12a.75.75 0 0 1 .75-.75h3.85a.75.75 0 0 1 0 1.5h-3.85a.75.75 0 0 1-.75-.75m11.628 0a.75.75 0 0 1 .75-.75h3.86a.75.75 0 0 1 0 1.5h-3.86a.75.75 0 0 1-.75-.75M3.756 9.003a.75.75 0 0 1 .75-.75h3.867a.75.75 0 0 1 0 1.5H4.506a.75.75 0 0 1-.75-.75m11.612 0a.75.75 0 0 1 .75-.75h3.876a.75.75 0 0 1 0 1.5h-3.876a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystToilet1Outline;
