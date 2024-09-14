import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeMuteBulk = ({
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
      d="M14.192 19.746c.532.333 1.114.5 1.697.5a3.2 3.2 0 0 0 1.478-.37 3.5 3.5 0 0 0 1.858-2.92 68 68 0 0 0 0-9.906c-.074-1.25-.795-2.376-1.88-2.935-1.02-.527-2.17-.476-3.152.138l-3.104 1.94c-.272.17-.666.252-1.055.272-.32.024-.597.034-.84.043l-.075.003c-.927.033-1.54.055-2.343.724-1.051.878-1.045 2.865-1.04 4.461v.605c-.004 1.598-.01 3.586 1.042 4.465.806.665 1.415.688 2.336.721l.027.001c.257.01.552.021.935.05.354 0 .75.104 1.012.268z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystVolumeMuteBulk;
