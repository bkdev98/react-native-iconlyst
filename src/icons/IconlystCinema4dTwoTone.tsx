import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCinema4dTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.594 5.902a4.758 4.758 0 1 0 5.345 5.657M20.61 9.375a9.02 9.02 0 0 0-6.255-6.062"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 21a9 9 0 0 0 9-9c0-.73-.104-2.77-.98-3.662-.205-.208-.603-.2-.866-.072-1.115.54-1.118 2.775-1.291 3.913-.72 4.718-2.791 6.991-7.129 6.399-4.46-.546-6.81-6.666-4.108-10.113 2.555-2.96 4.623-1.96 8.08-3.047 1.11-.349 1.194-1.619.067-1.979C13.538 3.044 13.21 3.06 12 3a9 9 0 0 0 0 18"
    />
  </Svg>
);
export default IconlystCinema4dTwoTone;
