import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingCartAiLight = ({
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
      d="m3 3.246 2.024.35.937 11.163c.075.911.837 1.611 1.751 1.609h10.614a1.75 1.75 0 0 0 1.737-1.505l.923-6.38a1.304 1.304 0 0 0-1.104-1.478c-.062-.01-1.698-.014-1.698-.014M7.289 20.245v.118m.479-.092a.482.482 0 1 1-.964 0 .482.482 0 0 1 .964 0M18.313 20.245v.118m.478-.092a.482.482 0 1 1-.963 0 .482.482 0 0 1 .963 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.044 9.807-.101-.273A3.76 3.76 0 0 0 8.72 7.309l-.273-.102.273-.1a3.76 3.76 0 0 0 2.222-2.226l.1-.273.102.273a3.76 3.76 0 0 0 2.221 2.225l.273.101-.273.102a3.76 3.76 0 0 0-2.221 2.225zM15.673 12.164a1.77 1.77 0 0 0-1.177-1.179 1.77 1.77 0 0 0 1.177-1.178 1.77 1.77 0 0 0 1.177 1.178 1.77 1.77 0 0 0-1.177 1.179"
    />
  </Svg>
);
export default IconlystShoppingCartAiLight;
