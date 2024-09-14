import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystToilet2Outline = ({
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
      d="M7.457 10.32a4.754 4.754 0 0 1 4.71-5.395c2.881 0 5.1 2.541 4.711 5.396l-.718 5.27a4.03 4.03 0 0 1-7.985 0zm4.71-3.895a3.254 3.254 0 0 0-3.224 3.693l.718 5.27a2.53 2.53 0 0 0 5.013 0l.718-5.27a3.254 3.254 0 0 0-3.225-3.693"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.1 9.4a1.15 1.15 0 1 1 2.3 0 1.15 1.15 0 0 1-2.3 0M3.756 9.003a.75.75 0 0 1 .75-.75H6.44a.75.75 0 0 1 0 1.5H4.506a.75.75 0 0 1-.75-.75m0 2.997a.75.75 0 0 1 .75-.75H6.43a.75.75 0 1 1 0 1.5H4.506a.75.75 0 0 1-.75-.75m0 2.998a.75.75 0 0 1 .75-.75h1.95a.75.75 0 0 1 0 1.5h-1.95a.75.75 0 0 1-.75-.75M17.307 9.003a.75.75 0 0 1 .75-.75h1.938a.75.75 0 0 1 0 1.5h-1.938a.75.75 0 0 1-.75-.75M17.316 12a.75.75 0 0 1 .75-.75h1.93a.75.75 0 1 1 0 1.5h-1.93a.75.75 0 0 1-.75-.75m-.025 2.998a.75.75 0 0 1 .75-.75h1.955a.75.75 0 0 1 0 1.5H18.04a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystToilet2Outline;
