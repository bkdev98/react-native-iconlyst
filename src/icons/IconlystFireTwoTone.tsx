import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFireTwoTone = ({
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
      d="M19.157 7.052s-.035-.964-1.369-1.977M4.909 5.935s.036-.983 1.396-2.016M8.936 15.94c.065.885 1.164 1.68 1.987.777.955-1.414-.592-2.745.836-4.982.692 2.406 3.654 2.278 2.17 5.563.899.142 1.484-.228 1.484-.228"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.293 10.284c.06-3.02-3.505-2.03-2.323-7.284-3.47 1.363-2.413 4.118-3.58 6.602-.454.093-1.418-.82-1.172-2.212-1.61 1.533-1.435 3.631-.87 5.952-1.866-.404-2.283-2.138-2.283-2.138-1.872 5.46 2.457 9.634 6.255 9.79 5.261.215 10.145-4.946 7.6-9.79 0 0-.985 2.346-2.244 2.226 0 0 1.04-3.315-.049-4.833 0 0-.776 1.638-1.334 1.687"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFireTwoTone;
