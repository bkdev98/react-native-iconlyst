import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDisallowBold = ({
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
      d="M11.886 10.315a.2.2 0 0 0 .059-.142V3.716c0-.19-.04-.39-.11-.56-.07-.18-.18-.34-.33-.49-.14-.14-.31-.25-.48-.32a1.5 1.5 0 0 0-1.14 0c-.18.07-.34.18-.49.32a1.51 1.51 0 0 0-.43 1.05v7.16c0 .24-.19.43-.43.43-.22 0-.42-.2-.42-.43v-4.17c0-.8-.7-1.5-1.49-1.5-.8 0-1.5.69-1.5 1.48v7.89q.014.944.257 1.835c.04.144.22.189.325.083zM15.775 5.426c0-.4-.16-.78-.43-1.06-.57-.57-1.53-.57-2.12 0-.28.29-.43.67-.43 1.06v3.497a.2.2 0 0 0 .341.142l2.522-2.522a.4.4 0 0 0 .117-.283zM20.165 6.277c.29-.29.29-.76 0-1.06a.754.754 0 0 0-1.06 0l-15.27 15.27c-.29.3-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l1.997-1.997c.086-.087.229-.077.312.013l.071.074a7.22 7.22 0 0 0 5.09 2.1c1.91 0 3.72-.75 5.1-2.1a7.2 7.2 0 0 0 2.14-5.08v-4.01c0-.26-.1-.5-.28-.68a.94.94 0 0 0-.68-.29c-1.11 0-2.01.9-2.01 2.01v.07l-.01 2.03c0 .24-.19.42-.42.42-.24 0-.43-.18-.43-.42v-2.938a.2.2 0 0 1 .059-.141z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDisallowBold;
