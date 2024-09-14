import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBackLineBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M12.509 9.764h1.533A3.96 3.96 0 0 1 18 13.722a3.963 3.963 0 0 1-3.958 3.959H5a1 1 0 1 0 0 2h9.042A5.965 5.965 0 0 0 20 13.72a5.965 5.965 0 0 0-5.958-5.957h-1.533z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12.509 11.568V5.975a1.001 1.001 0 0 0-1.594-.805L7.124 7.967q-.014.01-.021.024t-.02.025a1 1 0 0 0-.195.23q-.014.023-.032.044a.3.3 0 0 0-.038.06c-.06.129-.1.27-.1.422s.04.292.1.42q.016.034.04.063l.03.042a1 1 0 0 0 .195.23q.011.011.02.025.008.014.02.025l3.792 2.796a1 1 0 0 0 1.594-.805M6 6.713a1 1 0 1 0-2 0v4.663a1 1 0 1 0 2 0z"
    />
  </Svg>
);
export default IconlystBackLineBulk;
