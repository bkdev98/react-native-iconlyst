import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTruckTimeClockBulk = ({
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
      d="M18.921 17.443h-.173a2.63 2.63 0 0 0-1.798-1.796v-5.481l2.343 1.035c.582.252.957.829.957 1.472h-1.652a.75.75 0 0 0 0 1.5h1.652v1.94c0 .733-.596 1.33-1.329 1.33m-3.851 1.054c-.03-.1-.04-.2-.04-.299 0-.36.16-.681.42-.89.2-.17.46-.271.75-.271s.55.101.75.281c.25.209.41.53.41.88 0 .64-.52 1.17-1.16 1.17-.54 0-1-.371-1.13-.871m-9.18-.28v-.019c0-.64.52-1.161 1.16-1.161.648 0 1.166.518 1.169 1.155v.001l.001.006c0 .029 0 .059-.01.088a1.16 1.16 0 0 1-1.16 1.081c-.63 0-1.15-.52-1.16-1.151m14.004-8.39L16.95 8.526v-.529c0-1.56-1.27-2.83-2.83-2.83h-.785c-.223 0-.37.236-.293.445.25.673.358 1.416.358 2.125 0 3.51-2.85 6.361-6.36 6.361-1.21 0-2.33-.331-3.29-.92-.26-.151-.51-.33-.75-.52a7 7 0 0 1-.195-.173c-.204-.187-.555-.05-.555.226v3.407c0 1.349.96 2.49 2.23 2.76a2.67 2.67 0 0 0 2.57 1.99c1.21 0 2.23-.81 2.56-1.92l.001-.005h4.028l.001.005a2.68 2.68 0 0 0 2.56 1.92c1.21 0 2.23-.81 2.55-1.92l.001-.005h.17c1.56 0 2.829-1.27 2.829-2.83v-3.44c0-1.242-.73-2.359-1.856-2.846"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.04 12.353a4.615 4.615 0 0 0 4.61-4.61 4.615 4.615 0 0 0-4.61-4.61 4.615 4.615 0 0 0-4.61 4.61 4.615 4.615 0 0 0 4.61 4.61"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M7.018 5.693a.75.75 0 0 0-.75.75v1.57a.75.75 0 0 0 .365.643l1.22.73a.752.752 0 0 0 .77-1.287l-.855-.51V6.442a.75.75 0 0 0-.75-.75"
    />
  </Svg>
);
export default IconlystTruckTimeClockBulk;
