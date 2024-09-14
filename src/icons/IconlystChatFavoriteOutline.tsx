import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatFavoriteOutline = ({
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
      d="M2.8 7.542A4.696 4.696 0 0 1 7.49 2.84h10.122a4.695 4.695 0 0 1 4.689 4.702v6.94a4.696 4.696 0 0 1-4.689 4.702h-1.068c-.373 0-.73.148-.995.413l-1.422 1.426a2.223 2.223 0 0 1-3.152 0l-1.422-1.426a1.4 1.4 0 0 0-.994-.413H7.49a4.697 4.697 0 0 1-4.69-4.703zM7.49 4.34A3.196 3.196 0 0 0 4.3 7.542v6.94a3.197 3.197 0 0 0 3.19 3.202H8.56c.771 0 1.511.307 2.057.854l1.421 1.427a.723.723 0 0 0 1.027 0l1.423-1.427a2.9 2.9 0 0 1 2.057-.854h1.068a3.196 3.196 0 0 0 3.189-3.203v-6.94a3.195 3.195 0 0 0-3.189-3.201z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.73 8.861c-.82.266-1.23 1.208-.912 2.21.258.803.976 1.578 1.729 2.191a11 11 0 0 0 1.004.725l.044-.029c.257-.166.605-.406.97-.704.758-.618 1.473-1.392 1.72-2.18v-.003c.32-.998-.092-1.942-.913-2.21A1.53 1.53 0 0 0 13 9.096a.75.75 0 0 1-.9-.002 1.51 1.51 0 0 0-1.37-.232m1.822 6.001-.36.658h-.002l-.002-.002-.009-.005-.028-.016a9 9 0 0 1-.452-.274 12 12 0 0 1-1.1-.798c-.809-.66-1.814-1.665-2.21-2.897v-.002c-.49-1.538.045-3.499 1.881-4.092h.002a3 3 0 0 1 2.281.18 3.03 3.03 0 0 1 2.273-.182l.005.002c1.832.592 2.375 2.55 1.884 4.09-.384 1.225-1.393 2.232-2.201 2.892a12.4 12.4 0 0 1-1.559 1.08l-.029.016-.008.005-.003.001s-.001.001-.363-.656m0 0 .362.657a.75.75 0 0 1-.722.001z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChatFavoriteOutline;
