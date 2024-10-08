import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarKeyProtectionOutline = ({
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
      d="M18.922 15.994a.75.75 0 0 1 0 1.06l-.01.01a.75.75 0 0 1-1.06-1.061l.01-.01a.75.75 0 0 1 1.06.001"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.054 15.01a1.87 1.87 0 0 0-1.868 1.869c0 .122.017.248.05.397a.75.75 0 0 1-.202.691l-2.037 2.036v.832h.707l.029-.03.065-.068.004-.004 1.38-1.357.537-.536a.75.75 0 0 1 .76-.183 1.872 1.872 0 0 0 2.443-1.778 1.87 1.87 0 0 0-1.868-1.868m-3.425 5.903.001-.001zm.057-4.034a3.368 3.368 0 1 1 2.795 3.32l-.245.244-1.38 1.357-.039.042-.038.04c-.036.04-.091.097-.155.154-.113.099-.368.3-.736.3h-1.323c-.59 0-1.068-.479-1.068-1.069v-1.443c0-.284.113-.555.313-.756l1.892-1.89a3 3 0 0 1-.016-.3M14.584 11.84a.75.75 0 0 1 .75-.75h1.613a.75.75 0 0 1 0 1.5h-1.613a.75.75 0 0 1-.75-.75M6.613 11.84a.75.75 0 0 1 .75-.75h1.613a.75.75 0 0 1 0 1.5H7.363a.75.75 0 0 1-.75-.75M3.342 7.976a.75.75 0 0 1 .848-.637c5.28.749 10.64.749 15.922 0a.75.75 0 1 1 .21 1.485 58.2 58.2 0 0 1-16.343 0 .75.75 0 0 1-.637-.848"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.38 3.13a24.3 24.3 0 0 1 7.567 0h.003a2.76 2.76 0 0 1 2.139 1.788l.94 2.612q.039.106.103.199l1.044 1.4c.524.716.807 1.58.808 2.467a.75.75 0 1 1-1.5.001c0-.567-.181-1.12-.516-1.578l-1.045-1.402-.01-.015a2.4 2.4 0 0 1-.294-.561V8.04l-.945-2.622a1.26 1.26 0 0 0-.962-.807c-2.35-.37-4.745-.37-7.095 0a1.26 1.26 0 0 0-.956.806l-.002.007-.946 2.627a2.3 2.3 0 0 1-.298.545l-1.06 1.46a2.64 2.64 0 0 0-.503 1.556v.004l-.015 4.672c0 .082.066.148.147.148h1.779a.15.15 0 0 0 .147-.147v-.368c0-.91.738-1.648 1.648-1.648h4.42a.75.75 0 1 1 0 1.5h-4.42a.15.15 0 0 0-.148.148v.368c0 .91-.737 1.647-1.647 1.647H4.984c-.911 0-1.65-.74-1.647-1.653l.015-4.668v-.002a4.14 4.14 0 0 1 .788-2.437l1.07-1.473a.8.8 0 0 0 .098-.178l.938-2.607A2.76 2.76 0 0 1 8.373 3.13z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCarKeyProtectionOutline;
