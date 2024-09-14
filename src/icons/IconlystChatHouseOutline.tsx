import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatHouseOutline = ({
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
      d="M2.8 7.325a4.696 4.696 0 0 1 4.69-4.702h10.122a4.695 4.695 0 0 1 4.689 4.702v6.94a4.696 4.696 0 0 1-4.689 4.702h-1.068c-.373 0-.73.148-.995.413l-1.422 1.426a2.224 2.224 0 0 1-3.152 0L9.553 19.38a1.4 1.4 0 0 0-.994-.413H7.49a4.696 4.696 0 0 1-4.69-4.703zm4.69-3.202A3.196 3.196 0 0 0 4.3 7.325v6.94a3.197 3.197 0 0 0 3.19 3.202H8.56c.771 0 1.511.307 2.057.854l1.421 1.427a.723.723 0 0 0 1.027 0l1.423-1.427a2.9 2.9 0 0 1 2.057-.854h1.068a3.196 3.196 0 0 0 3.189-3.203V7.325a3.195 3.195 0 0 0-3.189-3.202z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.28 6.912a2.05 2.05 0 0 1 2.545 0l4.119 3.272a.75.75 0 1 1-.933 1.175l-4.118-3.271a.55.55 0 0 0-.681 0l-4.119 3.27a.75.75 0 0 1-.933-1.174z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.125 8.89a.75.75 0 0 1 .75.75v3.974a.75.75 0 0 1-1.5 0V9.641a.75.75 0 0 1 .75-.75m6.85 0a.75.75 0 0 1 .75.75v3.974a.75.75 0 0 1-1.5 0V9.641a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChatHouseOutline;
