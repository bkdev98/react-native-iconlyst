import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseDownOutline = ({
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
      d="M14.02 17.66a.75.75 0 0 1 1.061 0l2.28 2.279 2.28-2.28a.75.75 0 0 1 1.06 1.06l-2.81 2.81a.75.75 0 0 1-1.06 0l-2.81-2.81a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.362 13.607a.75.75 0 0 1 .75.75V21a.75.75 0 1 1-1.5 0v-6.643a.75.75 0 0 1 .75-.75M4.328 5.314a.75.75 0 0 1 .75.75v5.977l.003.018c.006.033.02.097.057.183.07.166.23.438.603.734.758.6 2.455 1.338 6.165 1.338a.75.75 0 1 1 0 1.5c-3.868 0-5.96-.762-7.096-1.662-.574-.454-.888-.932-1.055-1.328a2.4 2.4 0 0 1-.15-.498 2 2 0 0 1-.026-.223v-.037000000000000005c0-.001 0-.002.75-.002h-.75v-6a.75.75 0 0 1 .75-.75M19.485 5.314a.75.75 0 0 1 .75.75v5a.75.75 0 1 1-1.5 0v-5a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.328 11.313a.75.75 0 0 1 .75.75v5.977l.003.018c.006.033.02.097.057.182.07.166.23.439.603.734.758.6 2.455 1.338 6.165 1.338a.75.75 0 1 1 0 1.5c-3.868 0-5.96-.762-7.096-1.662-.574-.454-.888-.931-1.055-1.328a2.4 2.4 0 0 1-.15-.497 2 2 0 0 1-.026-.223v-.038000000000000006l.75-.001h-.75v-6a.75.75 0 0 1 .75-.75M5.44 5.345c-.289.276-.362.494-.362.645s.073.37.362.646c.292.278.753.562 1.385.817 1.26.509 3.053.84 5.07.84 2.019 0 3.811-.331 5.071-.84.632-.255 1.093-.54 1.385-.817.29-.276.362-.495.362-.646s-.073-.37-.362-.645c-.292-.278-.753-.563-1.385-.818-1.26-.508-3.052-.84-5.07-.84s-3.81.332-5.07.84c-.633.255-1.094.54-1.386.818m.824-2.209c1.479-.596 3.47-.949 5.632-.949 2.16 0 4.152.353 5.631.95.738.297 1.384.67 1.859 1.122.476.455.827 1.04.827 1.731s-.35 1.277-.827 1.731c-.475.453-1.121.826-1.859 1.123-1.479.597-3.47.949-5.631.949s-4.153-.352-5.632-.949c-.737-.297-1.384-.67-1.859-1.123-.476-.454-.827-1.039-.827-1.73 0-.693.35-1.277.827-1.732.475-.452 1.122-.825 1.859-1.123"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDatabaseDownOutline;
