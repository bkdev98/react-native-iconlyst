import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSafeBoxBulk = ({
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
    <Circle cx={12} cy={12.313} r={9.5} fill={props.color} opacity={0.4} />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m5.84 5.116 1.3 1.3c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.39-.07-.53-.22l-1.3-1.3zM7.36 17.726c0 .19-.07.38-.22.53l-1.3 1.3c-.38-.32-.73-.67-1.05-1.06l1.29-1.3c.29-.29.76-.29 1.06 0 .14.15.22.34.22.53M5.12 12.336c0 .41-.33.75-.75.75H2.53a9.4 9.4 0 0 1 0-1.5h1.84c.42 0 .75.33.75.75M19.23 6.176l-1.31 1.3a.7.7 0 0 1-.53.22c-.19 0-.38-.07-.53-.22a.77.77 0 0 1-.22-.53c0-.19.08-.38.22-.53l1.3-1.3c.38.32.74.67 1.07 1.06M12.75 2.866v1.85c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.85a9.4 9.4 0 0 1 1.5 0M21.5 12.336q0 .375-.03.75h-1.84c-.42 0-.75-.34-.75-.75 0-.42.33-.75.75-.75h1.84q.03.375.03.75M19.22 18.496c-.33.39-.68.74-1.06 1.06l-1.3-1.3a.77.77 0 0 1-.22-.53c0-.19.08-.38.22-.53.3-.29.77-.29 1.06 0zM12.75 19.966v1.84a9.4 9.4 0 0 1-1.5 0v-1.84a.749.749 0 1 1 1.5 0M12 15.416c-1.69 0-3.08-1.39-3.08-3.08 0-1.7 1.39-3.08 3.08-3.08.55 0 1.05.16 1.49.41l-1.82 1.82c-.29.29-.29.76 0 1.06.15.14.34.22.53.22s.39-.08.53-.22l1.86-1.86c.31.48.49 1.04.49 1.65 0 1.69-1.38 3.08-3.08 3.08m0-7.66c-2.52 0-4.58 2.05-4.58 4.58 0 2.52 2.06 4.58 4.58 4.58a4.58 4.58 0 1 0 0-9.16"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSafeBoxBulk;
