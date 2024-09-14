import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShiningStarOutline = ({
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
      fillRule="evenodd"
      d="M14.906 17.146a.75.75 0 0 1-.704-.49l-.048-.129a10.29 10.29 0 0 0-6.078-6.078l-.129-.048a.75.75 0 0 1 0-1.406l.13-.048a10.29 10.29 0 0 0 6.077-6.078l.048-.13a.75.75 0 0 1 1.407 0l.048.13a10.29 10.29 0 0 0 6.078 6.078l-.205.553.205-.553.129.048a.75.75 0 0 1 0 1.406l-.13.048-.204-.553.205.553a10.29 10.29 0 0 0-6.078 6.078l-.048.13a.75.75 0 0 1-.703.489m4.849-7.448a11.8 11.8 0 0 1-4.85-4.85 11.8 11.8 0 0 1-4.849 4.85 11.8 11.8 0 0 1 4.85 4.85 11.8 11.8 0 0 1 4.849-4.85M6.73 21.75a.75.75 0 0 1-.704-.49l-.022-.06a4.37 4.37 0 0 0-2.58-2.579l-.06-.022a.75.75 0 0 1 0-1.407l.06-.022.235.634-.234-.634a4.37 4.37 0 0 0 2.579-2.579l.022-.06a.75.75 0 0 1 1.407 0l.022.06a4.37 4.37 0 0 0 2.579 2.58l-.235.633.235-.634.06.022a.75.75 0 0 1 0 1.407l-.06.022a4.37 4.37 0 0 0-2.58 2.58l-.021.06a.75.75 0 0 1-.704.489m2.783-4.535.252.68zm-1.307.68c-.577.4-1.077.901-1.477 1.478-.4-.577-.9-1.077-1.476-1.477.576-.4 1.076-.9 1.476-1.477.4.577.9 1.077 1.477 1.477M3.925 3.63a.946.946 0 1 0 1.891 0 .946.946 0 0 0-1.891 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShiningStarOutline;
