import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTapRotateOutline = ({
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
      d="M14.475 3.836a.904.904 0 0 0-1.104.645l-2.475 9.436a1.384 1.384 0 0 1-2.312.632l-.995-.985a1.18 1.18 0 0 0-1.88.299 1.09 1.09 0 0 0 .093 1.175c.768.984 2.047 2.515 3.339 3.608.933.788 2.316 1.37 3.753 1.587 1.443.218 2.82.053 3.777-.506.862-.504 1.715-1.437 2.321-2.582.605-1.142.926-2.424.81-3.593-.097-.987-.731-1.666-1.755-2.23-.773-.426-1.647-.724-2.519-1.022-.32-.11-.642-.219-.957-.334a.75.75 0 0 1-.47-.884l1.022-4.155a.904.904 0 0 0-.648-1.09m-2.555.265a2.404 2.404 0 0 1 4.66 1.184l-.86 3.494.184.063c.903.308 1.968.671 2.866 1.166 1.225.674 2.358 1.703 2.526 3.397.15 1.529-.27 3.106-.978 4.442-.706 1.334-1.736 2.5-2.89 3.175-1.353.79-3.113.943-4.759.694-1.653-.25-3.311-.923-4.497-1.925-1.413-1.195-2.77-2.827-3.553-3.83a2.59 2.59 0 0 1-.243-2.784 2.68 2.68 0 0 1 4.268-.679l.852.843z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.985 3.486a.75.75 0 0 1 .983-.4l1.96.829a.75.75 0 0 1 .4.983l-.826 1.949A.75.75 0 1 1 8.12 6.26l.532-1.257-1.269-.536a.75.75 0 0 1-.399-.982M2.955 7.263a.75.75 0 0 1 .926.517l.374 1.318 1.316-.38a.75.75 0 1 1 .417 1.44l-2.04.59a.75.75 0 0 1-.93-.516l-.58-2.043a.75.75 0 0 1 .517-.926"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.35 4.382a.75.75 0 0 1-.503.934c-3.02.906-4.745 2.975-5.383 4.954a.75.75 0 0 1-1.428-.46c.787-2.44 2.878-4.88 6.38-5.93a.75.75 0 0 1 .933.502"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTapRotateOutline;
