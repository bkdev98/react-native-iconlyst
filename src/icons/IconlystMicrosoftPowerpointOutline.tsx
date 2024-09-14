import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrosoftPowerpointOutline = ({
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
      d="M5.573 6.616a8.986 8.986 0 0 1 16.176 5.388v.086c-.044 4.92-4.062 8.89-8.988 8.89a8.97 8.97 0 0 1-7.385-3.862.75.75 0 0 1 1.232-.856 7.47 7.47 0 0 0 6.153 3.219c4.105 0 7.45-3.31 7.488-7.401v-.076a7.486 7.486 0 0 0-13.475-4.49.75.75 0 1 1-1.201-.898"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.873 12.086a.75.75 0 0 1 .75-.75h8.378a.75.75 0 0 1 0 1.5h-8.378a.75.75 0 0 1-.75-.75M12.625 3.016a.75.75 0 0 1 .75.75V9.49a.75.75 0 0 1-1.5 0V3.766a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.14 7.304c.6-.642 1.445-.992 2.417-.992h4.51c.973 0 1.819.35 2.418.993.593.637.888 1.503.888 2.445v4.249c0 .942-.295 1.807-.888 2.445-.6.643-1.446.992-2.42.992H5.558c-.974 0-1.82-.349-2.419-.992-.593-.638-.888-1.503-.888-2.445v-4.25c0-.942.297-1.808.89-2.445m1.098 1.023c-.292.313-.488.791-.488 1.423v4.249c0 .632.195 1.11.486 1.422.286.307.718.515 1.32.515h4.51c.603 0 1.035-.208 1.32-.515.292-.312.487-.79.487-1.422v-4.25c0-.631-.195-1.11-.486-1.422-.286-.307-.718-.514-1.32-.514h-4.51c-.6 0-1.033.207-1.32.514"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.854 9.816a.75.75 0 0 1 .75-.75h1.522a2.092 2.092 0 1 1 0 4.186h-.772v.933a.75.75 0 0 1-1.5 0zm1.5 1.936h.772a.592.592 0 1 0 0-1.186h-.772z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMicrosoftPowerpointOutline;
