import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystProcreateCircleOutline = ({
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
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m16.983 7.896-.74.127zV7.9l.001.006.003.016a3 3 0 0 1 .03.238c.015.154.03.37.032.63a6.5 6.5 0 0 1-.284 1.957c-.235.74-.657 1.525-1.401 2.16-.748.637-1.77 1.08-3.131 1.211l-.033.002c-1.5.08-2.448.65-3.02 1.174-.29.265-.49.524-.613.712a3 3 0 0 0-.155.266l-.004.007a.75.75 0 0 1-1.43-.216l.745-.09-.745.09v-.009l-.002-.017a3 3 0 0 1-.017-.236 6.576 6.576 0 0 1 .4-2.568 5.2 5.2 0 0 1 1.504-2.163c.769-.649 1.805-1.131 3.178-1.327l.014-.002c1.505-.185 2.383-.733 2.876-1.19a3 3 0 0 0 .504-.598 2 2 0 0 0 .11-.203.75.75 0 0 1 1.438.147m-8.515 7.988v.002zm.32-2.19a3.66 3.66 0 0 1 1.043-1.479c.528-.445 1.292-.826 2.414-.987 1.403-.173 2.42-.622 3.145-1.127a4 4 0 0 1-.055.191c-.17.538-.461 1.06-.945 1.472-.477.408-1.192.75-2.286.858-1.446.08-2.53.533-3.316 1.072m6.717-5.543v-.002z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystProcreateCircleOutline;
