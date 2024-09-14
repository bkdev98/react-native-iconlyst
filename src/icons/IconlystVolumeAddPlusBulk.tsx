import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeAddPlusBulk = ({
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
      d="M12.041 20.145c-.576 0-1.15-.166-1.676-.494l-3.064-1.916c-.258-.16-.649-.264-.996-.264-.379-.027-.67-.038-.924-.048l-.026-.001c-.91-.033-1.512-.055-2.309-.714-1.04-.87-1.035-2.832-1.03-4.412v-.594c-.006-1.577-.012-3.54 1.027-4.41.795-.66 1.399-.682 2.312-.715h.003c.26-.01.554-.02.904-.045.388-.018.772-.1 1.038-.268l3.065-1.915c.971-.606 2.107-.656 3.116-.137 1.073.553 1.786 1.665 1.862 2.904.236 3.239.236 6.53 0 9.775a3.47 3.47 0 0 1-1.84 2.888c-.47.244-.967.366-1.462.366"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M19.37 14.259a.75.75 0 0 0 1.5 0v-1.512h1.505a.75.75 0 0 0 0-1.5H20.87v-1.51a.75.75 0 0 0-1.5 0v1.51h-1.506a.75.75 0 0 0 0 1.5h1.506z"
    />
  </Svg>
);
export default IconlystVolumeAddPlusBulk;
