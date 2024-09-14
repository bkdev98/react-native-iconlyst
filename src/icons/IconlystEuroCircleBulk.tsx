import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEuroCircleBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 2.563c-5.238 0-9.5 4.26-9.5 9.5 0 5.237 4.262 9.5 9.5 9.5s9.5-4.262 9.5-9.5c0-5.24-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M13.591 11.002a.75.75 0 0 0-.75-.75H10.69c.6-.707 1.49-1.127 2.428-1.07a.756.756 0 0 0 .777-.724.75.75 0 0 0-.724-.776c-1.686-.011-3.271.817-4.118 2.292-.051.09-.09.185-.134.278h-.313a.743.743 0 0 0-.078 1.484 4 4 0 0 0 0 .662.74.74 0 0 0-.672.734c0 .414.336.75.75.75h.318c.043.09.081.183.131.27a4.5 4.5 0 0 0 4.122 2.288.75.75 0 0 0 .717-.781c-.018-.414-.402-.752-.782-.717a3.01 3.01 0 0 1-2.416-1.06h2.145a.75.75 0 0 0 0-1.5h-2.796a2.8 2.8 0 0 1 0-.63h2.796a.75.75 0 0 0 .75-.75"
    />
  </Svg>
);
export default IconlystEuroCircleBulk;
