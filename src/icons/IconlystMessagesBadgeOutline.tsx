import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesBadgeOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.413 5.322a1.482 1.482 0 1 0 0 2.964 1.482 1.482 0 0 0 0-2.964M16.43 6.804a2.982 2.982 0 1 1 5.963 0 2.982 2.982 0 0 1-5.963 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.21 4.548a8.25 8.25 0 0 0-7.587 2.228 8.26 8.26 0 0 0-1.638 9.346l.01.028c.184.453.396.98.396 1.526 0 .379-.09.747-.183 1.056-.047.158-.1.313-.148.455l-.013.037c-.045.132-.085.251-.122.367-.082.264-.117.438-.117.556 0 .053.008.076.01.082v.001q0 .002.008.011.01.01.011.008c.007.003.03.01.082.01.119 0 .292-.035.555-.117q.175-.057.374-.126l.028-.01c.142-.048.297-.101.454-.149.307-.094.673-.185 1.05-.188h.005c.54 0 1.072.216 1.518.396l.076.033a8.26 8.26 0 0 0 9.313-1.654 8.23 8.23 0 0 0 2.416-5.85.75.75 0 1 1 1.5-.003 9.73 9.73 0 0 1-2.855 6.914c-2.977 2.975-7.382 3.62-10.987 1.962-.517-.21-.773-.297-.979-.298-.156.002-.356.042-.619.123q-.192.059-.404.133l-.032.011c-.13.045-.27.093-.408.137-.29.09-.645.186-1.004.186-.385 0-.808-.11-1.154-.457-.347-.347-.458-.77-.458-1.154 0-.359.095-.714.186-1.004.042-.136.089-.273.133-.401l.013-.04q.074-.212.132-.404c.08-.264.12-.465.12-.623 0-.209-.085-.461-.292-.976-1.658-3.604-1.013-8.01 1.963-10.985a9.75 9.75 0 0 1 8.964-2.633.75.75 0 0 1-.316 1.466"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.274 12.495a1.034 1.034 0 1 1 2.07 0 1.034 1.034 0 0 1-2.07 0M8.571 12.495a1.034 1.034 0 1 1 2.07 0 1.034 1.034 0 0 1-2.07 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessagesBadgeOutline;
