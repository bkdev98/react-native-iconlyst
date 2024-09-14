import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCubeBold = ({
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
      fillRule="evenodd"
      d="M8.447 4.169v4.09a.3.3 0 0 0 .3.3h6.771a.5.5 0 0 0 .37-.165c.573-.638 2.68-2.984 3.985-4.432.131-.145.09-.374-.094-.441a2.4 2.4 0 0 0-.834-.15h-9.68a3.2 3.2 0 0 0-.589.058.286.286 0 0 0-.23.286zM21.363 5.131c-.068-.197-.319-.228-.458-.074l-3.986 4.421a.37.37 0 0 0-.098.261v5.304a.3.3 0 0 0 .3.3H21.2a.3.3 0 0 0 .3-.3V5.931c0-.281-.05-.549-.137-.8M6.947 10.359a.3.3 0 0 0-.3-.3H2.8a.3.3 0 0 0-.3.3v9.452c0 .246.038.482.105.705.063.209.328.24.465.07l3.765-4.62a.5.5 0 0 0 .112-.315zM8.447 15.043a.3.3 0 0 0 .3.3h6.274a.3.3 0 0 0 .3-.3v-4.684a.3.3 0 0 0-.3-.3H8.747a.3.3 0 0 0-.3.3zM6.647 8.559a.3.3 0 0 0 .3-.3V4.502c0-.1-.126-.163-.196-.093L3.542 7.627a3.2 3.2 0 0 0-.414.51c-.123.187.02.422.244.422zM17.121 16.843a.3.3 0 0 0-.3.3v3.982c0 .23.264.363.426.2l3.214-3.203c.261-.264.471-.563.634-.884.094-.186-.05-.395-.259-.395zM15.321 17.143a.3.3 0 0 0-.3-.3H8.293a.5.5 0 0 0-.388.184l-3.858 4.735c-.118.145-.077.362.097.43.282.114.588.179.91.179h9.681q.169-.001.335-.02a.29.29 0 0 0 .251-.291z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCubeBold;
