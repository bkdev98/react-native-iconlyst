import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEarthRptationOutline = ({
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
      d="M12.61 18.874c-3.45 0-6.25-2.8-6.25-6.25s2.8-6.25 6.25-6.25 6.25 2.8 6.25 6.25-2.8 6.25-6.25 6.25m0-11c-2.62 0-4.75 2.13-4.75 4.75s2.13 4.75 4.75 4.75 4.75-2.13 4.75-4.75-2.13-4.75-4.75-4.75"
    />
    <Path
      fill={props.color}
      d="M9.96 14.604c-.36 0-.73-.07-1.07-.21-.58-.23-.85-.68-1.03-.97-.05-.08-.12-.19-.15-.23 0 0-.11 0-.36.08-.4.13-.82-.09-.95-.48s.09-.82.48-.95c1.48-.48 1.98.34 2.26.78.14.23.21.33.33.38.4.17.92.09 1.12-.09.05-.04.06-.06.03-.14a.8.8 0 0 0-.11-.22l-.1-.12c-.1-.12-.22-.27-.31-.45a2.6 2.6 0 0 1-.24-.66c-.2-.9.36-1.65.63-2.01.14-.18.21-.29.24-.35-.02-.17-.17-.49-.3-.78-.06-.14-.13-.28-.19-.43a.745.745 0 1 1 1.37-.59q.09.21.18.39c.24.53.47 1.04.43 1.57-.02.29-.17.59-.53 1.08-.21.28-.41.58-.37.78.02.1.06.2.11.3.03.05.09.12.15.2a2.347 2.347 0 0 1 .48.84c.2.64.03 1.26-.46 1.7-.42.38-1.02.57-1.63.57zM13.89 18.684c-.24 0-.48-.12-.62-.33-.82-1.22-.14-2.25.32-2.93.53-.79.68-1.09.19-1.7-.71-.7-.95-1.77-.54-2.53.36-.66 1.1-.94 1.99-.74.54.12.96.39 1.34.63.55.35.83.51 1.25.37.4-.13.82.09.95.48s-.09.82-.48.94c-1.12.36-1.93-.15-2.52-.53-.3-.19-.58-.37-.85-.43-.23-.05-.34-.02-.35 0-.05.06-.04.44.33.81 1.26 1.56.44 2.8-.06 3.54s-.54.93-.32 1.26a.753.753 0 0 1-.62 1.17zM12.02 22.333h-.05a9.7 9.7 0 0 1-3.86-1.09.75.75 0 1 1 .69-1.33 8.3 8.3 0 0 0 3.27.92c.41.03.73.39.7.8-.03.4-.36.7-.75.7m3.5-.44a.75.75 0 0 1-.24-1.46c.92-.31 1.76-.77 2.52-1.37a.747.747 0 1 1 .93 1.17c-.9.71-1.9 1.25-2.98 1.62-.08.03-.16.04-.24.04zm-9.47-2.4c-.2 0-.4-.08-.55-.24a9.94 9.94 0 0 1-2.21-3.79c-.12-.4.1-.82.49-.94.4-.13.82.1.94.49.37 1.19 1.02 2.3 1.87 3.21.28.3.27.78-.03 1.06-.14.14-.33.2-.51.2zm14.45-1.68a.754.754 0 0 1-.65-1.12c.53-.92.87-1.91 1.02-2.95.06-.41.44-.7.85-.64s.7.44.64.85a9.7 9.7 0 0 1-1.2 3.49c-.14.24-.39.38-.65.38zm-16.89-4.73h-.02a.75.75 0 0 1-.73-.77c.04-1.54.42-3.01 1.14-4.36.19-.37.65-.5 1.01-.31.37.2.5.65.31 1.02a8.15 8.15 0 0 0-.97 3.69c-.01.41-.34.73-.75.73zm17.89-1.66a.74.74 0 0 1-.73-.59 8 8 0 0 0-1.52-3.3.749.749 0 1 1 1.19-.91 9.6 9.6 0 0 1 1.79 3.9c.09.41-.17.8-.58.89-.05.01-.1.02-.16.02zM6.59 6.583a.755.755 0 0 1-.51-1.31 9.9 9.9 0 0 1 4.14-2.22.75.75 0 0 1 .37 1.45c-1.3.33-2.51.98-3.51 1.88-.14.13-.32.19-.5.19zm10.93-.91c-.14 0-.28-.04-.4-.12-.92-.59-1.93-.98-3-1.17a.75.75 0 0 1-.61-.87.75.75 0 0 1 .87-.61c1.27.23 2.46.69 3.55 1.39a.756.756 0 0 1-.4 1.39z"
    />
  </Svg>
);
export default IconlystEarthRptationOutline;
