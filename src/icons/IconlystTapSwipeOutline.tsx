import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTapSwipeOutline = ({
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
      d="M14.474 3.835a.904.904 0 0 0-1.104.645l-2.475 9.435a1.384 1.384 0 0 1-2.311.633l-.996-.985a1.18 1.18 0 0 0-1.879.299 1.09 1.09 0 0 0 .092 1.174c.768.984 2.048 2.516 3.34 3.608.932.79 2.316 1.37 3.752 1.587 1.443.219 2.821.053 3.778-.506.861-.503 1.714-1.436 2.32-2.58.605-1.143.926-2.425.811-3.594-.097-.987-.732-1.667-1.756-2.23-.773-.426-1.647-.724-2.518-1.022q-.483-.164-.958-.335a.75.75 0 0 1-.47-.883l1.022-4.156a.904.904 0 0 0-.648-1.09m-2.555.264a2.404 2.404 0 0 1 4.66 1.184l-.86 3.495.185.063c.902.308 1.967.67 2.866 1.166 1.224.674 2.358 1.702 2.525 3.396.15 1.53-.27 3.106-.978 4.443-.706 1.334-1.736 2.5-2.89 3.174-1.353.791-3.113.943-4.759.694-1.653-.25-3.311-.922-4.496-1.924-1.414-1.196-2.77-2.827-3.553-3.83a2.59 2.59 0 0 1-.244-2.785 2.68 2.68 0 0 1 4.269-.678l.852.843zM9.289 6.076c-2.702-.157-4.084 1.699-4.63 2.655a.75.75 0 1 1-1.302-.744c.635-1.112 2.442-3.616 6.019-3.408a.75.75 0 0 1-.087 1.497"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.314 8.94c-.38-.29-.759-.248-.961-.161a.75.75 0 0 1-.592-1.378c.617-.265 1.585-.324 2.465.349a.75.75 0 0 1-.912 1.19"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTapSwipeOutline;
