import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatHappyOutline = ({
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
      d="M8.936 10.772a.75.75 0 0 1 .988.386 2.869 2.869 0 0 0 5.254 0 .75.75 0 0 1 1.374.602 4.369 4.369 0 0 1-8.003 0 .75.75 0 0 1 .387-.988"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChatHappyOutline;
