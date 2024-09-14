import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoSlidesOutline = ({
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
      d="M5.238 7.1A3.85 3.85 0 0 1 9.09 3.25h5.94A3.85 3.85 0 0 1 18.88 7.1v9.802a3.85 3.85 0 0 1-3.85 3.85H9.09a3.85 3.85 0 0 1-3.852-3.85zM9.09 4.75A2.35 2.35 0 0 0 6.74 7.1v9.802a2.35 2.35 0 0 0 2.35 2.35h5.94a2.35 2.35 0 0 0 2.351-2.35V7.1a2.35 2.35 0 0 0-2.35-2.351zM3.084 6.715a.75.75 0 0 1 .75.75v9.068a.75.75 0 0 1-1.5 0V7.465a.75.75 0 0 1 .75-.75M21.084 6.715a.75.75 0 0 1 .75.75v9.068a.75.75 0 0 1-1.5 0V7.465a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.16 10.6c-.098.873-.1 1.815 0 2.805.021.152.08.188.092.196.018.01.106.05.299-.026a6.9 6.9 0 0 0 2.002-1.257c.153-.141.178-.256.178-.32 0-.065-.029-.178-.176-.312l-.002-.002a6.7 6.7 0 0 0-2.01-1.26l-.005-.002c-.148-.062-.24-.037-.275-.018a.14.14 0 0 0-.054.05.35.35 0 0 0-.05.146m.956-1.562c-.503-.21-1.067-.216-1.55.038-.495.26-.817.746-.894 1.334l-.002.014a14.8 14.8 0 0 0 0 3.144l.001.016c.07.553.355 1.048.846 1.324.487.274 1.06.269 1.586.061l.006-.002a8.4 8.4 0 0 0 2.454-1.54l.004-.003c.414-.382.666-.884.664-1.434-.003-.548-.259-1.043-.666-1.414a8.2 8.2 0 0 0-2.45-1.538"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVideoSlidesOutline;
