import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDislikeBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.998 3.974a5.7 5.7 0 0 0-2.18-.048c-.884.144-1.72.749-2.44 1.286-.71-.537-1.546-1.152-2.43-1.296a5.6 5.6 0 0 0-2.64.182C4.014 5.164 2.842 8.766 3.85 11.916c.393 1.2 1.085 2.304 1.93 3.274M8.219 17.544a24 24 0 0 0 4.158 2.622s4.094-1.915 6.71-5.05M19.954 5.809c1.316 1.623 1.642 3.966.96 6.107M6.842 18.917 21.5 4.26"
    />
  </Svg>
);
export default IconlystDislikeBroken;
