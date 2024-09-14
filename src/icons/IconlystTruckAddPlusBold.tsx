import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTruckAddPlusBold = ({
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
      d="M18.92 17.438h-.17a2.65 2.65 0 0 0-1.808-1.796v-5.485l2.35 1.04c.58.251.956.828.956 1.471h-1.652a.75.75 0 0 0 0 1.5h1.652v1.94c0 .733-.597 1.33-1.329 1.33m-3.849 1.054a1.151 1.151 0 0 1 .37-1.179c.2-.18.46-.28.75-.28s.55.1.75.27c.26.21.42.53.42.89 0 .64-.52 1.17-1.17 1.17-.54 0-.99-.37-1.12-.87m-9.19-.28v-.019a1.169 1.169 0 0 1 2.337-.012v.007l.002.013c0 .027 0 .054-.009.081a1.167 1.167 0 0 1-1.16 1.081c-.63 0-1.16-.52-1.17-1.15m14.011-8.39-2.95-1.304v-.526c0-1.56-1.27-2.83-2.83-2.83h-.794c-.218 0-.365.227-.292.433q.055.156.106.317c.08.25.14.5.17.75.07.35.1.711.1 1.07 0 3.51-2.86 6.361-6.36 6.361-1.21 0-2.33-.33-3.29-.92-.26-.15-.51-.33-.75-.52a7 7 0 0 1-.196-.173c-.203-.187-.555-.05-.555.226v3.407c0 1.35.95 2.48 2.22 2.76.31 1.14 1.34 1.99 2.58 1.99 1.21 0 2.23-.81 2.56-1.92l.001-.005h4.028q0 .001.002.005a2.655 2.655 0 0 0 2.55 1.92c1.21 0 2.23-.81 2.56-1.92v-.005h.168c1.56 0 2.828-1.27 2.828-2.83v-3.44c0-1.24-.73-2.359-1.856-2.846"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.322 8.497H7.63v.695a.75.75 0 0 1-1.5 0v-.695h-.694a.75.75 0 0 1 0-1.5h.694v-.694a.75.75 0 0 1 1.5 0v.694h.692a.75.75 0 0 1 0 1.5M6.88 3.137a4.615 4.615 0 0 0-4.61 4.61 4.608 4.608 0 0 0 9.215 0 4.613 4.613 0 0 0-4.605-4.61"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTruckAddPlusBold;
