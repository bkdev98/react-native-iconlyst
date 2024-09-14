import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStethoscopeBulk = ({
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
      d="M13.487 5.197a27 27 0 0 1-.285-.646 12 12 0 0 0-.5-1.043l-.049-.09a.998.998 0 1 0-1.771.927l.047.092c.144.272.287.543.425.88q.15.354.31.702c.241.534.47 1.04.595 1.54.29 1.182.01 2.452-.77 3.487-.794 1.052-2.004 1.71-3.237 1.755a1 1 0 0 0-.1.01c-1.23-.04-2.438-.683-3.242-1.728-.802-1.04-1.092-2.325-.798-3.528.115-.476.328-.956.554-1.462.117-.262.233-.525.337-.784.12-.29.25-.533.373-.764l.123-.233a1 1 0 0 0-.425-1.348 1 1 0 0 0-1.349.424l-.113.214a10 10 0 0 0-.464.958 21 21 0 0 1-.309.72c-.252.566-.513 1.152-.669 1.803-.44 1.791-.019 3.693 1.154 5.22 1.182 1.536 2.99 2.473 4.856 2.508.047 0 .126 0 .226-.014 1.825-.094 3.527-1.019 4.68-2.547 1.142-1.516 1.55-3.4 1.114-5.174-.172-.679-.447-1.289-.713-1.879M18.73 13.701c-.7 0-1.27-.57-1.27-1.27a1.271 1.271 0 0 1 2.54 0c0 .7-.57 1.27-1.27 1.27m0-4.54a3.274 3.274 0 0 0-3.27 3.27 3.274 3.274 0 0 0 3.27 3.27 3.274 3.274 0 0 0 3.27-3.27 3.274 3.274 0 0 0-3.27-3.27"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.508 21.152a6.23 6.23 0 0 1-6.222-6.221V13.8a1 1 0 0 1 2 0v1.13a4.227 4.227 0 0 0 4.222 4.22 4.227 4.227 0 0 0 4.222-4.22v-.22a1 1 0 1 1 2 0v.22a6.23 6.23 0 0 1-6.222 6.22"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystStethoscopeBulk;
