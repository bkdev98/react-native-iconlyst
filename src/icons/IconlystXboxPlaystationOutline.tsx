import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystXboxPlaystationOutline = ({
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
      d="M6.075 19.053a4.5 4.5 0 0 1-1.564-.29c-2.084-.849-2.027-3.22-2.008-4 0-.039.1-7.444 3.439-9.19l.166-.077a4.67 4.67 0 0 1 4.674.147c1.239.74 1.55.864 2.923.008a4.67 4.67 0 0 1 4.705-.148l.107.05.042.02c3.339 1.745 3.44 9.151 3.438 9.224.019.744.079 3.115-1.984 3.955a3.83 3.83 0 0 1-3.676-.365 4.1 4.1 0 0 1-.84-.873c-.24-.355-.56-.65-.934-.86a7.27 7.27 0 0 0-4.62 0 2.74 2.74 0 0 0-.986.9c-.217.32-.485.604-.793.838-.607.44-1.34.673-2.09.661M8.338 6.434a3.65 3.65 0 0 0-1.6.422l-.148.067c-2.142 1.121-2.6 6.84-2.592 7.845-.046 1.906.537 2.387 1.05 2.6a2.25 2.25 0 0 0 2.217-.18 2.2 2.2 0 0 0 .478-.522 4.2 4.2 0 0 1 1.447-1.31 8.42 8.42 0 0 1 6.1-.005 4.2 4.2 0 0 1 1.388 1.253c.153.22.337.418.546.585a2.28 2.28 0 0 0 2.24.171c.49-.2 1.074-.68 1.027-2.556.007-1.034-.448-6.727-2.618-7.887l-.1-.045a3.21 3.21 0 0 0-3.283.057c-1.866 1.164-2.8 1.015-4.485.008a3.23 3.23 0 0 0-1.667-.503"
    />
    <Path
      fill={props.color}
      d="M8.25 13.342a.75.75 0 0 1-.75-.75v-.684h-.684a.75.75 0 0 1 0-1.5H7.5v-.685a.75.75 0 1 1 1.5 0v.685h.687a.75.75 0 1 1 0 1.5H9v.684a.75.75 0 0 1-.75.75M16.256 13.348a.746.746 0 0 1-.75-.745v-.01a.749.749 0 1 1 .75.755M16.256 10.479a.746.746 0 0 1-.75-.745v-.01a.75.75 0 1 1 .75.755M14.822 11.912a.746.746 0 0 1-.75-.745v-.01a.75.75 0 1 1 .75.755M17.691 11.912a.746.746 0 0 1-.75-.745v-.01a.75.75 0 1 1 .75.755"
    />
  </Svg>
);
export default IconlystXboxPlaystationOutline;