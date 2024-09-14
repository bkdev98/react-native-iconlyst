import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoCutTrimBulk = ({
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
      d="M16.46 21.164H7.54c-.17 0-.33-.01-.49-.02a5.9 5.9 0 0 1-1.5-.3c-1.6-.56-2.68-1.83-2.97-3.55-.05-.3-.08-.61-.08-.94v-8.7c0-.35.03-.68.08-.99.31-1.69 1.38-2.94 2.97-3.5.45-.16.95-.26 1.49-.3.16-.01.33-.02.5-.02h8.92c.17 0 .33.01.49.02q.81.06 1.5.3c1.58.56 2.66 1.81 2.97 3.5.05.31.08.64.08.99v8.7c0 .33-.03.64-.08.94-.29 1.72-1.37 2.99-2.97 3.55q-.69.24-1.5.3c-.16.01-.32.02-.49.02"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.04 2.856c-.54.04-1.04.14-1.49.3v3.5H2.58c-.05.31-.08.64-.08.99v.51h3.05v3.07H2.5v1.5h3.05v3.06H2.5v.56c0 .33.03.64.08.94h2.97v3.55q.69.24 1.5.3V2.896c0-.01 0-.03-.01-.04M16.95 21.136a5.9 5.9 0 0 0 1.5-.3v-3.55h2.97c.05-.3.08-.61.08-.94v-.56h-3.05v-3.06h3.05v-1.5h-3.05v-3.07h3.05v-.51c0-.35-.03-.68-.08-.99h-2.97v-3.5a5.9 5.9 0 0 0-1.5-.3z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M12.75 21.156h-1.5v-2.35c0-.42.34-.75.75-.75.42 0 .75.33.75.75zM12.75 2.836v2.36a.749.749 0 1 1-1.5 0v-2.36zM12.75 13.536v2.19c0 .42-.33.75-.75.75-.41 0-.75-.33-.75-.75v-2.19a.749.749 0 1 1 1.5 0M12.75 8.266v2.19c0 .42-.33.75-.75.75-.41 0-.75-.33-.75-.75v-2.19a.749.749 0 1 1 1.5 0"
    />
  </Svg>
);
export default IconlystVideoCutTrimBulk;
