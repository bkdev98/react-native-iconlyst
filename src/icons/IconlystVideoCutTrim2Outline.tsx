import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoCutTrim2Outline = ({
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
      d="M3.91 4.132c1.004-.936 2.39-1.421 3.943-1.421h8.462c1.552 0 2.938.485 3.944 1.421 1.01.942 1.575 2.283 1.575 3.867v8.003c0 1.583-.564 2.924-1.575 3.865-1.006.936-2.392 1.42-3.944 1.42H7.853c-1.553 0-2.94-.487-3.944-1.424-1.01-.942-1.575-2.282-1.575-3.861V7.999c0-1.584.564-2.925 1.575-3.867M4.93 5.23c-.674.628-1.097 1.555-1.097 2.769v8.003c0 1.207.423 2.135 1.098 2.764.68.635 1.68 1.022 2.92 1.022h8.463c1.243 0 2.241-.386 2.922-1.019.674-.627 1.097-1.555 1.097-2.767V7.999c0-1.214-.423-2.141-1.098-2.77-.68-.633-1.678-1.018-2.92-1.018H7.852c-1.243 0-2.241.385-2.922 1.019"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.338 15.598a.75.75 0 0 1 .75-.75h2.191a.75.75 0 1 1 0 1.5H3.088a.75.75 0 0 1-.75-.75m5.266 0a.75.75 0 0 1 .75-.75h2.191a.75.75 0 1 1 0 1.5h-2.19a.75.75 0 0 1-.75-.75m5.267 0a.75.75 0 0 1 .75-.75h2.191a.75.75 0 1 1 0 1.5h-2.191a.75.75 0 0 1-.75-.75m5.267 0a.75.75 0 0 1 .75-.75h2.19a.75.75 0 1 1 0 1.5h-2.19a.75.75 0 0 1-.75-.75M2.338 8.398a.75.75 0 0 1 .75-.75h2.191a.75.75 0 1 1 0 1.5H3.088a.75.75 0 0 1-.75-.75m5.266 0a.75.75 0 0 1 .75-.75h2.191a.75.75 0 1 1 0 1.5h-2.19a.75.75 0 0 1-.75-.75m5.267 0a.75.75 0 0 1 .75-.75h2.191a.75.75 0 0 1 0 1.5h-2.191a.75.75 0 0 1-.75-.75m5.267 0a.75.75 0 0 1 .75-.75h2.19a.75.75 0 0 1 0 1.5h-2.19a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVideoCutTrim2Outline;
