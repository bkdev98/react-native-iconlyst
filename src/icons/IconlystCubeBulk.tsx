import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCubeBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M8.447 14.322a.3.3 0 0 0 .3.3h6.274a.3.3 0 0 0 .3-.3V9.638a.3.3 0 0 0-.3-.3H8.747a.3.3 0 0 0-.3.3zM6.947 9.638a.3.3 0 0 0-.3-.3H2.8a.3.3 0 0 0-.3.3v9.452c0 .246.038.482.105.705.063.209.328.24.466.071l3.764-4.62a.5.5 0 0 0 .112-.316zM15.321 16.422a.3.3 0 0 0-.3-.3H8.293a.5.5 0 0 0-.388.184l-3.858 4.735c-.118.145-.076.362.097.43.282.114.588.179.91.179h9.681a3 3 0 0 0 .335-.02.29.29 0 0 0 .251-.291z" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.364 4.41c-.069-.196-.32-.228-.459-.074L16.92 8.757a.37.37 0 0 0-.098.261v5.304a.3.3 0 0 0 .3.3h4.08a.3.3 0 0 0 .3-.3V5.21c0-.281-.05-.549-.137-.8M8.448 3.448v4.09a.3.3 0 0 0 .3.3h6.77a.5.5 0 0 0 .371-.165c.573-.638 2.68-2.984 3.985-4.432.13-.145.09-.374-.094-.441a2.4 2.4 0 0 0-.834-.15H9.265a3.2 3.2 0 0 0-.589.058.286.286 0 0 0-.23.286zM17.122 16.122a.3.3 0 0 0-.3.3v3.982c0 .23.264.363.425.2l3.215-3.203c.26-.264.47-.563.633-.884.095-.186-.05-.395-.259-.395zM6.648 7.838a.3.3 0 0 0 .3-.3V3.781c0-.1-.126-.163-.196-.093l-3.21 3.218a3.2 3.2 0 0 0-.414.51c-.123.187.021.422.244.422z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCubeBulk;
