import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTruckCheckComplete2Bulk = ({
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
      d="M18.919 17.438h-.169a2.64 2.64 0 0 0-1.808-1.796v-5.484l2.349 1.038c.581.252.957.83.957 1.472h-1.652a.75.75 0 0 0 0 1.5h1.652v1.94c0 .733-.597 1.33-1.329 1.33m-13.037.774v-.019a1.17 1.17 0 0 1 2.34-.06v.01c-.01.02-.01.03-.01.05s0 .03.01.05v.01c0 .01 0 .01-.01.02v.01a1.167 1.167 0 0 1-1.16 1.08c-.63 0-1.16-.52-1.17-1.15m9.19.28a1.151 1.151 0 0 1 .37-1.179c.2-.18.46-.28.75-.28s.55.1.75.27c.258.208.417.524.419.881l-.001.004.002.007a1.17 1.17 0 0 1-1.17 1.168c-.54 0-.99-.37-1.12-.87m4.82-8.67-2.95-1.304v-.526c0-1.56-1.27-2.83-2.83-2.83h-.793c-.219 0-.363.226-.289.431q.058.157.102.32c.08.25.14.5.17.75.07.35.1.71.1 1.07 0 3.51-2.86 6.36-6.36 6.36-1.2 0-2.33-.33-3.29-.92-.27-.15-.51-.33-.75-.52a7 7 0 0 1-.195-.173c-.204-.187-.555-.05-.555.226v3.407c0 1.35.95 2.48 2.22 2.76.31 1.14 1.34 1.99 2.58 1.99 1.21 0 2.23-.81 2.56-1.92h4.03a2.655 2.655 0 0 0 2.55 1.92c1.21 0 2.23-.81 2.56-1.92l.001-.005h.166c1.56 0 2.829-1.27 2.829-2.83v-3.44c0-1.24-.73-2.359-1.856-2.846"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.879 3.137a4.614 4.614 0 0 0-4.608 4.61 4.61 4.61 0 0 0 4.608 4.6 4.61 4.61 0 0 0 4.607-4.6 4.614 4.614 0 0 0-4.607-4.61"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m4.767 7.804 1.26 1.26L8.99 6.101"
    />
  </Svg>
);
export default IconlystTruckCheckComplete2Bulk;
